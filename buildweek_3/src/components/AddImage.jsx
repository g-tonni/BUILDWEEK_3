import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpId, newImg } from "../redux/action/addIMGAction";


const AddImage = function () {

    // const experienceURL = " https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId/picture"
    // 
    const dispatch = useDispatch()
    const getFinalUrl = useSelector((currState) => {
        return currState.image.fetchUrl

    })

    const idExp = useSelector((currState) => {
        return currState.image.expID

    })

    const postId = useSelector((currState) => {
        return currState.image.postId

    })
    const [image, setImage] = useState(null);

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
    }

    function handleSubmit(e) {
        let url



        const formData = new FormData();
        ;
        e.preventDefault();
        if (getFinalUrl === "profileImage") {
            formData.append("profile", image)
            url = "https://striveschool-api.herokuapp.com/api/profile/69383d5b601b380015479572/picture"
        } else if (getFinalUrl === "expImage") {
            formData.append("experience", image)
            url = `https://striveschool-api.herokuapp.com/api/profile/69383d5b601b380015479572/experiences/${idExp}/picture`
        } else {
            formData.append("post", image)
            url = `https://striveschool-api.herokuapp.com/api/posts/${postId} `
        }



        fetch(url, {
            method: "POST",
            headers: {

                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
            },
            body: formData,
        })
            .then((res) => {
                if (res.ok) {
                    alert('img postata')

                } else {
                    throw new Error('errore')
                }
            })
            .catch((err) => {
                console.log('errore', err)
            })
    }

    return (
        <form onSubmit={handleSubmit}

        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />

            {image && (
                <img
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    style={{ width: "200px", marginTop: "10px" }}
                />
            )}

            <button type="submit">Carica</button>
        </form>
    );
}



export default AddImage