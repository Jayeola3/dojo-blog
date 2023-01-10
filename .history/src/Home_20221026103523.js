import BlogList from "./bloglist";
import useFetch from "./useFetch";
const Home = () => {
    const { data: blogs, isPending, error } = useFetch(' http://localhost:8000/blogs');
    //const [name, setName] = useState("mario")
    

    
   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.... </div>}
            {blogs &&<BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario's Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('Luigi')}>Change NAME</button>
            <p>{name}</p> */}
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