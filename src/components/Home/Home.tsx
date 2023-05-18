import React from 'react';
//...import for react above

// New Styles Code
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import pine_sap_image from '../../assets/images/big_pine_logo.jpg';
// Below Imports
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

//...interface above


// Create Styled Components with styled-components
const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pine_sap_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

export const Home = ( props:Props) => {
 
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href="#">Brand</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="#">Home</NavA>
                    </li>
                    <li>
                        <NavA to="/about">About</NavA>
                    </li>
                    <li>
                        <NavA to="#">Learn More</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Not your mothers Punk Rock</p>
                    <Button color='error' variant='contained' component={Link} to='/dashboard'>See the Artists</Button>
                </MainText>
            </Main>

        </Root>
    )
}