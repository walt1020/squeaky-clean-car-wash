import React, { Component } from 'react'
import { Form, Container } from 'semantic-ui-react'
import API from "../util/API"

class FormExampleCaptureValues extends Component {
  state = { name: '', password: '', submittedName: '', submittedPassword: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, password } = this.state

    this.setState({ submittedName: name, submittedPassword: password })

    console.log("working");

    API.userLogin({username:this.state.name, password:this.state.password});
}

  render() {
    const { name, password, submittedName, submittedPassword } = this.state

    return (
   <Container fluid>
        <Form className="center" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input width={5} placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input width={5} placeholder='Passsword' name='password' value={password} onChange={this.handleChange} />
            <Form.Button width="2" content='Submit' />
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default FormExampleCaptureValues