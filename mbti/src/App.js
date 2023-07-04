import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Result from './pages/Result';
import Admin from './pages/Admin';
import React, {useState} from 'react'; 
import axios from 'axios';

function App() {

//사용자가 입력한 mbti 저장
  let [output,setOutput] = useState('');
  let navigater = useNavigate();
  let [click, setClick] = useState(['','','','']);
  let [input, setInput] = useState(''); 

  function 바꿔(i,mbti){
    var newArray = [...click];
    newArray[i] = mbti;
    setClick(newArray);
  }

  return (
<>
    <div className="App">
            <header>MBTI</header>
    <Routes>
        <Route path='/' element={ 
              <div className='container'>
              <div id="mbti_btns">
                <button onClick={ ()=> 바꿔(0,'E') } className={ click[0] =='E' ? 'click' : 'btn'} id="E">E</button>
                <button onClick={ ()=> 바꿔(1,'S') } className={ click[1] =='S' ? 'click' : 'btn'} id="S">S</button>
                <button onClick={ ()=> 바꿔(2,'F') } className={ click[2] =='F' ? 'click' : 'btn'} id="F">F</button>
                <button onClick={ ()=> 바꿔(3,'P') } className={ click[3] =='P' ? 'click' : 'btn'} id="P">P</button>
                <button onClick={ ()=> 바꿔(0,'I') } className={ click[0] =='I' ? 'click' : 'btn'} id="I">I</button>
                <button onClick={ ()=> 바꿔(1,'N') } className={ click[1] =='N' ? 'click' : 'btn'} id="N">N</button>
                <button onClick={ ()=> 바꿔(2,'T') } className={ click[2] =='T' ? 'click' : 'btn'} id="T">T</button>
                <button onClick={ ()=> 바꿔(3,'J') } className={ click[3] =='J' ? 'click' : 'btn'} id="J">J</button>
            </div>
            
            <button id="confirm" onClick={ ()=>{ 
              console.log(`${click[0]}`+`${click[1]}`+`${click[2]}`+`${click[3]}`);
              setInput(`${click[0]}`+`${click[1]}`+`${click[2]}`+`${click[3]}`);
              axios.get(`http://49.247.33.67:8080/mbti/${click[0]+click[1]+click[2]+click[3]}`)
              .then( (data)=> {
                console.log(data.data.info);
                setOutput(data.data.info);
               })
               .catch( ()=>{
                console.log('실패함');
               })
              navigater('./result');
            }}>확인</button>

        </div>
         } /> 
        <Route path='/result' element={ <Result input={input} output={output}/>} />
        <Route path='/admin' element={ <Admin/> } />
        <Route path='*' element={ <div>없는페이지요</div>} /> 

      </Routes>

      </div>
    
    <footer>
    </footer>
    </>
    
  );


}

export default App;
