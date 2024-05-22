import { Autocomplete, Box, Text } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import React from 'react'
import { Button } from '@mantine/core';
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  return (
    <Box className='navbar  h-full w-full flex justify-between px-72 pt-2 pb-2  border-b border-black-200 shadow-lg'>
        <Box className='navbarlogo gap-2 flex items-center'>
            <Box className='logo h-9 w-9'>
                <img src="https://autofinance.vercel.app/assets/logo-90776241.png" />
            </Box>
            <Box className='logoname font-bold text-2xl '>
                    Auto Finance
            </Box>
        </Box>
        <Box className='navitems flex items-center'>
            <Box>
                 <Button variant="subtle" color="gray">Home</Button>
            </Box>
            <Box>
                <Button variant="subtle" color="gray">Loans</Button>
            </Box>
            <Box>
                <Button variant="subtle" color="gray">About Us</Button>
            </Box>
            <Box>
            
                <Autocomplete
                placeholder="Search"
                data={['Loans', 'Finance Advice', 'Finance Planner', 'Services', 'Home loan calculator']}
                />
            </Box>
        </Box>
    </Box>
   
        
  )
}

export default Navbar
