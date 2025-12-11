import { useState } from "react";


const AddImage = function () {

    const [image, setImage] = useState(null);

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("profile", image);

        fetch("https://striveschool-api.herokuapp.com/api/profile/69383d5b601b380015479572/picture", {
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
        <form onSubmit={handleSubmit}>
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