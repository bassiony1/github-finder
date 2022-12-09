import React from 'react'
import styled from 'styled-components'
import Repo from './Repo'

const Title = styled.h2`
    font-size: 2rem;
    color: white;
    padding-inline: 1rem;
    align-self: flex-start;
`
const ResaultContainer = styled.div`
    padding-block : 2rem;
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`
const ProfileRepos = ({repos}) => {
  return (
      <>
      <Title>Latest Repositories</Title>
      <ResaultContainer>
      {repos.map((repo , index) => {
          return <Repo key={index} repo={repo}/>    
        })}
        </ResaultContainer>
    </>
  )
}

export default ProfileRepos
