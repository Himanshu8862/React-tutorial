import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    // we can not make it an async function and use await keyword, for that we have to externalise the function and do it
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data)
                    setIsLoading(false);

                })

        }, 1000);
    }, [])

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {/* we do dynamic check to ensure that blogs are displayed only when blogs is not null */}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;