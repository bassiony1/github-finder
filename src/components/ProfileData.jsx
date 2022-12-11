import { Groups, Inventory, People, ViewInAr } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    padding: 2rem;
    opacity: 0;
    animation: fade-in  1s .4s linear alternate ;

@keyframes fade-in {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-inline: auto;
`
const InfoLogoGroup = styled.div`
    display: flex;
    align-items: center;
    padding  : 1rem;
    border-radius: .5rem;
    box-shadow: 0px 0px 8px rgba( 0 , 0 , 0 , .125);
`
const InfoGroup = styled.div`
  display: flex;
  min-width: 150px;
  flex-direction: column;
  gap: .6rem;
  margin-inline: auto;
  
`
const InfoHeader = styled.div`
  font-weight: bold;
  font-size: 1rem;
  opacity: .8;
  color: gray;
`
const InfoData = styled.div`
  color: white;
  font-weight: regular;
`
const ProfileData = ({user}) => {

const {
    public_repos ,
    public_gists ,
    followers , 
    following

} = user;
const handleAnimation = (e)=>{
  e.target.style.opacity = 1;
}
  return (
    
    <Container onAnimationEnd={(e)=>handleAnimation(e)}>
         <Info>
            <InfoLogoGroup>
                <InfoGroup>
                    <InfoHeader>Followers</InfoHeader>
                    <InfoData>{followers}</InfoData>
                </InfoGroup>
                <Groups style={{color : "#ff2876"}}  />
            </InfoLogoGroup>
          <InfoLogoGroup>
              <InfoGroup>
                <InfoHeader>Following</InfoHeader>
                <InfoData>{following}</InfoData>
              </InfoGroup>
              <People style={{color : "#ff2876"}} />

          </InfoLogoGroup>
          <InfoLogoGroup>
              <InfoGroup>
                  <InfoHeader>Public Repos</InfoHeader>
                  <InfoData>{public_repos}</InfoData>
              </InfoGroup>
              <ViewInAr style={{color : "#ff2876"}} />
          </InfoLogoGroup>
          <InfoLogoGroup>
              <InfoGroup>
                  <InfoHeader>Public Gists</InfoHeader>
                  <InfoData>{public_gists}</InfoData>
              </InfoGroup>
              <Inventory style={{color : "#ff2876"}}/>
          </InfoLogoGroup>
      </Info>
    </Container>
  )
}

export default ProfileData
