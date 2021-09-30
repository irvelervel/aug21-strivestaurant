// We're going to create a Class Component because we need to inject some logic!

import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Reservations extends Component {

    // - I don't want the user to wait ungracefully for my fetch
    // because of this, I want the user to be immediately presented with the static 
    // content of my component
    // - so, the fetching process should happen AFTER the initial render of the static content
    // - let's learn about another lifecycle method, called componentDidMount

    state = {
        // the reservations will come in an array of objects
        reservations: []
    }

    // componentDidMount is a lifecycle method happening AFTER the initial render
    // componentDidMount happens JUST ONCE for the whole lifecycle of the component
    // because of this it's the PERFECT PLACE for EXPENSIVE OPERATIONS (i.e. fetches)

    componentDidMount() {
        // here I can write my code, being sure that it will be executed:
        // 1) just once!
        // 2) immediately after the initial invocation of render()
        console.log('this is componentDidMount!')
        // here we're going to do the fetch...
    }

    render() {
        console.log('this is the render!')
        return (
            <>
                <h3>RESERVATIONS</h3>
                <ListGroup>
                    {
                        this.state.reservations.map(r => (
                            <ListGroup.Item>{r.name}</ListGroup.Item>
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