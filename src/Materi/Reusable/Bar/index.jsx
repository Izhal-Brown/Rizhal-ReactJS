import React from "react";
import Styled from "styled-components";

const Nav = Styled.div`
  width: 300px;
  background-color : lightgreen;
  overflow: auto;
  margin: 0 auto;
`;

const Link = Styled.a`
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 24px;
`;

export default class Bar extends React.Component{
  render(){
    return(
      <Nav>
        <Link href="#">
          {this.props.value} {/* ini didapat dari parent (Reusable/index.jsx) */}
        </Link>
      </Nav>
    )
  }
}