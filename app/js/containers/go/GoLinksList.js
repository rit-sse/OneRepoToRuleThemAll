import { connect } from 'react-redux';
import List from 'components/general/List';
import GoLink from 'components/go/GoLink';

function mapStateToProps(store) {
  return {
    item: GoLink,
    wrapper: 'tbody',
    items: [
      {
        "shortLink": "mock-interviews",
        "longLink": "https://goo.gl/forms/rf8EY8qOhrwZas0s2",
        "createdAt": "2017-02-21T07:24:56.514Z",
        "updatedAt": "2017-02-21T07:24:56.514Z"
      },
      {
        "shortLink": "django",
        "longLink": "https://docs.google.com/a/g.rit.edu/forms/d/e/1FAIpQLSdwfcGxpbk61Ui2be0KbC1UhDmE2TlmfTqOWLkZIvYxbeO9nA/viewform",
        "createdAt": "2017-02-15T21:37:44.837Z",
        "updatedAt": "2017-02-15T21:37:44.837Z"
      },
      {
        "shortLink": "slides",
        "longLink": "https://docs.google.com/a/g.rit.edu/presentation/d/1Ld-eKrchIsfJ-PS-QINZBVfgtWISdjs5OlPqMJYjOVs/edit?usp=sharing",
        "createdAt": "2017-02-15T20:14:09.180Z",
        "updatedAt": "2017-02-15T20:14:09.180Z"
      },
      {
        "shortLink": "meeting",
        "longLink": "https://www.youtube.com/watch?v=AgFeZr5ptV8",
        "createdAt": "2017-02-15T19:52:28.560Z",
        "updatedAt": "2017-02-15T19:52:28.560Z"
      },
    ]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => {},
    deleteItem: () => {},
    editItem: () => {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
