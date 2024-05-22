import { Accordion, Box, Button } from '@mantine/core'
import React from 'react'
import Navbar from './navbar';
import Card from './card';
import Cards from './card';

const Bottom = () => {

    const groceries=[
        {
            value:'How do I apply for a loan',
            description:'You can apply for a loan online or visit one of our branches to complete your application. Our application process is simple and easy to follow.'
        },{
            value:'How long does it take to get approved for a loan?',
            description:'Our fast approval process means that you can get approved for a loan in as little as 24 hours. We understand that our customers need quick access to funds, and we work hard to make that happen.'
        },{
            value:'What happens if I cannot make my payments?',
            description:'We understand that unexpected circumstances can arise, and we are here to help. If you are having trouble making your payments, please contact our customer service team as soon as possible. We may be able to work out a payment plan or offer other solutions to help you get back on track.'
        },
    ]
    
    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control >{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));

    return (
    <Box className='main flex flex-col items-center'>

        {/* <Box className='scrollbtn fixed '>
        <Button variant="filled" size="md"> ↑ Scroll to Top</Button>
        </Box> */}
        <Box className='mid-items flex flex-col justify-around '>
            <Box className='flex justify-center pt-12 font-bold '>
                <span className='whychooseus bg-sky-600 border-500 white-space-no-wrap text-sm text-white p-2 rounded-[50px]'>
                    WHY CHOOSE US
                </span>
            </Box>
            <Box className='flex justify-center  text-4xl font-extrabold pb-5 pt-3'>
                Discover the Benefits of Working with Us
            </Box>
            <Box>
                <Box className='flex justify-center text-slate-500'>
                Get the best auto finance solutions with our commitment to customer satisfaction.
                </Box>
                <Box className='flex justify-center  text-slate-500'>
                Enjoy flexible payments and outstanding service that sets us apart.
                </Box>
            </Box>
        </Box>
        <Cards/>
        <Box className='flex flex-col justify-center'>
            <Box className='faq-header flex justify-center font-extrabold text-4xl pt-8 pb-4'>
                Frequently Asked Questions
            </Box>
            <Accordion className='w-[50vw] shadow-lg ' variant="contained" radius="xs" defaultValue="How do I apply for a loan">
            {items}
            </Accordion>
        </Box>
        
    </Box>
  )
}

export default Bottom
