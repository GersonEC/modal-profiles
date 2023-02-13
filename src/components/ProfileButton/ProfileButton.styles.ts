import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

interface Props {
  isSelected: boolean;
}
const ButtonWrapper = styled.button<Props>((props) => ({
  border: '1.5px solid black',
  backgroundColor: props.isSelected ? COLORS.selected : COLORS.white,
  width: '200px',
  height: '50px',
  borderRadius: '0 0 0 0',
  fontSize: '1.2rem',
  fontWeight: 600,
  ':hover': {
    cursor: 'pointer',
    backgroundColor: COLORS.grayTransparent,
    transition: '0.4s',
  },
}));

export { ButtonWrapper };
