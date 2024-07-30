import Post from './Post';
import { useEffect, useState } from 'react';
import axios from 'axios';


function PostListing() {
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:4000/comments', {withCredentials:true})
        .then(response => setComments(response.data));
    }, []);

    return(
    <div className='bg-redditDark'>{comments.map(comment => (
        <Post {...comment} />
      ))}</div>
);
}
export default PostListing;