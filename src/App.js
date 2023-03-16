import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'


function App() {
    const [post, setPosts] = useState([
        {id: 1, title: 'Javascript', 'body': 'Javascript - programming language.'},
        {id: 2, title: 'Javascript', 'body': 'Javascript - programming language!'},
        {id: 3, title: 'Javascript', 'body': 'Javascript - programming language!!'},
        {id: 4, title: 'Javascript', 'body': 'Javascript - programming language!!!'},
        {id: 5, title: 'Javascript', 'body': 'Javascript - programming language!!!!'},
    ])
    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <h1 style={{textAlign: 'center'}}>Articles</h1>
            {post.map(post =>
                <PostItem post={post} key={[post.id]}/>
            )}


        </div>
    );
}

export default App;
