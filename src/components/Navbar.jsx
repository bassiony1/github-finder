import { GitHub } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
    background-color: ${({theme : {colors}}) => colors.primary};
    `
const Container = styled.div`
    min-height: 10vh;
    max-width: 1140px;
    margin-inline: auto;
    display: flex;
    padding-inline: 1rem;

    height: 100%;
    align-items: center;
    justify-content: space-between;

    @media (width < 720px) {
        flex-direction: column;
        justify-content: center;
        padding-block: 1rem;
    }

`
const Github = styled(GitHub)`
    font-size: 2rem;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    gap : 1rem;
    color : ${({theme : {colors}}) => colors.neutral_300};
    `

const Title = styled(NavLink)`
    font-size: 1.5rem;
    `
const Right = styled.div`
    
`
const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    color : ${({theme : {colors}})=> colors.neutral_300};
    font-size: 1rem;
    gap: 1em;
`
const ListItem = styled.li`
    > a {
        transition: .3s ease-in-out;
        padding: .5rem;
        border-radius: .3em;
        font-weight: 400;
    }
    > a:hover {
        background-color: ${({theme : {colors}})=> colors.accent};

    }
    > a.active {
        background-color: ${({theme : {colors}})=> colors.accent};
    }
`

const Navbar = () => {
  return (
    <Nav>
        <Container>
            <Left>
                <Github></Github>
                <Title to="/">Github Finder</Title>
            </Left>
            <Right>
                <List>
                    <ListItem >
                    <NavLink to='/'>Home</NavLink>
                    </ListItem>
                    <ListItem >
                        <NavLink to='/about'>
                            About
                        </NavLink></ListItem>
                </List>
            </Right>
        </Container>
    </Nav>
  )
}

export default Navbar