import { injectAsyncReducer } from 'store';

import Page from './Page';
import gtv from './reducers';

injectAsyncReducer('gtv', gtv);

export default Page;
