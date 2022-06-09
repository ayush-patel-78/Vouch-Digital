import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './css/Form.css'
// import meetings from './meetings.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Login() {
  const [state, setState] = useState({})
  function handleChange(e) {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // console.log(state)
  }
  const [result, setResult] = useState({})
  async function handleSubmit(e) {
    e.preventDefault()

    await axios
      .post('https://reqres.in/api/login', state)
      .then((res) => {
        console.log(res.data.token)
        setResult({
          token: res.data.token,
        })
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response.data.error)
        setResult({ ['error']: err.response.data.error })
      })
    // console.log(response)
    Login()
  }

  useEffect(() => {
    console.log(result)
  })

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="Form">
              <Form>
                <Row>
                  <Col>
                    <div>
                      <h3>Welcome Back</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="subtitle">
                      <Form.Text className="text-muted">
                        subtitle text goes here
                      </Form.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Email address</Form.Label> */}
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Email address*"
                        onChange={(e) => {
                          handleChange(e)
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      {/* <Form.Label>Password</Form.Label> */}
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password*"
                        onChange={(e) => {
                          handleChange(e)
                        }}
                      />
                    </Form.Group>
                    <button
                      onClick={(e) => {
                        handleSubmit(e)
                      }}
                      className="FormLogin"
                    >
                      Login
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3 checkbox"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="Remember Password" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <a href="" className="forgot">
                      {'forgot Password ? '}
                    </a>
                  </Col>
                </Row>

                {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
                <div>
                  {result.token && (
                    <div className="success">Token :{result.token}</div>
                  )}
                  {result.error && (
                    <div className="error">Error : {result.error}</div>
                  )}
                </div>
              </Form>
            </div>
          </Col>

          <Col xs={6}>
            <div className="loginImage">
              {/* <img src={meetings} alt="login page image" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Login
