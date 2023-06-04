import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("John")
    const [age, setAge] = useState(25)
    const [array, setArray] = useState([4,2,6,8,7,9])

    const handleClick = (e) => {
        setName("Alice")
        setAge(20)
        setArray(()=>{
            return array.sort()
        })
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <p>{array}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;