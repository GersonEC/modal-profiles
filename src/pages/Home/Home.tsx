import { useState } from 'react';
import { User } from '../../api/random_users';
import Button from '../../components/Button';
import Modal from '../Modal/Modal';
import './Home.styles.css';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const setNewUsers = (users: User[]) => {
    setUsers(users);
  };

  return (
    <main>
      <Button variant='outline' size='medium' onClick={onButtonClick}>
        OPEN MODAL
      </Button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          users={users}
          setUsers={setNewUsers}
          onCloseChange={onButtonClick}
        />
      )}
    </main>
  );
};

export default Home;
