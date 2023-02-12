import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Dialog = styled.dialog({
  background: COLORS.white,
  height: '60%',
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  zIndex: 1,
});

const Header = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
});
const ProfileList = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '4px',
  overflowY: 'scroll',
});
const LoaderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
const Close = styled.div({
  position: 'absolute',
  top: 0,
  right: 10,
});
const SelectedProfile = styled.div({
  position: 'absolute',
  top: '-100px',
  left: '35%',
});
const ErrorMessage = styled.p({
  color: 'red',
});

export {
  Dialog,
  Header,
  ProfileList,
  Close,
  ErrorMessage,
  SelectedProfile,
  LoaderWrapper,
};
