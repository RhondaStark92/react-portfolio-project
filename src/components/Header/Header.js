import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
// import './Header.css';

import styled from 'styled-components'
const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.div`
  background-color: #5291a4;
  height: 3rem;
  padding: 1rem;
  color: white;
`

const Header = () => {
    return(
        <div>
        <AppWrapper position="static">
            <AppHeader>
                <Typography variant="title" color="inherit">
                Project Portfolio
                </Typography>
                    <Link style={{color: '#ffffff', paddingLeft: 13, textDecoration: 'none'}} to="/admin">Admin</Link>
                    <Link style={{color: '#ffffff', paddingLeft: 13, textDecoration: 'none'}} to="/">Projects</Link>
            </AppHeader>

        </AppWrapper>
        </div>
    )
}
export default Header;