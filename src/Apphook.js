import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainlayout from './mainlayout실습';
import Boardlist from './boardlist실습';
import Postdetail from './postdetail실습';


//---최상위 컴포넌트------
function Apphook() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Boardlist />}></Route>
          <Route path='/post/:postid' element={<Postdetail />}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default Apphook;
