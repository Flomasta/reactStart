import React, {useEffect, useMemo, useRef, useState} from "react";
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
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";


function App() {
    const [posts, setPosts] = useState(
        [])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setPostLoading(true)
        const posts = await PostService.getAll()
        setTimeout(async () => {
            setPosts(posts)
            setPostLoading(false)
        }, 2000)


    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)
    const [isPostLoading, setPostLoading] = useState(false)
    useEffect(() => {
        fetchPosts()
    }, [])

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
        {isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader></Loader></div>
            : <PostList posts={sortedAndSearchedPosts} removePost={removePost} title="List of articles"/>
        }


    </div>);
}

export default App;
