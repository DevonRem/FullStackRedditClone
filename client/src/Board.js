import PostForm from "./PostForm";
import PostListing from "./PostListing";
import SecondHeader from "./SecondHeader";


function Board() {
    return(
        <div>
            <SecondHeader></SecondHeader>
            <PostForm></PostForm>
            <PostListing></PostListing>
        </div>
    );
}

export default Board;