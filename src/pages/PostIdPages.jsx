import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import Comments from "../components/Comments";

const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPost(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Post {params.id}</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.title}</div>
            }
            <h2>Comments</h2>
            {
                isComLoading
                    ? <Loader/>
                    : <Comments comments={comments}/>

            }

        </div>
    )
}
export default PostIdPages;
