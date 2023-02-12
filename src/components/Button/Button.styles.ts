import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

type Size = 'small' | 'medium' | 'large';

interface ButtonProps {
  size: Size;
  disabled: boolean;
  variant: 'fill' | 'outline';
}

const NativeButton = styled.button<ButtonProps>((props) => ({
  fontSize: '1rem',
  fontWeight: 500,
  fontFamily: 'sans-serif',
  height: '36px',
  width:
    props.size === 'small'
      ? '80px'
      : props.size === 'medium'
      ? '200px'
      : '250px',
  padding:
    props.size === 'medium'
      ? '0 22px'
      : props.size === 'large'
      ? '0 32px'
      : '0 10px',
  border:
    props.variant === 'fill'
      ? '1px solid transparent'
      : `1px solid ${COLORS.white}`,
  backgroundColor: props.disabled
    ? COLORS.grayLight
    : props.variant === 'fill'
    ? COLORS.primary
    : COLORS.transparent,
  color: COLORS.white,
  '&:focus': {
    outlineColor: 'red',
    outlineOffset: '4px',
  },
  '&:hover': {
    cursor: props.disabled ? 'none' : 'pointer',
    color: 'black',
    backgroundColor: props.disabled
      ? ''
      : props.variant === 'fill'
      ? COLORS.primaryLight
      : COLORS.grayTransparent,
    transition: '0.4s',
  },
}));

export { NativeButton };
