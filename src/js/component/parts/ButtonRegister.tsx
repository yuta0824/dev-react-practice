import * as React from "react";
import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export const ButtonRegister = ({ onClick, children }: PropsWithChildren<Props>) => {
  return <button onClick={onClick}>{children}</button>;
};
