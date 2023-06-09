import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author, setAuthor] =useState('mario')

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="">
                <label htmlFor="">
                    Blog title:
                </label>
                <input type="text" required
                value={title}
                onchange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="">
                    Blog body:
                </label>
                <textarea required
                 value={body}
                 onchange={(e) => setBody(e.target.value)}
                > </textarea>
                <label htmlFor="">Blog author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;