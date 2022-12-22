import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Avatar, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import {deepOrange} from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


export const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Avatar sx={{bgcolor: deepOrange[500]}}>B</Avatar>
                    <Typography variant="h6" ml={2} component="div" sx={{flexGrow: 1}}>
                        MUI Test
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color="inherit">
                            <NavLink to='/' style={{color: "white", textDecoration: "none"}}><HomeIcon/></NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to='/about' style={{color: "white", textDecoration: "none"}}><InfoIcon/></NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to='/faq' style={{color: "white", textDecoration: "none"}}><QuestionMarkIcon/></NavLink>
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
