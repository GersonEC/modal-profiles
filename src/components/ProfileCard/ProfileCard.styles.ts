import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Wrapper = styled.div({
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '4px',
  width: '350px',
  height: '50px',
  backgroundColor: COLORS.selected,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 2px',
});
const Info = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
});

const FullName = styled.span({
  textAlign: 'center',
  fontWeight: 600,
});

const Email = styled.span({
  color: 'gray',
  fontWeight: 600,
});

const Avatar = styled.img`
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export { Avatar, Email, FullName, Wrapper, Info };
