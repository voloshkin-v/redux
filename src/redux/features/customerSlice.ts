interface CustomerState {
  firstName: string;
  lastName: string;
}

const initialState: CustomerState = {
  firstName: '',
  lastName: '',
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'customer/customerCreated':
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.firstName,
      };

    default:
      return state;
  }
};

export const createCustomer = (firstName: string, lastName: string) => {
  return {
    type: 'customer/customerCreated',
    payload: { firstName, lastName },
  };
};

export default customerReducer;
