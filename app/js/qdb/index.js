import { injectAsyncReducer } from 'store';

import Page from './Page';
import tags from './reducers/tags';
import quotes from './reducers/quotes';

injectAsyncReducer('tags', tags);
injectAsyncReducer('quotes', quotes);

export default Page;
