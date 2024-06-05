import { useAppSelector } from '~/redux/hooks';

import CreateCustomer from '~/components/CreateCustomer';
import CustomerDetails from '~/components/CustomerDetails';

const App = () => {
  const { isCreated } = useAppSelector((state) => state.customer);

  return <div>{isCreated ? <CustomerDetails /> : <CreateCustomer />}</div>;
};

export default App;
