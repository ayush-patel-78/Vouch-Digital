import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
  Row,
  Col,
  fw,
} from 'react-bootstrap'

import './css/Navbar.css'
function NavigationBar() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="NavigationBar">
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">
                  <h2>
                    ATools<span>.</span>
                  </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  />

                  <button className="freeTrial" type="button">
                    Start Free Trial
                  </button>
                  <button className="login" type="button">
                    Login
                  </button>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NavigationBar
