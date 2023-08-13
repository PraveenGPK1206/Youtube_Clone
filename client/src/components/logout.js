import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess, logout } from "../redux/userSlice";
const Container = styled.div`
  width: 10%;

  position: absolute;
  top: 50px;
  left: 85%;
  right:5%;
  background-color: #000000a7;
  
`;

const Wrapper = styled.div`
 
  background-color:  gray;
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;


const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const Label = styled.label`
  font-size: 14px;
`;
const Logout = ({ setLog }) => {

    const dispatch=useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
   dispatch(logout());
   
  };
  
  
 
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setLog(false)}>X</Close>
        

      
        
        <Button onClick={handleChange} >Log Out</Button>
      </Wrapper>
    </Container>
  );
};

export default Logout;