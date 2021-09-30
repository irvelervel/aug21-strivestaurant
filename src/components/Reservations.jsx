// We're going to create a Class Component because we need to inject some logic!

import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class Reservations extends Component {

    // - I don't want the user to wait ungracefully for my fetch
    // because of this, I want the user to be immediately presented with the static 
    // content of my component
    // - so, the fetching process should happen AFTER the initial render of the static content
    // - let's learn about another lifecycle method, called componentDidMount

    state = {
        // the reservations will come in an array of objects
        reservations: [],
        isLoading: true,
        isError: false
    }

    // componentDidMount is a lifecycle method happening AFTER the initial render
    // componentDidMount happens JUST ONCE for the whole lifecycle of the component
    // because of this it's the PERFECT PLACE for EXPENSIVE OPERATIONS (i.e. fetches)

    fetchReservations = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    reservations: data,
                    isLoading: false,
                    isError: false
                })
            } else {
                // we'll fall here if the URL is mispelled or if the server has a problem
                console.log('an error happened in the fetch!')
                this.setState({
                    isLoading: false,
                    isError: true
                })
            }
        } catch (error) {
            // this is for a more generic error, something like an internet issue
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    zee = () => {
        let array = ['Strive']
        return array
    }

    componentDidMount = async () => {
        // here I can write my code, being sure that it will be executed:
        // 1) just once!
        // 2) immediately after the initial invocation of render()
        console.log('this is componentDidMount!')
        // here we're going to do the fetch...
        this.fetchReservations()
        console.log(this.zee())
    }

    render() {
        console.log('this is the render!')

        // if you set whatever state into render(), you immediately call render() again!
        // this will ALWAYS lead to an infinite loop!
        // this.setState({
        //     name: 'Stefano'
        // })

        // render fires MANY times!
        // initially, but also whenever a change is detected in the STATE or in the PROPS
        // of this component!
        return (
            <>
                <h3>RESERVATIONS</h3>
                {
                    this.state.isError && (
                        <Alert variant="danger">
                            Aww snap, we got an error! :(
                        </Alert>
                    )
                }
                {
                    this.state.isLoading && <Spinner animation="border" variant="success" />
                }
                <ListGroup>
                    {
                        this.state.reservations.length === 0 && !this.state.isLoading
                            ? <ListGroup.Item>NO RESERVATIONS SAVED!</ListGroup.Item>
                            : this.state.reservations.map(r => (
                                <ListGroup.Item key={r._id}>{r.name}</ListGroup.Item>
                            ))
                    }
                </ListGroup>
            </>
        )
    }
}

export default Reservations

// ARROW FUNCTIONS!
// let name = 'Guillermo'

// const arrowFunction = () => {
//     return name
// }

// const arrowFunction2 = () => (name)