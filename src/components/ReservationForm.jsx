import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// name -> string
// phone -> string | number
// numberOfPeople -> string | number
// smoking -> boolean
// dateTime -> string
// specialRequests -> string

class ReservationForm extends React.Component {

    state = {
        reservation: {
            name: '',
            phone: '',
        }
    }

    render() {
        return (
            <>
                <h2>BOOK YOUR TABLE HERE</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                            onChange={
                                // this will happen every time I input a keystroke
                                e => this.setState({
                                    reservation: {
                                        ...this.state.reservation,
                                        // with the ... your making a copy of all the properties
                                        // already existing into this.state.reservation
                                        name: e.target.value
                                        // and then you're just overwriting ONE property
                                    }
                                })}
                            value={this.state.reservation.name}
                            type="text"
                            placeholder="Enter your name here"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone here"
                            value={this.state.reservation.phone}
                            onChange={e => this.setState({
                                reservation: {
                                    ...this.state.reservation,
                                    phone: e.target.value
                                }
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Do you smoke?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date and Time</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" placeholder="Enter your special requests here" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default ReservationForm