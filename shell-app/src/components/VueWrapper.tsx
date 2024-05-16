import React, { Suspense } from "react";

export interface VueWrapperProps {
  component: string;
}

const ComponentImports = {
  App: () => import("@vue-mfe/App"),
} as const;

const VueWrapper = ({ component }: VueWrapperProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ComponentImports[component as keyof typeof ComponentImports]().then(
      (module) => {
        const VueComponent = module.default;

        const { mount } = VueComponent;
        if (divRef.current) {
          mount(divRef.current);
        }
      }
    );
  }, [component]);
  return (
    <Suspense fallback={<p>VueWrapper is loading...</p>}>
      <div ref={divRef} />
    </Suspense>
  );
};

export default VueWrapper;
