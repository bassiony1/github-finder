import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProfileHeader from '../components/ProfileHeader'
import ProfileData from './ProfileData'
import ProfileRepos from './ProfileRepos'

const MainContainer = styled.div`
    background-color: ${({theme:{colors}})=> colors.secondary};
    `
const Container = styled.div`
    min-height: 70vh;
    max-width: 1140px;
    height: 100%;
    margin-inline: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`
const Spinner = styled.img`
    max-width: 300px;
    margin-block: auto;
`
const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [user , setUser] = useState({});
  const [repos , setRepos] = useState([]);
  const {login} = useParams()
  const navigator = useNavigate();
  useEffect(  () => {
    setLoading(true);
    
      getUser(login).then((user)=> {setUser(user)}).catch(()=> navigator('/notfound'))
      getRepos(login).then((repos)=>{setRepos(repos); setLoading(false)}).catch(()=> navigator('/notfound'))
      
      
    
  },[])
  const getUser = async (user_name) => {

    const response = await fetch(`https://api.github.com/users/${user_name}`, {
        headers : {
            Authorization : `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
        }

    })
    if (!response.ok) {
      navigator('/notfound');
    }
    const data = await response.json();
    return data;
    
  }
  const getRepos = async (user_name) => {
    
      const response = await fetch(`https://api.github.com/users/${user_name}/repos`, {
          headers : {
              Authorization : `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
          }
  
      })
      if (!response.ok) {
        navigator('/notfound');
      }
      const data = await response.json();
      return data;
      
    
    
  }
  return (
    <MainContainer>
      <Container>
        
   { loading === true  ? <Spinner src="/spiner.gif"></Spinner> :
   <>
    <ProfileHeader user={user} /> 
    <ProfileData user={user}/> 
    <ProfileRepos repos={repos}/>
   </>
    }
    </Container>
    </MainContainer>
  )
}

export default UserProfile
