import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: solid;
`;

//let next = <div onClick={change parent.props.card to next one along or back to beginning}></div>
