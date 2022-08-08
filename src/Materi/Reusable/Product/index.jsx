import React from "react";
import Styled from "styled-components";
import Counter from "../Counter";

const imgProduct = 'https://source.unsplash.com/collection/190727/400x300';

const CardContainer = Styled.div`
  box-shadow : 0 4px 8px 0 rgba (0,0,0,0.2);
  max-width : 300px;
  margin : auto;
  text-align : center;
  font-family : arial;
`;

const Image = Styled.img`
  width : 100%;
`;

const Heading = Styled.h1`
  font-size: 18px;
`;

const Price = Styled.p`
  color : grey;
  font-size: 22px;
`;

const Description = Styled.p`
  font-size: small;
`

export default class Product extends React.Component{

  state = {
    value : 0
  }

  handleValue = (value) =>{
   this.props.receiveValue(value);
  }

  render(){
    return(
      <div>
        <CardContainer>
          <Image src={imgProduct} alt="img"/>
          <Heading>Title card</Heading>
          <Price>$19.99</Price>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa.</Description>
          <Counter receiveValue={this.handleValue}/> {/* Child Product */}
        </CardContainer>
      </div>
    )
  }
}

