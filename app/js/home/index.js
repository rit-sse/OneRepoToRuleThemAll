import { injectAsyncReducer } from 'store';
import events from 'events/reducers';
import Page from './Page';

injectAsyncReducer('events', events);

export default Page;
