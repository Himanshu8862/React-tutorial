import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id)
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch("http://localhost:8000/blogs/"+blog.id, {
            method:"DELETE"
        })
            .then(()=>{
                navigate("/");
            })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails