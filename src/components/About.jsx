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
const AboutContext = styled.p`
    max-width: 76ch;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #afafaf;
    color : ${({theme : {colors}}) => colors.neutral_300};
`

const About = () => {
  return (
    <MainContainer>
        <Container>
        <AboutContext>
            This Website Was Made By The Modest yet The Greatest Developer Of All Times 😂😂 and His name is Mahmoud Bassiony , 
            All You Have To Do is Write The Name of A github User to find All Details About Him

        </AboutContext>
        
            
        </Container>
    </MainContainer>
  )
}

export default About
