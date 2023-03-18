import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import '../src/styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";


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
    const [selected, setSelectedSort] = useState('')

    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

    }
    return (<div className="App">
        <Counter/>
        <ClassCounter/>

        <PostForm create={createPost}/>
        <MySelect
            value={setSelectedSort}
            onChange={sortPost}
            defaultValue={'Sort by'}
            options={[
                {value: 'title', name: 'By name'},
                {value: 'description', name: 'By description'}
            ]}
        />
        {posts.length ? <PostList posts={posts} removePost={removePost} title="List of articles"/> :
            <h1 style={{textAlign: 'center'}}>No records yet</h1>}


    </div>);
}

export default App;
