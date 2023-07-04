import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container }  from 'react-bootstrap';
import {useState} from 'react';
import backimg from './backimg.jpg';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';
import axios from 'axios';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigater = useNavigate(); //페이지 이동 도와주는 함수

  return (
    <div className="App">
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">구운Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{ navigater('./')}}>Home</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigater('./detail')}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={ 
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map(function(a,i){
                  return <Product i={i} shoes={shoes[i]}/> 
                })}
             </div>
            </div>
            <button onClick={ ()=> {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then( (data)=> {
                  console.log(data.data);
                 })
                 .catch( ()=>{
                  console.log('실패함');
                 })
            }}></button>
          </>
         } /> 
        <Route path='/detail/:id' element={ <Detail shoes={shoes} /> } />
        <Route path='/event' element={ <Event/> }>
          <Route path='one' element={ <div>첫 주문시 양배추즙 서비스</div> }></Route>
          <Route path='two' element={ <div>생일기념 쿠폰받기</div> }></Route>
        </Route>
        <Route path='*' element={ <div>없는페이지요</div>} /> 

      </Routes>


      

    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="30%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;

