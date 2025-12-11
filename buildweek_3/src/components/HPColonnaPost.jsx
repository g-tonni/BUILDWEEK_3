import { useEffect } from "react"

const HPColonnaPost = function () {
    const url = "https://striveschool-api.herokuapp.com/api/posts/"

    const getPostHomePage = () => {
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

                console.log(arrayOfPosts)
            })
            .catch((err) => {

                console.log("errore fetch POST", err)
            })
    }

    useEffect(() => {
        getPostHomePage()
    }, [])

    return (

        <></>


    )

}

export default HPColonnaPost