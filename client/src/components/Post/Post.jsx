import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <>
            <Link className="post" to={`/posts/${props._id}`}>
                <img className="post-image" src={props.imgURL} alt={props.title} />
                <div className="post-name">{props.title}</div>
                <div className="user">{`${props.user}`}</div>
            </Link>
        </>
    )
}

export default Post