import { FacebookOutlined, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    background-color: ${({theme:{colors}})=> colors.accent};
    `
const Container = styled.div`
    max-width: 1140px;
    min-height: 20vh;
    margin-inline: auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    `
const CopyRights = styled.p`
    text-align: center;
    font-size: 1.5rem;
    color : ${({theme : {colors}}) => colors.neutral_300};
    
`
const Socials = styled.div`
    display : flex; 
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color : ${({theme : {colors}}) => colors.neutral_300};
`
                
                
const SocialLink = styled.a`
    
    svg{
        font-size: 2.3rem !important;
        color: white;

        &:hover {
            color:#ff2876;
            animation: bounce .5s ease-in-out alternate ;
        }
        @keyframes bounce {
            0%{
                transform : translateY(0);
            }
            25%{
                transform : translateY(-10px);
            }
            50%{
                transform : translateY(0);
            }
            75%{
                transform : translateY(-5px);
            }
            100%{
                transform : translateY(0);
            }
        }
    }
    
`
const Footer = () => {
  return (
    <Foot>
        <Container>
        <CopyRights>Copyright © 2022 All rights reserved</CopyRights>
        <Socials>
            <SocialLink href='https://www.facebook.com/mahmoud.bassiony.18/'>
                    <FacebookOutlined></FacebookOutlined>
            </SocialLink>
            <SocialLink href='https://twitter.com/bassiony17'>
                <Twitter></Twitter>
            </SocialLink>
        </Socials>
        </Container>
    </Foot>
  )
}

export default Footer