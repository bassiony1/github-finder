import { BugReport, Link, Restaurant, Star, Visibility } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 100%;
    background-color: ${({theme:{colors}})=> colors.primary};
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`
const DataGroup = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    flex-wrap: wrap;
`

const Name = styled.a`
    font-size: 1.3rem;
    color: white;
    &:hover {
    color: #ff2876;

    }
`
const Number = styled.div`

`
const PadgeEye = styled.div`
    display: flex;
    gap: .2em .6em;
    align-items: center;
    padding: 0.5rem;
    background-color:hsl(209, 26%, 24%);
    border-radius: 100vw;
`
const PadgeStar = styled(PadgeEye)`
    background-color:#323e3d;

`
const PadgeInfo = styled(PadgeEye)`
    background-color:hsl(264, 9%, 23%);

`
const PadgeFork = styled(PadgeEye)`
    background-color:hsl(195, 7%, 22%);

`

const Repo = ({repo}) => {
const {
    name , 
    watchers_count , 
    stargazers_count ,
    forks_count , 
    open_issues_count,
    html_url,
} = repo ;
  return (
    <Card>
        
        <DataGroup style={{ gap: ".6rem"}}>
            <Link style={{color : "white"}}/>
            <Name href={html_url} target='_blank'>{name}</Name>
        </DataGroup>
        <DataGroup>
        
        
        <PadgeEye>
            <Visibility style={{color : "#4a8fba" , fontSize : "20px"}}/>
            <Number style={{color : "#4a8fba" }}>{watchers_count}</Number>
        </PadgeEye>


        <PadgeStar>
            <Star style={{color : "#91d762" , fontSize : "20px"}}/>
            <Number style={{color : "#91d762"}}>{stargazers_count}</Number>
        </PadgeStar>


        <PadgeInfo>
        <BugReport style={{color : "#d48d90", fontSize : "20px"}}/>
        <Number style={{color : "#d48d90"}}>{open_issues_count}</Number>
        
        </PadgeInfo>


        <PadgeFork>
        <Restaurant style={{color : "#f0e482", fontSize : "20px"}}/>
        <Number style={{color : "#f0e482"}}>{forks_count}</Number>
        </PadgeFork>
        </DataGroup>
    </Card>
  )
}

export default Repo
