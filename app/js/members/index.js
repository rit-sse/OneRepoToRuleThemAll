import { injectAsyncReducer } from 'store';

import Page from './Page';
import users from './reducers';

injectAsyncReducer('users', users);

export default Page;
