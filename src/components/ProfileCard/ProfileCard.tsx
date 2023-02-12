import styled from 'styled-components';

interface Props {
  avatarImg: string;
  name: string;
  surname: string;
  email: string;
}

const ProfileCard: React.FC = () => {
  return (
    <Wrapper>
      <Avatar src='https://robohash.org/easuscipitvoluptatum.png?size=300x300&set=set1' />
      <FullName>Pamelia Reginal</FullName>
      <Email>marietta.lemke@email.com</Email>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  border: 'solid red',
});
const FullName = styled.p({
  border: 'solid green',
});

const Email = styled.p({
  border: 'solid blue',
});

const Avatar = styled.img({
  border: 'solid orange',
});

export default ProfileCard;
