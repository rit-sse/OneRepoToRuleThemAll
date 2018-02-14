import { injectAsyncReducer } from 'store';
import officers from 'officers/reducers';

import Page from './Page';
import { memberships, members } from './reducers';

injectAsyncReducer('members', members);
injectAsyncReducer('memberships', memberships);
injectAsyncReducer('officers', officers);

export default Page;
