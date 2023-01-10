import { useState, useEffect } from "react";
import BlogList from "./bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title:'My New Website', body: ' lorem ipsum...', author:'mario', id:1 },
        { title:'Welcome Party', body: ' lorem ipsum...', author:'yoshi', id:2 },
        { title:'web dev top tips', body: ' lorem ipsum...', author:'mario', id:3 },
    ])
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use Effect ran')
    })
   
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario's Blogs!" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;

// const handleClick= (e) => {
//     console.log("Hello me ", e)
// } 
// const handleClickAgain = (name, e) =>{
//     console.log("hello" + name, e.target);
// }
// return ( 
//     <div className="home">
//         <h2>Homepage</h2>
//         <button onClick={handleClick}>Click me</button>
//         <button onClick={(e) =>handleClickAgain('mario', e)}>Click me again</button>
//     </div>
//  );


//Use state Hooks

// const Home = () => {
//     //let name = 'mario';
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25)
//     const handleClick= () => {
//         setName("luigi");
//         setAge(30)
//     } 
   
//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click me</button>
           
//         </div>
//      );