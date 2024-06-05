import { actionTypes } from '~/redux/features/account/constants';

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case actionTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};

export const deposit = (amount: number) => {
  return {
    type: actionTypes.DEPOSIT,
    payload: amount,
  };
};

export const withdrawal = (amount: number) => {
  return {
    type: actionTypes.WITHDRAW,
    payload: amount,
  };
};

export default accountReducer;
