import { User } from '../../api/random_users';
import { Avatar, Email, FullName, Info, Wrapper } from './ProfileCard.styles';

interface Props {
  user: User;
}

const ProfileCard: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <Avatar src={props.user.avatar} />
      <Info>
        <FullName>
          {props.user.first_name} {props.user.last_name}
        </FullName>
        <Email>{props.user.email}</Email>
      </Info>
    </Wrapper>
  );
};

export default ProfileCard;
