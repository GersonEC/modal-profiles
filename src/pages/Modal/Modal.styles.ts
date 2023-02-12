import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Dialog = styled.dialog({
  border: 'solid red',
  height: '500px',
  width: '400px',
  background: COLORS.white,
  zIndex: 1,
});

export { Dialog };
