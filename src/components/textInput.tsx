import React from "react";
type Props = {
  type?: React.HTMLInputTypeAttribute | undefined;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput = ({type, value, placeholder, onChange}: Props) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
