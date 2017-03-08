import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'components/general/Button';
import moment from 'moment';

class EventModal extends Component {
  static propTypes = {
    event: React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      committeeName: React.PropTypes.string,
      startDate: React.PropTypes.string,
      endDate: React.PropTypes.string,
      description: React.PropTypes.string,
      location: React.PropTypes.string,
      image: React.PropTypes.string,
    }),
    isOpen: React.PropTypes.bool.isRequired,
    close: React.PropTypes.func.isRequired,
    create: React.PropTypes.func.isRequired,
    update: React.PropTypes.func.isRequired,
    committees: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  static defaultProps = {
    event: {
      id: 0,
      name: '',
      committeeName: '',
      startDate: '',
      endDate: '',
      description: '',
      location: '',
      image: '',
    },
  }

  constructor() {
    super();

    this.offset = new Date().getTimezoneOffset() / 60;
  }

  submit = () => {
    const event = {
      name: this.eventName.value,
      committeeName: this.committee.value,
      startDate: moment(this.startDate.value).toISOString(),
      endDate: moment(this.endDate.value).toISOString(),
      description: this.description.value,
      location: this.location.value,
      image: this.image.value || null,
    };

    if (this.props.event) this.props.update(this.props.event.id, event);
    else this.props.create(event);
    this.props.close();
  }

  render() {
    const options = this.props.committees.map(committee => <option key={committee.name} value={committee.name}>{committee.name}</option>);
    const event = this.props.event || {};

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.close}>
        <ModalHeader toggle={this.props.close}>{this.props.event ? 'Update Event' : 'Create Event'}</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group row">
              <label htmlFor="name" className="col-3 col-form-label">Event Name</label>
              <div className="col-9">
                <input defaultValue={event.name} id="name" name="name" className="form-control" placeholder="Event Name" ref={(c) => { this.eventName = c; }} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="startDate" className="col-3 col-form-label">Start Date</label>
              <div className="col-9">
                <input
                  id="startDate"
                  name="startDate"
                  type="datetime-local"
                  className="form-control"
                  ref={(c) => { this.startDate = c; }}
                  defaultValue={event.startDate ? moment(event.startDate).subtract(this.offset, 'hour').toISOString().split('.')[0] : ''}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="endDate" className="col-3 col-form-label">End Date</label>
              <div className="col-9">
                <input
                  id="endDate"
                  name="endDate"
                  type="datetime-local"
                  className="form-control"
                  ref={(c) => { this.endDate = c; }}
                  defaultValue={event.endDate ? moment(event.endDate).subtract(this.offset, 'hour').toISOString().split('.')[0] : ''}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-3 col-form-label">Description</label>
              <div className="col-9">
                <textarea
                  rows="5"
                  id="description"
                  name="description"
                  className="form-control"
                  defaultValue={event.description}
                  ref={(c) => { this.description = c; }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="location" className="col-3 col-form-label">Location</label>
              <div className="col-9">
                <input
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder="location"
                  defaultValue={event.location}
                  ref={(c) => { this.location = c; }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="image" className="col-3 col-form-label">Image URL</label>
              <div className="col-9">
                <input
                  id="image"
                  name="image"
                  className="form-control"
                  placeholder="Image URL"
                  defaultValue={event.image}
                  ref={(c) => { this.image = c; }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="committee" className="col-3 col-form-label">Comittee</label>
              <div className="col-9">
                <select
                  id="committee"
                  name="comittee"
                  className="form-control"
                  defaultValue={event.committeeName}
                  ref={(c) => { this.committee = c; }}
                >
                  {options}
                </select>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-sse" onClick={this.submit}>{this.props.event ? 'Update' : 'Create'}</Button>
          <Button className="btn btn-secondary" onClick={this.props.close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default EventModal;
