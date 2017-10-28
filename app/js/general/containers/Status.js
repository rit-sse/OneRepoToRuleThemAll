import { connect } from 'react-redux';
import { closeStatus } from 'general/actions';
import Status from 'general/components/Status';

function mapStateToProps(store, props) {
  return {
    info: store.status.info || '',
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
