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
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', description: 'Python - programming language.'},
        {id: 2, title: 'Python', description: 'Python - programming language!'},
        {id: 3, title: 'Python', description: 'Python - programming language!!'},
        {id: 4, title: 'Python', description: 'Python - programming language!!!'},
        {id: 5, title: 'Python', description: 'Python - programming language!!!!'},
    ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <PostForm create={createPost}/>
            <PostList posts={posts} title="List of articles"/>
            <PostList posts={posts2} title="List of articles about Python"/>

        </div>
    );
}

export default App;
