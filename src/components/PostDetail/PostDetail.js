import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import './PostDetail.css'
import Button from '@material-ui/core/Button';
import Comment from '../Comment/Comment';
import './PostDetail.css';

const PostDetail = () => {
    const {Id} = useParams();

    const [post,setPost] = useState({});
    const history = useHistory();
    const HandleClick = (Id) => {
        const url = `/comment/${Id}`;
        history.push(url);
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${Id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div className="post-container">
        <h3 className="sub-title">Details of news {Id}</h3>
            <h4  className="title-text">{post.title}</h4>
            <p className="body-text">{post.body}</p>
            <br/>
            <Button variant="contained" color="primary" onClick={() => HandleClick(Id)}>
               Viw Comments
           
            </Button>
            {/* <Comment Id={{Id}}></Comment> */}
        </div>
    );
};

export default PostDetail;