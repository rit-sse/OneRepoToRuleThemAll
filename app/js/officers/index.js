import { injectAsyncReducer } from 'store';

import Page from './Page';
import officers from './reducers';

injectAsyncReducer('officers', officers);

export default Page;
