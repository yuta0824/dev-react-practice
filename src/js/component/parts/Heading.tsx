import * as React from "react";
import { PropsWithChildren } from "react";

type Props = {
  label: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ label, children }: PropsWithChildren<Props>) => {
  if (label === "h1") return <h1 className="text-4xl">{children}</h1>;
  if (label === "h2") return <h2 className="text-2xl">{children}</h2>;
  if (label === "h3") return <h3 className="text-2xl">{children}</h3>;
  if (label === "h4") return <h4 className="text-xl">{children}</h4>;
  if (label === "h5") return <h5 className="text-xl">{children}</h5>;
  if (label === "h6") return <h6 className="text-xl">{children}</h6>;
};
