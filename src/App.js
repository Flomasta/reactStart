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
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";


function App() {
    const [posts, setPosts] = useState(
        [
            {
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
        },
        ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)

    return (<div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <Counter/>
        <ClassCounter/>

        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} title="List of articles"/>

    </div>);
}

export default App;
