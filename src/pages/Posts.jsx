import React, {useEffect, useMemo, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../components/utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/loader/Loader";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/Select/MySelect";


function Posts() {
    const [posts, setPosts] = useState([]), createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    });
    const changePage = (page) => {
        setPage(page)


    }

    useObserver(lastElement, page < totalPages, isPostsLoading, () =>
        setPage(page + 1)
    )
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page,limit])

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
        <MySelect value={limit}
                  onChange={value => setLimit(value)}
                  defaultValue='Elements on page'
                  options={[
                      {value: 5, name: '5'},
                      {value: 10, name: '10'},
                      {value: 25, name: '25'},
                      {value: -1, name: 'Все'},
                  ]}

        />
        {postError &&
            <h1>Seems that there is some error</h1>
        }
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} title="List of articles"/>
        <div ref={lastElement} style={{height: 20}}></div>
        {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader></Loader></div>
        }


        <Pagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
        />
    </div>);
}

export default Posts;
