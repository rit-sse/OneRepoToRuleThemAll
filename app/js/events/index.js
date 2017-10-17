import Page from './Page.jsx';
import events from './reducers';
import { injectAsyncReducer } from 'store';

injectAsyncReducer('events', events);

export default Page;
