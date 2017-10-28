import { injectAsyncReducer } from 'store';

import Page from './Page';
import shifts from './reducers/shifts';
import mentors from './reducers/mentors';
import specialties from './reducers/specialties';

injectAsyncReducer('shifts', shifts);
injectAsyncReducer('mentors', mentors);
injectAsyncReducer('specialties', specialties);

export default Page;
