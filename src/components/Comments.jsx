import React from 'react';

const Comments = (props) => {
    return (
        <div className="comments__wrapper">
            {props.comments.map(comment =>
                <div>
                    <h5>{comment.email}</h5>
                    <div>{comment.body}</div>
                </div>
            )}
        </div>
    );
};

export default Comments;
