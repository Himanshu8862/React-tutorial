import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((res) => {
                    // console.log(res)
                    if (!res.ok) {  // error coming back from server
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted")
                    } else {
                        // auto catches network/connection error
                        setIsLoading(false);
                        setError(err.message);
                    }

                })

        }, 1000);

        return () => {
            abortCont.abort();
        }

    }, [url])

    return { data, isLoading, error }
}

export default useFetch;