import { connect } from 'react-redux';
import { closeStatus } from 'actions/status';
import Status from 'components/general/Status';

function mapStateToProps(store, props) {
  return {
    error: store.status.error || '',
    loading: !!props.type.find(type => Object.values(store.status.loading).includes(type)),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(closeStatus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
