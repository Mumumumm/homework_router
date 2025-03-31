## link to 에 대해
1. link to 는 클릭시 해당 경로로 이동한다
2. link to 는 Link to='/' 만 쓴다면 현재 그 페이지를 보인다
3. link to 는 a태그 와 다르게 새로고침을 하지 않는다
4. link to 로 이동하고 싶은 페이지는를 적었을때 이동할 페이지를 보여줄 다른 컴포넌트는 Route의 path='/컴포넌트 경로' 를 적어준다
### 예시
현재 컴포넌트의 한 링크 -> Link to='/nextpage'
다른 컴포넌트 Route path='/nextpage element={<다른컴포넌트>}

1. 이동할 링크 설정기입
2. path는 경로같은개념으로 link를 해당 경로와 같게 입력시 보여줄 해당 컴포넌트를 보인다

## Routes 와 Route 그리고 중첩 Outlet
1. Routes는 Route를 감싸줄수 있는 부모이다
2. Route는 자식이 되지만 그 안에 자식을 품을수 있다
3. 중첩시킨 Route 는 Outlet을 사용한다
4. Outlet은 부모 Route에게 적어준다 부모는 항상 특정자식Route와 렌더링 된다.
5. Outlet이 있는 부모에 들어간 자식 Route만 표시해준다
```js
App 컴포넌트
<Route path='/' element={<Mainlayout />}> 부모 Route
 <Route index element={<Listlayout />}></Route> 자식 Route
</Route>

Route 부모 컴포넌트
<Link to='/'>목록</Link>
<Outlet /> 부모에 outlet 을 주면 자식 Route와 항상 함께 표시

Route 자식 컴포넌트
<h2>게시글 목록</h2>
<ul>
  {list}
</ul>
```
## useParams
1. useParms는 Route의 path url경로를 가져온다
2. url을 가져올때 : 또는 * 을(를) 사용한다
3. : 뒤에 오는 이름을 파라미터라고 하며 useParams는 파라미터 값을 변수에 대입 해준다
4. 이때 파라미터와 할당받을 변수와 파라미터명은 같아야 경로를 찾을수 있으며 이름을 바꾼다면 다음과 같이 한다
```js
:view 파라미터
<Route path='/list/:view' element={<ListInfo />}></Route>
파라미터와 변수명이 동일한 경우
 const { view } = useParams();
변수명을 변경할 경우
const { view: customName } = useParams();
```
5. 예시로 사용된 /list/:view의 경로는 현재  Link to= {'/list/' + t.id} 를 가리키고 있어 view는 t.id가 된고 useParams 로 대입 받은 { view } 는 결국 t.id를 받게된다

## useNavigate
1 . useNavigate();는 특정 경로로 이동하게 해준다.
2 . 변수에 useNavigate를 대입하여 변수에 경로를 설정해준다
```js
let navi = useNavigate(); 대입

useNavigate(); 활용한 페이지 이동 예시
<button onClick={() => {
 if (viewid.id < 3) { // viewid.id 숫자가 3보다 작다면 
  navi('/list/' + (viewid.id + 1)); // 기존 주소 /list/ + 현재주소 viewid.id + 1 씩
 } else {
    alert('마지막페이지 입니다.');
  }
}}>다음페이지 ▶</button>
```