const Home = () => {
    const handleClick = (e) => {
        console.log("Hello", e);
    }
    const handleClickAgain = (e,name) => {
        console.log("hello", name, e)
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>{
                handleClickAgain(e,"John")
            }}>Click me again</button>
        </div>
    );
}

export default Home;