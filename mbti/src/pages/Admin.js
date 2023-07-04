import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'; 
import axios from 'axios';

let InputBox = styled.input`
    width : ${ props => props.width };
    height :${ props => props.height };;
    color :  black ;
    border-radius: 3px;
    border : 1px solid black;
    margin-top: 0px;
    margin-bottom : 20px;
`
let Flex = styled.div`
  width : 70%;  
`
let Text = styled.h3`
    margin-bottom : 5px;
    font-size : ${ props => props.size };
`

let MyBtn = styled.button`
  width : 150px;
  height : 30px;
  margin : 20px 20px;
  border-radius: 20px;
`



function Admin(){

  let navigater = useNavigate();

  let [input,setinput] = useState('');
  let [content,setcontent] = useState('');

    return(
        <div className="container">
            <Text>MBTI</Text>
            <InputBox width='40px' height='15px' onChange={ (e)=>{ setinput(e.target.value); }}></InputBox>
            <Text size='14px'>성향추가</Text>
            <InputBox width='400px' height='30px' onChange={ (e)=>{ setcontent(e.target.value); }}></InputBox>
            <Flex>
              <MyBtn onClick={ ()=>{ 
                //post요청
                axios.post('http://49.247.33.67:8080/mbti', { mbti : input , info : content})
              .then( (data)=> {
                //완료시
                alert('서버 전송 성공');
                console.log('0');
               })
               .catch( ()=>{
                //실패시
                console.log('실패함');
               })
              
                
                }}>특징 추가</MyBtn>
                <br/>
                <br/>
                <MyBtn>
                  <a href="http://49.247.33.67:8080/mbti">전체 데이터 확인</a>
                </MyBtn>
            </Flex>  
        </div> 
    )
  }
  
export default Admin;
  