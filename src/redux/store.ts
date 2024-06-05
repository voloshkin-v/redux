import { combineReducers, legacy_createStore as createStore } from 'redux';

import accountReducer from '~/redux/features/accountSlice';
import customerReducer from '~/redux/features/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer);

console.log(store.getState());
