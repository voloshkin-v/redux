import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import accountReducer from '~/redux/features/account/accountSlice';
import customerReducer from '~/redux/features/customer/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composedEnhancer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
