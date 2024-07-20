
function Button(props) {
    let defaultClassnames = 'border border-gray-300 bg-gray-300 mx-4 rounded-full px-3 text-sm font-bold';

    return(
        <button {...props} className={defaultClassnames + props.className} />
    );
}

export default Button;