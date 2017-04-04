import { connect } from 'react-redux';
import ButtonLink from 'components/general/ButtonLink';

function mapStateToProps(store) {
  return {
    shown: !!store.auth.officer,
  };
}

export default connect(mapStateToProps)(ButtonLink);
