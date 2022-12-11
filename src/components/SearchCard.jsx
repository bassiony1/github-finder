import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div`
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    animation: fade-in  1s linear  alternate ;

    @keyframes fade-in {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`
const Avatar = styled.img`
        cursor: pointer;
        filter: brightness(90%);
        &:hover {
        filter: brightness(100%);

        }
    `
const CardBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: .5rem;
    padding-block: 1rem;
    color : ${({theme : {colors}})=> colors.neutral_300};
    background-color : ${({theme : {colors}})=> colors.accent};
`
const Name = styled.h3`
    font-weight: bold;
    font-size : 1.3rem;
`
const View = styled(NavLink)`
    padding : .5em 1em ;
    border-radius: 10px;
    background-color: ${({theme : {colors}})=> colors.primary};
    transition: rotate .5s ease-in-out .3s , scale .3s linear , background-color .3s linear;

    &:hover {
        scale : 1.2;
        rotate : 1turn;
        background-color: ${({theme:{colors}})=> colors.secondary};
    }
`
const SearchCard = ( {user : {avatar_url , login }}) => {
  return (
    <Card >
                    <Avatar src={avatar_url}></Avatar>
                    <CardBody>
                        <Name>{login}</Name>
                        <View to={`user/${login}`}>View</View>    

                    </CardBody>
    </Card>
  )
}

export default SearchCard
