import React from 'react';
import { NativeButton } from './Button.styles';

type Size = 'small' | 'medium' | 'large';
interface Props {
  variant: 'fill' | 'outline';
  size: Size;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  variant,
  size,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <NativeButton
      size={size}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </NativeButton>
  );
};

export default Button;
