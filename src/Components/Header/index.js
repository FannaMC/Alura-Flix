// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  padding: 30px;
  text-align: center;
`;

const Botones = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    width: 150px;
    background: black;
    color: white;
    margin: 0 10px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    border: 4px solid ;
    cursor: pointer;

    &:hover {
        box-shadow: rgb(64, 155, 241) 0px 0px 2rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src='/img/header.png' alt='Alura Flix' />
      <Botones>
        <button>Home</button>
        <button>Nuevo video</button>
      </Botones>
    </HeaderContainer>
  );
};

export default Header;
