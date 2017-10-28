import { injectAsyncReducer } from 'store';

import Page from './Page';
import go from './reducers';

injectAsyncReducer('go', go);

export default Page;
