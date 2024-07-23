
function Input (props) {
    return (
        <input {...props} className={"bg-redditDark-brighter text-gray-300 p-2 border border-reddiDark-brighter rounded-md block "+ props.className}/>
    );
}

export default Input;