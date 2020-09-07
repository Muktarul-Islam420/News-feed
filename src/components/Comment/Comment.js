import React, { useState, useEffect } from 'react';
import './Comment.css'
import CommentDetail from '../CommentDetail/CommentDetail';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const {Id} = useParams();
    // console.log(props);
    const [comment,setComment] = useState([]);
    const[image,setImage] = useState([]);
    // $('.user-imag').append('.comment');
useEffect(() => {
     const URL = `https://jsonplaceholder.typicode.com/comments?postId=${Id}` ;
    fetch(URL)
    .then(res => res.json())
    .then(data => setComment(data));
 }, [])
 useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${Id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setImage(data));
 },[])
    // console.log(comment)
    return (
      
        <div >
            <h1 className="header-text">Comment of: {Id}</h1>
            {/* {
                image.map(image =>  <CommentDetail image={image}></CommentDetail>  )
            } */}

             {
               comment.map(comment => <div  className="comment-body-container comment" comment={comment}>
                  
           
                    {/* <h5>Comment no: {comment.postId}</h5>   */}
                    <img src="https://img.techpowerup.org/200826/muktarulkhan.jpg" className="user-image" alt=""/>
                    <h4 className="title-text">User: {comment.name}</h4>
                    <div className="comment-container">
                    <h5 className="comment-text">Comment:</h5> 
                    <p className="body-text">{comment.body}</p>
                    </div>
                    </div>)
             }
        
             
        </div>
    );
};

export default Comment;