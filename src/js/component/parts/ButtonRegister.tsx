import * as React from "react";

interface Props {
  onClick: () => void;
  text: string;
}

export const ButtonRegister = ({ onClick, text }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};
