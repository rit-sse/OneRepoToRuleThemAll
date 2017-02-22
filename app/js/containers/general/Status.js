import { connect } from 'react-redux';
import { closeStatus } from 'actions/status';
import Status from 'components/general/Status';

function mapStateToProps(store, props) {
  return {
    error: store.status.error[props.type] ? store.status.error[props.type] : '',
    loading: Object.values(store.status.loading).includes(props.type),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(closeStatus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
