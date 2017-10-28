import { injectAsyncReducer } from 'store';

import Page from './Page';
import { memberships, members } from './reducers';

injectAsyncReducer('members', members);
injectAsyncReducer('memberships', memberships);

export default Page;
