import { Link, useOutletContext } from "react-router-dom";

export default function Boardlist(){
    // const postList = [
    //     {id:1, title:'첫 번째로 맞을사람'},
    //     {id:2, title:'두 번째로 맞을사람'},
    //     {id:3, title:'세 번째로 맞을사람'},
    // ];
    const {postList} = useOutletContext();
    return (
        <>
        <h2>게시글 목록</h2>
        <ul>
            {/* post는 postList.map 각 객체들 */}
            {postList.map((post)=><li><Link to={'/post/'+post.id}>{post.title}</Link></li>)}
        </ul>
        </>
    );
}