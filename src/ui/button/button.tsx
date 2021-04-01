import React, { ReactElement } from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps): ReactElement => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};
