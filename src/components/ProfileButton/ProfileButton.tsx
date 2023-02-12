import { User } from '../../api/random_users';
import { ButtonWrapper } from './ProfileButton.styles';

interface Props {
  user: User;
  isSelected: boolean;
  onClick: () => void;
}

const ProfileButton: React.FC<Props> = (props: Props) => {
  return (
    <ButtonWrapper isSelected={props.isSelected} onClick={props.onClick}>
      {props.user.first_name}
    </ButtonWrapper>
  );
};

export default ProfileButton;
