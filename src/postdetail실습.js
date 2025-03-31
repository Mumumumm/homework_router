import { useNavigate, useOutletContext, useParams } from "react-router-dom";

export default function Postdetail (){
    const {postid} = useParams();
    const navigate = useNavigate();
    // const postList = [
    //     {id:1, body:'첫번째 게시글 입니다'},
    //     {id:2, body:'두번째 게시글 입니다'},
    //     {id:3, body:'세번째 게시글 입니다'},
    // ];
    const {postList} = useOutletContext();
    const nextPost = (e)=>{
        const nextid = Number(postid) + 1;
        if(nextid > postList.length){
            alert('담 게시글 없음');
        }else{
            navigate('/post/'+ nextid);
        }
    }
    return(
        <>
            <h2>게시글 상세</h2>
            <p>글 ID: {postid}</p>
            <p>{postList[Number(postid) - 1].body}</p>
            <button onClick={(nextPost)}>다음 게시글</button>
        </>
    );
}