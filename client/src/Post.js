import { Link } from 'react-router-dom';

function Post(props) {
    return (
        <div>    


      <div className='px-6 text-gray-400 pb-4'>
        <Link to={'/comments/'+props._id} className='block border border-redditBorder hover:border-white bg-redditDark-brighter p-2 rounded-md cursor-pointer'>
          <h5 className='text-gray-500 text-sm'> Posted by u/{props.author} {props.postedAt} hours ago</h5>
          <h2 className='text-xl mb-3 text-gray-300'>{props.title}</h2>
          <div className='text-sm leading-6'>{props.body}</div>
        </Link>
      </div>

      </div>
    );
}

export default Post;