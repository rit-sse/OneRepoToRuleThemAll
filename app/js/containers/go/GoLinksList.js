import { connect } from 'react-redux';
import List from 'components/general/List';
import GoLink from 'components/go/GoLink';

function mapStateToProps(store) {
  return {
    item: GoLink,
    wrapper: 'tbody',
    items: [{
      name: 'test'
    },
    {
      name: 'another'
    }]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => {},
    deleteItem: id => {},
    editItem: id => {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
