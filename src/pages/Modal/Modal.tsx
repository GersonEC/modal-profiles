import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getUsers } from '../../api/random_users';
import InputNumber from '../../components/InputNumber';
import Loader from '../../components/Loader';
import { Dialog } from './Modal.styles';
import ProfileCard from '../../components/ProfileCard';

interface Props {
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ isOpen }) => {
  const [size, setSize] = useState<number>(1);
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers({ size }),
    enabled: isOpen,
  });

  const onSizeChange = (e: any) => {
    setSize(e.target.value);
  };

  if (usersQuery.isFetching) return <Loader />;

  return (
    <Dialog open={isOpen}>
      {/* <InputNumber
        min={0}
        max={100}
        placeholder='Size'
        value={size}
        onChange={onSizeChange}
      />
      <span>{JSON.stringify(usersQuery.data)}</span> */}
      <ProfileCard />
    </Dialog>
  );
};

export default Modal;
