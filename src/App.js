import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Javascript - programming language.'},
        {id: 2, title: 'Javascript', body: 'Javascript - programming language!'},
        {id: 3, title: 'Javascript', body: 'Javascript - programming language!!'},
        {id: 4, title: 'Javascript', body: 'Javascript - programming language!!!'},
        {id: 5, title: 'Javascript', body: 'Javascript - programming language!!!!'},
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', body: 'Python - programming language.'},
        {id: 2, title: 'Python', body: 'Python - programming language!'},
        {id: 3, title: 'Python', body: 'Python - programming language!!'},
        {id: 4, title: 'Python', body: 'Python - programming language!!!'},
        {id: 5, title: 'Python', body: 'Python - programming language!!!!'},
    ])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }
    const bodyInputRef = useRef()
    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <form action="">
                <MyInput type="text"
                         placeholder="Post title"
                         value={title}
                         onChange={e => setTitle(e.target.value)}
                />

                <MyInput type="text"
                         placeholder="Post description"
                         ref={bodyInputRef}
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>

            </form>
            <PostList posts={posts} title="List of articles"/>
            <PostList posts={posts2} title="List of articles about Python"/>

        </div>
    );
}

export default App;
