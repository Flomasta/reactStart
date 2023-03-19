import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, removePost}) => {
        if (!posts.length) {
            return (<h1 style={{textAlign: 'center'}}>No records yet</h1>)


        }

        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                {posts.map((post, index) =>
                    <PostItem number={index + 1} post={post} key={[post.id]} removePost={removePost}/>
                )}
            </div>
        );
    }
;

export default PostList;
