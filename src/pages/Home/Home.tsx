import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../Modal/Modal';
import './Home.styles.css';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Button variant='outline' size='medium' onClick={onButtonClick}>
        OPEN MODAL
      </Button>
      <Modal isOpen={isOpen} />
    </main>
  );
};

export default Home;
