import React, { Suspense } from "react";

export interface SvelteWrapperProps {
  component: string;
}

const ComponentImports = {
  App: () => import("@svelte-mfe/App"),
} as const;

const SvelteWrapper = ({ component }: SvelteWrapperProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ComponentImports[component as keyof typeof ComponentImports]().then(
      (module) => {
        const SvelteComponent = module.default;

        const { mount } = SvelteComponent;
        if (divRef.current) {
          mount(divRef.current);
        }
      }
    );
  }, [component]);
  return (
    <Suspense fallback={<p>SvelteWrapper is loading...</p>}>
      <div ref={divRef} />
    </Suspense>
  );
};

export default SvelteWrapper;
