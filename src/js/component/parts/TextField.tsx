import * as React from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "date";
};

export const TextField = ({ label, value, onChange, type }: Props) => {
  return (
    <label className="flex items-center gap-2">
      <span className="w-[100px]">{label}</span>
      <input
        className="w-full border border-gray-400 p-2 bg-white"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
