const Create = () => {

    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="">
                <label htmlFor="">
                    Blog title:
                </label>
                <input type="text" required />

                <label htmlFor="">
                    Blog body:
                </label>
                <textarea required> </textarea>
                <label htmlFor="">Blog author</label>
                <select >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;