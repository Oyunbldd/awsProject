import React from "react";
type Props = {
  children: React.ReactChild;
  disabled?: boolean;
  onClick: () => void;
};
export const Button = ({children, disabled, onClick}: Props) => {
  return <button onClick={onClick}>{children}</button>;
};
export default Button;
