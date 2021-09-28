// import { Carousel } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import dishes from '../data/menu.json'

const Home = () => (
    // we should still provide a container
    <Container>
        <Row className="justify-content-center" style={{ marginTop: '1em' }}>
            <Col xs={12} md={6} className="text-center">
                <h1>Welcome to Strivestaurant!</h1>
                <h3>We can only serve pasta</h3>
                <Carousel className="mt-4">
                    {
                        dishes.map(dish => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={dish.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Col>
        </Row>
    </Container>
)

export default Home