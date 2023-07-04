import { useParams } from "react-router-dom";
import styled from 'styled-components';



let YellowBtn = styled.button`
	background : ${ props => props.color };
	color : ${ props =>props.color == 'blue' ? 'white' : 'black' };
	padding : 10px;
`

function Detail(props){

    let {id} = useParams(); 
    let found = props.shoes.find((a) => a.id==id);
    console.log(found);

    return(
      <div className="container">
        <YellowBtn color="orange">버튼</YellowBtn>
        <YellowBtn color="blue">버튼</YellowBtn>

        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+id+'.jpg'} width="100%" />
          </div>
        <div className="col-md-6">
        <h4 className="pt-5">{ found.title }</h4>
        <p>{found.content}</p>
        <p>{found.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
  }
  
export default Detail;
  