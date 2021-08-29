import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import './breadcrum.css';
import { flexbox } from '@material-ui/system';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  
export default function Breadcrum() {
    return (
      <Box  display="flex" className="ssssssssssss">

          <Breadcrumbs aria-label="breadcrumb" >
            <Link color="inherit" href="/" onClick={handleClick}>
            <HomeIcon/>
            Home
            </Link>
          </Breadcrumbs>
      </Box>
      );
}
