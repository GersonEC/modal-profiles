import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Loader = () => {
  return (
    <Wrapper title='loader'>
      <ThreeDots
        height='90'
        width='90'
        radius='10'
        color={COLORS.primary}
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        visible={true}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default Loader;
