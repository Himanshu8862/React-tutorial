import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = ((id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    })

    const [name, setName] = useState("Mario")

    // useEffect runs on every render, like during page load or change of state
    // do not change the state inside the useEffect as it will end up in an infinite loop,
    // change of state will re-render the page and during re-render the state will change again
    useEffect(() => {
        console.log("use effect ran");
        // console.log(blogs)
        console.log(name);
    }, [name])
    // an empty dependency array will only run useEffect only on first render
    // without it, useEffect will run every render
    // we can mention the state values in the array to watch, if that value changes then useEffect will be triggered

    // run the project, 1. without dependency array 2. empty dependency array 3. name in dependency array


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <p>{name}</p>
            <button onClick={() => setName("Luigi")}>Change name</button>
        </div>
    );
}

export default Home;