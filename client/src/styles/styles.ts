import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.8;
  color: #000261;
`;

// get props from parent
// if parent.props.card === thiscard.id (eg. "mood") than display: block
// else display: none

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 60%;
  align-items: center;
  background-color: #fff7ff;
  box-shadow: 0px 0px 55px 6px rgba(0,0,0,0.17);
`;

//let next = <div onClick={change parent.props.card to next one along or back to beginning}></div>
