import { Link, Outlet } from "react-router-dom";

export default function Mainlayout(){
    const postList = [
        {id:1,title:'첫 번째로 맞을사람', body:'첫번째 게시글 입니다'},
        {id:2,title:'두 번째로 맞을사람', body:'두번째 게시글 입니다'},
        {id:3,title:'세 번째로 맞을사람',body:'세번째 게시글 입니다'},
    ];
    return(
        <>
        <h1>게시판 앱</h1>
        <Link to='/'>목록</Link>
        <hr/>
        {/* 자식이 이 아래로 나옵니다 */}
        <Outlet context={{postList}}/>
        </>
    );
}