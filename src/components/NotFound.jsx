import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div`
    background-color: ${({theme:{colors}})=> colors.secondary};
    `
const Container = styled.div`
    max-width: 1140px;
    min-height: 70vh;
    margin-inline: auto;
    display: flex;
    padding: 1rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`
const NotFoundContext = styled.p`
    max-width: 76ch;
    text-align: center;
    font-size: 6.5rem;
    font-weight: 600;
    color : ${({theme : {colors}}) => colors.neutral_300};
`
const GoBack = styled(NavLink)`
    border: none;
    outline: none;
    padding: 1.5em ;
    background-color: ${({theme:{colors}})=> colors.primary};
    color : white;
    font-weight: 400;
    border-radius: .4em;
    transition: .4s ease-in-out;
    &:hover {
        scale : .9;
        background-color: ${({theme:{colors}})=> colors.accent};
    }

`
const NotFound = () => {
  return (
    <MainContainer>
    <Container>
    <NotFoundContext>404 - Page Not Found</NotFoundContext>
    <GoBack to="/">Back To Home</GoBack>
        
    </Container>
</MainContainer>
  )
}

export default NotFound
