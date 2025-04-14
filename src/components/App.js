// create your App component here
import { useEffect, useState } from "react";
const API = "https://dog.ceo/api/breeds/image/random";

function App(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch(API)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setIsLoaded(isLoaded => !isLoaded)
            setImage(data.message)
        })
    },[])

    return(
    <>
        {
            !isLoaded
            ? <p>Loading...</p>
            : <img src={image} alt="A Random Dog"/>
        }
    </>)   
}

export default App;