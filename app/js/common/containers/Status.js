import { connect } from 'react-redux';
import { closeStatus } from 'common/actions';
import Status from 'common/components/Status';

function mapStateToProps(store, props) {
  return {
    info: store.status.info || '',
    error: store.status.error || '',
    // Show the loading spinner if there's a loading state in the store or there isn't an error
    loading: !!props.type.find(type => Object.values(store.status.loading).includes(type))
      && !store.status.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(closeStatus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
