import React from "react";
type Props = {
  type?: React.HTMLInputTypeAttribute | undefined;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?:number;
};
export const TextInput = ({type, value, placeholder, onChange,maxLength}: Props) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};
export default TextInput;
