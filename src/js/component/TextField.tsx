import * as React from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "date";
};

export const TextField = ({ label, value, onChange, type }: Props) => {
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
};
