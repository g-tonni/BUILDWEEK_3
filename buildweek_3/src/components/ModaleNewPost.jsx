import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";

const ModaleNewPost = function (props) {

    const postID = useSelector((currentState) => {
        return currentState.articoli.postId
    })





    let url = "https://striveschool-api.herokuapp.com/api/posts/"

    // const [newPost, setNewPosts] = useState("")
    const [formPost, setFormPost] = useState({
        text: ""
    })

    const changePost = () => {

        let method
        let finalURL

        if (postID !== '') {
            method = 'PUT'
            finalURL = url + postID
        } else {
            method = 'POST'
            finalURL = url
        }

        fetch(finalURL, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
            },
            body: JSON.stringify(formPost),
        }

        )
            .then((res) => {
                if (res.ok) {
                    alert("post pubblicato")
                    props.aggiornaDopoLaPost()
                    props.openModal(false)
                } else {
                    throw new Error("errore")
                }

            })

            .catch((err) => {

                console.log("errore fetch POST", err)
            })
    }

    // useEffect(() => {
    //     getPostHomePage()
    // }, [])


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Gentjana
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => {
                    e.preventDefault()

                    changePost()
                    setFormPost({
                        text: ""
                    })
                }}>
                    <Form.Control as="textarea"
                        value={formPost.text}
                        onChange={(e) => {
                            setFormPost({
                                text: e.target.value
                            })
                        }}
                        rows={3} />
                    <Modal.Footer>
                        <Button type="submit">Pubblica</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>

        </Modal>
    );
}
export default ModaleNewPost

