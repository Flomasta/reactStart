import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', description: 'Javascript - programming language.'},
        {id: 2, title: 'Javascript', description: 'Javascript - programming language!'},
        {id: 3, title: 'Javascript', description: 'Javascript - programming language!!'},
        {id: 4, title: 'Javascript', description: 'Javascript - programming language!!!'},
        {id: 5, title: 'Javascript', description: 'Javascript - programming language!!!!'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <PostForm create={createPost}/>
            {posts.length ?
                <PostList posts={posts} removePost={removePost} title="List of articles"/>
                : <h1 style={{textAlign: 'center'}}>No records yet</h1>
            }


        </div>
    );
}

export default App;
