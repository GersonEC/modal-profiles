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
      {isOpen && <Modal isOpen={isOpen} onCloseChange={onButtonClick} />}
    </main>
  );
};

export default Home;
