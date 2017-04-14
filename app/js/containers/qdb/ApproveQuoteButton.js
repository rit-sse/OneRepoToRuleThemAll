import { connect } from 'react-redux';
import ButtonLink from 'components/general/ButtonLink';

function mapStateToProps(store, props) {
  return {
    shown: !!store.auth.officer && props.path !== '/qdb/approval',
  };
}

export default connect(mapStateToProps)(ButtonLink);
