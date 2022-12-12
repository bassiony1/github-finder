import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchCard from './SearchCard';
import Aos from 'aos';

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
const SearchContainer = styled.form`
    display: flex;
    width: 100%;
    max-width : 60vw;
    align-items: center;
    padding-block: 1rem;
`
const InputGroup = styled.div`
      display: flex;
      align-items: center;
      
      
      justify-content: space-between;
      width: 100%;
      
      overflow: hidden;
      background-color: white;
      
      @media (width < 680px){
        flex-direction: column;
        background-color: transparent;
      }

`
const Input = styled.input`
    border: none;
    outline: none;
    padding: 10px ;
    padding-left : 20px ;
    width: 100%;
    font-size : 1.2rem;
    background-color: transparent;
    @media (width < 680px){
        background-color: white;
        font-size: .8rem;
      }
`
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (width < 680px){
     width: 100%;
     gap: 5px;
    }
    `
const Search = styled.button`
    border: none;
    outline: none;
    padding: 1.5em ;
    background-color: ${({theme:{colors}})=> colors.primary};
    color : white;
    height: 100%;
    text-align: center;
    transition: .4s ease-in-out;
    &:hover {
        scale : .9;
        background-color: ${({theme:{colors}})=> colors.accent};
    }
    @media (width < 680px){
     width: 50%;
     font-size: .8rem;
    }
`
const Clear = styled(Search)`
    
`
const Spinner = styled.img`
    max-width: 300px;
`
const ResultContainer = styled.div`
    width : 100%;
    padding: 1rem;
    display : grid;
    grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
    gap: 2rem;
`

const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
const [loading , setLoading ] = useState(false);
const [users , setUsers] = useState([]);
const [input , setInput] = useState('');


const handleChange = (e)=> {
    setInput(e.target.value);
}



const handleSearch = async (e)=>{
    e.preventDefault();
    if(input === ''){
        toast.error('Enter a Valid Input', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            });
            return;
    }
    setLoading(true);
    setUsers(await getUsers(input));
    setLoading(false);
    
}


const getUsers = async (text) => {
    
    const response = await fetch(`https://api.github.com/search/users?q=${text}`, {
        headers : {
            Authorization : `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
        }
    })
    

    const data = await response.json();
    return data.items;
}
const handleClear =  (e)=>{
    e.preventDefault();
    setInput('');
    
    setUsers([]);

}
  return (
    <MainContainer>
        <Container>
            <SearchContainer data-aos='zoom-in'>
                <InputGroup>
            <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    closeButton={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    toastStyle={{backgroundColor: "hsl(218, 18%, 20%)" , translate : "0 100%" , color : "white" ,  textAlign:"center" }}/>
                    
                    <Input value={input}  onChange={handleChange} type="text" placeholder='Enter User Name'></Input>
                    <ButtonGroup>
                    <Search type='submit' onClick={handleSearch}>Search</Search>
                    <Clear type='submit' onClick={handleClear}>Clear</Clear>
                    </ButtonGroup>
                </InputGroup>
            </SearchContainer>
            {loading === true ? 
            <Spinner src="spiner.gif"></Spinner> : 
            (<ResultContainer> 
                {users.map((u , index) => <SearchCard key={index} user={u}/>)}
            </ResultContainer>)}
            
        </Container>
    </MainContainer>
  )
}

export default Main