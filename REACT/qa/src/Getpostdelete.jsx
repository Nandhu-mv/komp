import React from 'react'
import  axios  from 'axios'
import { useState,useEffect } from 'react'

function Getpostdelete() {
  
    const initialpost = {id: null, title : '', body: '' };

    const [posts,setposts] = useState([]);
    const [cpost,setcpost] = useState(initialpost);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);


    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata =()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setposts(response.data);
        })
        .catch((error)=>{
            seterror(error);
        })
        
    };

    const handlesubmit =(e)=>{
        e.preventDefault();
        if (cpost.id) {
            UpdatePost();
        }
        else{
            CreatePost();
        }
    };

    const CreatePost =()=>{
        setloading(true);

        axios.post("https://jsonplaceholder.typicode.com/posts",cpost)
        .then((response)=>{
            console.log("postcreated : ",response.data);
            setposts([...posts,response.data]);
            setloading(false);
            setcpost(initialpost);
            seterror(null);

        })
        .catch((error)=>{
            console.log(error);
            setloading(false);
            seterror("ERRORRRRR")
            
        });

    };
    const UpdatePost =()=>{
        setloading(true);

        axios.put(`https://jsonplaceholder.typicode.com/posts/${cpost.id}`,cpost)
        .then((response)=>{
            console.log("postudated : ",response.data);
            setposts(posts.map((post)=>
                post.id === cpost.id ? response.data : post
            ));
            setloading(false);
            setcpost(initialpost);
            seterror(null);

        })
        .catch((error)=>{
            console.log(error);
            setloading(false);
            seterror("ERRORRRRR")
            
        });

    };

    const handleEdit = (post) => {
    setcpost(post);   
    };

    const deletepost = (id) =>{
        setloading(true)

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
            setposts(posts.filter(post => post.id !== id));
            setloading(false);
        })
        .catch((error) => {
            console.log(error);
            seterror("ERROR deleting post");
            setloading(false);
        });

    }






    const handlechange = (e)=>{
        const {name,value} = e.target;
        setcpost(prev=>({...prev,[name]:value })); 
    }
  
  
  
    return (
    <div className='container'>
        <h1>Create or update posts</h1>
        <form onSubmit={handlesubmit}>
            <label htmlFor="title">TITLE
            </label>
            <input className='inputform'  type="text"
            id='title'
            name='title'
            value={cpost.title}
            onChange={handlechange}
            required
            />

            <label htmlFor="body">BODY
            </label>
            <input className='inputform'  type="textarea"
            id='body'
            name='body'
            value={cpost.body}
            onChange={handlechange}
            required
            />

        

        {error && <p className='errored'>{error}</p>}

        <button
        type='submit'
        className='btn'
        disabled={loading}
        >
            {loading? 'Working on it...': cpost.id? 'update post' : 'create post'}
        </button>


        {
            cpost.id && <button
            className='btn'
            onClick={()=>deletepost(cpost.id)}
            disabled={loading}
            >
                {loading? 'deleting':'delete post'}
            </button>
        }

        </form>

        <h2>Posts</h2>

        <ul>
            {posts.map((post)=>(
                <li key={post.id} className='post'>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button
                    className='btn'
                    onClick={()=>handleEdit(post)}  
                    disabled={loading}
                    >
                        EDIT
                    </button>
                     <button
                    className='btn'
                    onClick={()=>deletepost(post.id)}
                    disabled={loading}
                    >
                        DELETE
                    </button>
                </li>


            ))}
        </ul>


    </div>
  )
}

export default Getpostdelete