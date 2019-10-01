import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      phone: '',
      id: props.id
    };

    this.toggle = this.toggle.bind(this);
    this.submitData = this.submitData.bind(this);
  }


    submitData() {
        const item = this.state;
        this.toggle();
        this.props.handleSave(item);
    }

    nameHandler(e) {
        this.setState({ name: e.target.value });
    }

    phoneHandler(e) {
        this.setState({ phone: e.target.value });
    }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Button color={this.props.color} onClick={this.toggle} size="lg">
        {this.props.buttonLabel}{this.props.text}</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> {this.props.day} {this.props.text}</ModalHeader>

          <Form>
                            <p><span>Name:</span><input value={this.state.name} onChange={(e) => this.nameHandler(e)} /></p>
                            <p><span>Phone Number:</span><input value={this.state.phone} onChange={(e) => this.phoneHandler(e)} /></p>
          </Form>

          <ModalFooter>
            <Button color="primary" onClick={this.submitData}>Ok</Button>{' '}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Popup;