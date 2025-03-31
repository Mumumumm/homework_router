import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';


//---index page----
const selectList = [
  { id: 1, title: '첫 번째 게시글' },
  { id: 2, title: '두 번째 게시글' },
  { id: 3, title: '세 번째 게시글' },
]

function Listlayout() {
  const list = [];
  for (let t of selectList) { //
    list.push(<li style={{ listStyle: 'none' }}> <Link to={'/list/' + t.id}>{t.title}</Link></li >); // 이거 중요함 다른 list 로 갈것으  / + id로 링크를 걸어두고 Params에서 활용한다.
  }
  return (
    <>
      <h2>게시글 목록</h2>
      <ul>
        {list}
      </ul>
    </>
  );
};


//--view page----
function ListInfo() {
  const style = {
    margin: '5px',
    textAling: 'center',
  }
  const { view } = useParams(); // 파라미터 대입
  const viewid = selectList.find((t) => t.id === Number(view)) // (t)는 배열 안의 각 객체가 함수의 매개변수 t로 전달
  let navi = useNavigate();
  return (
    <>
      <h2>게시글상세</h2>
      <p>글아이디 : {viewid.id}</p>
      <p>{viewid.title} 입니다</p>

      {/* 이전페이지 버튼 */}
      <button style={style} onClick={() => {
        if (viewid.id > 1) { // viewid.id 숫자가 3보다 작다면 
          navi('/list/' + (viewid.id - 1)); // 기존 주소 /list/ + 현재주소 viewid.id + 1 씩
        } else {
          alert('첫 페이지 입니다.');
        }
      }}>◀ 이전페이지</button>

      {/* 다음페이지 버튼 */}
      <button style={style} onClick={() => {
        if (viewid.id < 3) { // viewid.id 숫자가 3보다 작다면 
          navi('/list/' + (viewid.id + 1)); // 기존 주소 /list/ + 현재주소 viewid.id + 1 씩
        } else {
          alert('마지막 페이지 입니다.');
        }
      }}>다음페이지 ▶</button>
    </>
  );
}



//---최상위 레이아웃------
function Mainlayout() {
  const style = {
    border: '1px, solid, black',
    padding: '3px 5px 3px 5px',
    borderRadius: '5px',
    textDecorationLine: 'none',
  }
  return (
    <>
      <h1>게시판 앱</h1>
      <br></br>
      <Link to='/' style={style} > 목록</Link >
      <hr></hr>
      <Outlet />
    </>
  );
};

//---최상위 컴포넌트------
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Listlayout />}></Route>
          <Route path='/list/:view' element={<ListInfo />}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
