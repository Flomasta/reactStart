import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        description: ''
    })
    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now()

        }
        create(newPost)
        setPost({title: '', description: ''})

    }

    return (

        <form action="">
            <MyInput type="text"
                     placeholder="Post title"
                     value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}
            />

            <MyInput type="text"
                     placeholder="Post description"
                     value={post.description}
                     onChange={e => setPost({...post, description: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>

        </form>

    );
};

export default PostForm;
