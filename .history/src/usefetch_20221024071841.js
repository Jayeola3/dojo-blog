import {useState, useEffect} from 'react';


const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] =useState(true);
    const [error, setError] =useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok) {
            throw Error('Could not fetch data for the resource')
          }
          return res.json();
        })  
        .then(data => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((er) => {
          setIsPending(false);
          setError(err.message);
        })
      }, [])
     
}

export default useFetch;