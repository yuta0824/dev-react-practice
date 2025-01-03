import * as React from "react";
import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export const ButtonRegister = ({ onClick, children }: PropsWithChildren<Props>) => {
  return (
    <button className="bg-black py-4 px-10 w-fit text-white rounded mx-auto" onClick={onClick}>
      {children}
    </button>
  );
};
