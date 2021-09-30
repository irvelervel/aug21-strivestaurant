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

    fetchReservations = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    reservations: data
                })
            } else {
                console.log('an error happened in the fetch!')
            }
        } catch (error) {
            console.log(error)
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
                <ListGroup>
                    {
                        this.state.reservations.map(r => (
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