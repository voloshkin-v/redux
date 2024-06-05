import { useAppSelector } from '~/redux/hooks';

const Customer = () => {
  const { firstName, lastName } = useAppSelector((state) => state.customer);
  const fullName = `${firstName} ${lastName}`;

  return <h2>Hello, {fullName} 👋</h2>;
};

export default Customer;
