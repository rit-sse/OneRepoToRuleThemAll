import { connect } from 'react-redux';
import Mentor from './Mentor';

function mapStateToProps({ mentors }, ownProps) {
  return {
    ...mentors.byName[ownProps.event.fullName],
  };
}

export default connect(mapStateToProps)(Mentor);
