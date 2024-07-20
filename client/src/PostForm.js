import Avatar from './defaultAvatar.png';

function PostForm() {
    return(
        <>
        <div className='bg-redditDark px-6 py-4 text-gray-400'>

        <div className='border border-redditBorder p-2 rounded-md flex'>
        <div className='rounded-full w-10 h-10 ml-2'>
            <img className='overflow-hidden w-10 h-10' src={Avatar} alt=''></img>
        </div>
        <form action='' className='flex-grow bg-redditDark-brighter border-redditBorder ml-4 mr-2 rounded-md'>
            <input type='text' className='bg-redditDark-brighter border border-redditBorder p-2 block w-full rounded-md ' placeholder='New Post'></input>
        </form>
        </div>

        </div>
        </>
    );
}

export default PostForm;