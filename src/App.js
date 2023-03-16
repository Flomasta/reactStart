import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'
import PostList from "./components/PostList";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', 'body': 'Javascript - programming language.'},
        {id: 2, title: 'Javascript', 'body': 'Javascript - programming language!'},
        {id: 3, title: 'Javascript', 'body': 'Javascript - programming language!!'},
        {id: 4, title: 'Javascript', 'body': 'Javascript - programming language!!!'},
        {id: 5, title: 'Javascript', 'body': 'Javascript - programming language!!!!'},
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', 'body': 'Python - programming language.'},
        {id: 2, title: 'Python', 'body': 'Python - programming language!'},
        {id: 3, title: 'Python', 'body': 'Python - programming language!!'},
        {id: 4, title: 'Python', 'body': 'Python - programming language!!!'},
        {id: 5, title: 'Python', 'body': 'Python - programming language!!!!'},
    ])
    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <PostList posts={posts} title="List of articles"/>
            <PostList posts={posts2} title="List of articles about Python"/>
        </div>
    );
}

export default App;
