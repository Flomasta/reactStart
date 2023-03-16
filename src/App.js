import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'


function App() {

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <PostItem post={{id: 1, title: 'Javascript', 'body': 'Javascript - programming language.'}}/>


        </div>
    );
}

export default App;
