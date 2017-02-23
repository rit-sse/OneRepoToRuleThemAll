import {
    createAction as createCreateAction,
    createLoading
} from './utils';

export const GO = 'GO';
export const GET_LINKS = 'GET_LINKS';

// Creates a wrapper for the loading indications
const createAction = createCreateAction(GO);
const loading = createLoading(GO);

export function getLinks(getNext = true) {
    return (dispatch, getState, api) => {
        dispatch(loading(GET_LINKS));
        if (!getNext) {

        }
        const data = [];
        api.Links.all({
            sort: 'DESC'
        })
        .then(links => dispatch(createAction(GET_LINKS, links.data)))
        .catch(err => dispatch(createAction(GET_LINKS, err)));
    }
}
