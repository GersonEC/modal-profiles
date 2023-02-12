import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { User, getUsers } from '../../api/random_users';
import Button from '../../components/Button';
import InputNumber from '../../components/InputNumber';
import Loader from '../../components/Loader';
import ProfileButton from '../../components/ProfileButton';
import ProfileCard from '../../components/ProfileCard';
import {
  Close,
  Dialog,
  ErrorMessage,
  Header,
  LoaderWrapper,
  ProfileList,
  SelectedProfile,
} from './Modal.styles';

interface Props {
  isOpen: boolean;
  onCloseChange: () => void;
}

const initialSize = 1;

const Modal: React.FC<Props> = ({ isOpen, onCloseChange }) => {
  const [size, setSize] = useState<number>(initialSize);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers({ size }),
    onSuccess: (data) => {
      setUsers(data);
    },
    enabled: isOpen,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const usersMutation = useMutation({
    mutationFn: () => getUsers({ size }),
    onSuccess: (data) => {
      const newUsers = users.concat(data);
      setUsers(newUsers);
    },
  });

  const isLoading =
    usersQuery.status === 'loading' || usersMutation.status === 'loading';

  const onSizeChange = (e: any) => {
    setSize(e.target.value);
    setErrorMessage(null);
  };

  const onLoadMoreClick = () => {
    if (size >= 20) {
      setErrorMessage('The size of users asked should be less than 20');
      return;
    }
    usersMutation.mutate();
    setSize(initialSize);
  };

  const onProfileClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <Dialog open={isOpen}>
      <Header>
        <div>
          <InputNumber
            min={1}
            max={100}
            placeholder='Size'
            value={size}
            onChange={onSizeChange}
          />
          <Button variant='fill' size='medium' onClick={onLoadMoreClick}>
            LOAD MORE
          </Button>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SelectedProfile>
          {selectedUser && <ProfileCard user={selectedUser} />}
        </SelectedProfile>
        <Close>
          <Button variant='fill' size='small' onClick={onCloseChange}>
            CLOSE
          </Button>
        </Close>
      </Header>
      <ProfileList>
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          users.map((user) => (
            <ProfileButton
              key={user.uid}
              user={user}
              isSelected={user.uid === selectedUser?.uid}
              onClick={() => onProfileClick(user)}
            />
          ))
        )}
      </ProfileList>
    </Dialog>
  );
};

export default Modal;
