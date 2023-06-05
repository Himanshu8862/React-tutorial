import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    // we can not make it an async function and use await keyword, for that we have to externalise the function and do it
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then((res) => {
                    console.log(res)
                    if(!res.ok){  // error coming back from server
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    setBlogs(data)
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err)=>{
                    // auto catches network/connection error
                    setIsLoading(false);
                    setError(err.message);

                })

        }, 1000);
    }, [])

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;