import { useEffect, useState } from "react";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

import { useParams } from 'react-router-dom'

const Attivita = () => {

  const params = useParams()
  const url = "https://striveschool-api.herokuapp.com/api/posts/"

  const [userPosts, setUserPosts] = useState([])

  const profiloUtente = useSelector((currState) => {
    return currState.profiles.ilMioID
  })

  const getPostAttività = () => {
    let id = params.id === "me" ? profiloUtente : params.id
    fetch(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
      },
    }

    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore")
        }

      })
      .then((arrayOfPosts) => {
        setUserPosts(arrayOfPosts.filter((post) => post.user._id === id).reverse())
        console.log("I MIEI POST", arrayOfPosts.filter((post) => post.user._id === profiloUtente))
      })
      .catch((err) => {

        console.log("errore fetch POST", err)
      })
  }

  useEffect(() => {
    getPostAttività()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])


  return (
    <Card className="mt-3">
      <Row className="align-items-center mb-3">
        <Col>
          <div className="d-flex align-items-center justify-content-between mt-3 mx-4">
            <h4 className="mb-0">Attività</h4>
            <div className={(params.id === "me" ? "d-flex align-items-center gap-3" : "d-none")}>
              <Button variant="outline-primary" className="rounded-pill fw-medium">
                Crea un post
              </Button>
              <i className="bi bi-pen"></i>
            </div>
          </div>

          <p className="text-primary ms-4 mb-0">0 follower</p>
        </Col>
      </Row>

      <Row>
        {userPosts.length > 0 ? (
          <Carousel>
            {userPosts.map((post) => {
              return (
                // carosello

                <Carousel.Item key={post._id}>
                  <Col xs={12} className="text-center" >
                    <div className="text-start ps-4">
                      <h3>{post.username}</h3>
                      <p>{post.text}</p>
                    </div>
                    <img className="img-fluid" src={post.image} />
                  </Col>


                </Carousel.Item>


              )
            })}
          </Carousel>
        ) : (
          <Col>
            <p className="fw-semibold ms-4 mb-0">
              Non hai ancora pubblicato nulla
            </p>
            <p className="ms-4">I posti che condividi appariranno qui</p>
          </Col>)
        }

      </Row >

      <hr className="mb-0 my-0" />

      <Row>
        <Col className="text-center py-3">
          <a href="#" className="fw-semibold text-decoration-none text-black">
            Mostra tutte le attività <i className="bi bi-arrow-right"></i>
          </a>
        </Col>
      </Row>
    </Card >
  );
};

export default Attivita;