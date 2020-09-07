import React from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import {useHistory } from 'react-router-dom';

const Post = (props) => {
    const post = props.posts;
    const {id, title} = post;
    const history = useHistory();
    const HandleClick = (Id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
      

        <div className = 'post-container'>
            <h3 className = 'sub-title'>News No: {id}</h3>
                <h2 className = 'title-text'>{title}</h2>
                <br/>
           
            
                <Button variant="contained" color="secondary" onClick={() => HandleClick(id)}>
        Show Details
                </Button>
                  
        </div>
     
    );
};

export default Post;