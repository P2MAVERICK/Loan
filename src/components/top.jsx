import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const Top = () => {
  return (
    <Box className='flex justify-center w-full h-80vh'>
        <Box className='flex  w-[55vw] h-full justify-between'>
        <Box className='hero  pt-36 '>
            <Box className='hero-left text-5xl font-extrabold '>
                Drive Your 
                <span className='bg-sky-100 p-1.5'>
                Dreams
                </span> <br/>
                with Our Loans 
            </Box>
            <br/>
            <Box className='text-slate-500'>
                Rev up your life with our trusted auto finance services. We make it <br/>
                easy to get the money you need to own your dream vehicle, with <br/>
                 competitive rates and flexible repayment options.
            </Box>
            <Box className='checkitems items-center gap-4 pt-4  flex'>
                <Box className='gap-2 py-3' >
                <Box className='flex items-center gap-3'>
                    <Box className='h-6 w-6'>
                        <img src="tick.png" /> 
                    </Box>
                    <Box className='font-bold'>
                        Apply online or in-person
                    </Box>
                </Box> 
                <Box className='flex items-center gap-3'>
                    <Box className='h-6 w-6'>
                        <img src="tick.png" /> 
                    </Box>
                    <Box className='font-bold'>
                        Get your vehicle evaluated
                    </Box>
                </Box> 
                <Box className='flex items-center gap-3'>
                    <Box className='h-6 w-6'>
                        <img src="tick.png" /> 
                    </Box>
                    <Box className='font-bold'>
                        Get your loan and keep driving
                    </Box>
                </Box>
                </Box>
            </Box>
            <Box className='enquire-button'>
            <Box className='gap-4 pt-4 space-x-3'>
                 <Button variant="filled" size="md" radius="xl">Instant Loans</Button>
                 <Button variant="outline" color="rgba(0, 0, 0, 1)" size="md" radius="xl">Enquire Now</Button>
            </Box>  
        </Box>
        </Box>
        <Box className='pt-36 w-80 h-80'>
            <img src="https://autofinance.vercel.app/assets/banner-5af79011.png" alt="" />
        </Box>
       
        </Box>
       
    </Box>
  )
}

export default Top
