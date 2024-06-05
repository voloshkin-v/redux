interface CustomerState {
  firstName: string;
  lastName: string;
  nationalId: string;
}

const initialState: CustomerState = {
  firstName: '',
  lastName: '',
  nationalId: '',
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'customer/customerCreated':
      console.log('ACTION of customer/customerCreated: ', action);

      return {
        firstName: action.payload.firstName,
        lastName: action.payload.firstName,
        nationalId: action.payload.nationalId,
      };

    default:
      return state;
  }
};

export const createCustomer = (firstName: string, lastName: string, nationalId: string) => {
  return {
    type: 'customer/customerCreated',
    payload: { firstName, lastName, nationalId },
  };
};

export default customerReducer;
