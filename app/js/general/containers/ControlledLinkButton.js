import { connect } from 'react-redux';
import ButtonLink from 'general/components/ButtonLink';

function mapStateToProps(store, props) {
  return {
    shown: !!store.auth.officer && props.path !== props.to,
  };
}

export default connect(mapStateToProps)(ButtonLink);
