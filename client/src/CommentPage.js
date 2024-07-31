import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";


function CommentPage(props) {
    
    const {id} = useParams();

    const [comment, setComment] = useState({});

    useEffect(()=> {
        axios.get('http://localhost:4000/comment/'+{id})
        .then(response => setComment(response.data));
    },[]);




    return (
        <div className="bg-redditDark">
            {comment && (
                <Post {...comment}/>
            )}
        </div>
    );
}

export default CommentPage;