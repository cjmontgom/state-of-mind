import styled from "styled-components";
import {Link} from "react-router-dom";

const Theme = {
    fontFamily: 'Montserrat',
    darkBlue: '#000261'
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${Theme.fontFamily};
    font-family: ${Theme.darkBlue};
    line-height: 1.8;
`;

export const Header = styled.h1`
    margin-top: 50px;
`;

export const SubHeader = styled.h2`
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: ${Theme.fontFamily};
    font-family: ${Theme.darkBlue};
    font-size: 1.2em;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 100px;
    width: 60%;
    align-items: center;
    background-color: #fff7ff;
    box-shadow: 0px 0px 55px -5px rgba(56,5,30,0.18);
`;

export const Section = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    align-self: center;
    margin: 30px 0 0 0;
    padding: 10px;
    width: 100px;
    border: solid;
    border-colour: ${Theme.darkBlue};
    border-width: thin;
    border-radius: 25px;
    background: white;
    
    &:hover {
        background: #ffc30f;
    }
`;

export const TextInput = styled.input`
    margin-top: 4px;
    padding: 10px;
    min-height: 100px;
    min-width: 400px;
    height: 100px;
    border: solid;
    border-colour: ${Theme.darkBlue};
    border-width: thin;
    border-radius: 10px;
    font-family: ${Theme.fontFamily};
`;

export const Table = styled.table`
    font-family: ${Theme.fontFamily};
    border: 1px solid ${Theme.darkBlue};
    background-color: #FFFFFF;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    table-layout: fixed;
    
    th,
    td {
        border: 1px solid ${Theme.darkBlue};
        padding: 10px 10px;
    }
    tbody,
    td {
        font-size: 13px;
        color: ${Theme.darkBlue};
        min-width: 30px;
    }
    thead {
        background: #EBF0FE;
    }
    thead th {
        font-size: 15px;
        font-weight: bold;
        color: ${Theme.darkBlue};
        text-align: center;
    }
`;

