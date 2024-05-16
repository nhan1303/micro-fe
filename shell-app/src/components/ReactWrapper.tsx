import React, { Suspense } from "react";

export interface ReactWrapperProps {
  component: string;
}

const ComponentImports = {
  App: () => import("@react-mfe/App"),
} as const;

const ReactWrapper = ({ component }: ReactWrapperProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ComponentImports[component as keyof typeof ComponentImports]().then(
      (module) => {
        
        const ReactComponent = module.default;
        console.log('ReactComponent', ReactComponent);

        const { mount } = ReactComponent;
        if (divRef.current) {
          mount(divRef.current);
        }
      }
    );
  }, [component]);
  return (
    <Suspense fallback={<p>ReactWrapper is loading...</p>}>
      <div ref={divRef} />
    </Suspense>
  );
};

export default ReactWrapper;
