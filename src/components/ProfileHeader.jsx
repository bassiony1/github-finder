import Aos from 'aos'
import React, { useEffect } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  padding-block: 1rem;
  padding-inline: .5rem;
  align-items: flex-start;
  gap: 2rem;

  @media (width < 760px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const Left = styled.div`
  width: 50%;
  min-width: 300px;
 
`
const ProfileImage = styled.img`
  border-radius: 15px;
`
const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  
`
const TitleGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
`
const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`
const Padge = styled.div`
  padding: .2em .4em;
  color: white;
  background-color: hsl(122, 29%, 50%);
  border-radius: .6rem;
`
const Bio = styled.p`
  color: white;
  font-weight: bold;

`
const Visit = styled.a`
  border: none;
  outline: none;
  padding: .6em 1.2em;
  background-color: ${({theme:{colors}})=> colors.secondary};
  color: white;
  font-weight: bold;
  transition: .3s ease-in-out;
  outline: 2px solid white;

  &:hover {
    background-color: white;
    color: ${({theme:{colors}})=> colors.secondary};
    scale : .92;
  }
`
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`
const InfoGroup = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  gap: .6rem;
  margin-inline: auto;
  padding  : 1rem;
  border-radius: .5rem;
  box-shadow: 0px 0px 8px rgba( 0 , 0 , 0 , .125);
  min-width: 200px;

  
`
const InfoHeader = styled.div`
  font-weight: bold;
  font-size: 1rem;
  opacity: .8;
  color: gray;
`
const InfoData = styled.p`
  color: white;
  font-weight: 300;
  font-size: .7rem;
`
const ProfileHeader = ({user}) => {
  useEffect(()=>{
    Aos.init({duration:2000});
},[])
  const {
html_url ,
avatar_url ,
type , 
location , 
name ,
bio ,
blog ,
twitter_username, 
hireable,
} = user ;
  return (
    <Container>
        <Left data-aos='zoom-in'>
      <ProfileImage src={avatar_url}>
      </ProfileImage>
        </Left>
      <Right data-aos='fade-right'>
        <TitleGroup>
          <Name>{name}</Name>
          <Padge>{type}</Padge>
          <Padge>{hireable  ? "Hireable" : "Not Hireable"}</Padge>
        </TitleGroup>
        <Bio>{bio  ? bio : "No Bio"}</Bio>
        <Visit href={html_url} target='_blank'>Visit Github Profile</Visit>
        <Info>
            <InfoGroup>
                <InfoHeader>Location</InfoHeader>
                <InfoData>{location ? location :"No Location"}</InfoData>
            </InfoGroup>
          <InfoGroup>
            <InfoHeader>Website</InfoHeader>
            <InfoData>{blog  ? blog : "No Website"}</InfoData>
          </InfoGroup>
          <InfoGroup>
              <InfoHeader>Twitter</InfoHeader>
              <InfoData>{twitter_username ? twitter_username : "No Twitter"}</InfoData>
          </InfoGroup>
      </Info>
      </Right>
    </Container>
  )
}

export default ProfileHeader
