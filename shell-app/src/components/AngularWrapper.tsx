import React, { Suspense } from "react";

export interface AngularWrapperProps {
  component: string;
}

const ComponentImports = {
  App: () => import("@angular-mfe/App"),
} as const;

const AngularWrapper = ({ component }: AngularWrapperProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log("AngularWrapper");
    // import("@angular-mfe/App").then(m => console.log(m)).catch(e => console.log(e));
    ComponentImports[component as keyof typeof ComponentImports]().then(
      (module) => {
        // await module();
        console.log("module", module);

        const AngularComponent = module.default;
        console.log("AngularComponent", AngularComponent);

        const { mount } = AngularComponent;
        if (divRef.current) {
          mount(divRef.current);
        }
      }
    );
  }, [component]);
  return (
    <Suspense fallback={<p>AngularWrapper is loading...</p>}>
      <div ref={divRef} />
    </Suspense>
  );
};

export default AngularWrapper;
