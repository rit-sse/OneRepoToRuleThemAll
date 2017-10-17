import Page from './Page.jsx';
import { injectAsyncReducer } from 'store';
import events from 'events/reducers';

injectAsyncReducer('events', events);

export default Page;
