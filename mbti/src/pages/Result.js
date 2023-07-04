import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


let InfoBox = styled.div`
  width : 80%;
  height : 200px;
	background : rgb(224, 224, 224);
	color :  black ;
	padding : 10px;
  box-shadow: 4px 4px 2px rgb(148, 148, 148);
  border-radius: 7px;
  margin-top : 15px;
  margin-bottom : 45px;
  display:flex;
  align-items:center;
  justify-content:center;
`
let Flex = styled.div`
  width : 70%;  
`

let MyBtn = styled.button`
  width : 150px;
  height : 30px;
  margin : 20px 20px;
  border-radius: 20px;
`

function Result(props){

  let navigater = useNavigate();

    return(
        <div className="container">
            <h3>{ props.input } 은/는</h3> 
            <InfoBox>
             { props.output }
            </InfoBox>
            <Flex>
              <MyBtn onClick={ ()=>{ navigater('/')}}>메인페이지</MyBtn>
              <MyBtn onClick={ ()=>{ navigater('/admin')}}>관리자페이지</MyBtn>
            </Flex>  
        </div> 
    )
  }
  
export default Result;
  