import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import {logDOM} from "@testing-library/react";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState([{
        id: 1,
        title: 'Javascript',
        description: 'Favascript - programming language.'
    }, {id: 2, title: 'Favascript', description: 'Javascript - programming language!'}, {
        id: 3,
        title: 'Javascript',
        description: 'script - programming language!!'
    }, {id: 4, title: 'ript', description: 'Javascript - programming language!!!'}, {
        id: 5,
        title: 'Mavascript',
        description: 'ipt - programming language!!!!'
    },])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {
            if (filter.sort) {
                return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            }
            return posts
        },
        [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])


    return (<div className="App">
        <Counter/>
        <ClassCounter/>

        <PostForm create={createPost}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} title="List of articles"/>

    </div>);
}

export default App;
