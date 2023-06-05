const BlogList = ({ blogs, title, handleDelete }) => {

    // if we dont do destructuring of props
    // const blogs = props.blogs
    // const title = props.title

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                //  the key should be unique and always has to be added, so that react can keep tract of each item that it outputs into the dom
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList