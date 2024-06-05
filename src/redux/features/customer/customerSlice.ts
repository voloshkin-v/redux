import { actionTypes } from '~/redux/features/customer/constants';

interface CustomerState {
  firstName: string;
  lastName: string;
  nationalId: string;
  isCreated: boolean;
}

const initialState: CustomerState = {
  firstName: '',
  lastName: '',
  nationalId: '',
  isCreated: false,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_CREATE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        nationalId: action.payload.nationalId,
        isCreated: true,
      };
    default:
      return state;
  }
};

export const createCustomer = (firstName: string, lastName: string, nationalId: string) => {
  return {
    type: actionTypes.CUSTOMER_CREATE,
    payload: { firstName, lastName, nationalId },
  };
};

export default customerReducer;
