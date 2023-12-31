import React from 'react';
import Typography from '../../atoms/typograpy';
import { Stack,Box } from '@mui/material';
import styled from '@emotion/styled';
import LandingPageTemplate from '../../templates/Layout';

const CusomBox=styled(Box)({
     display:'flex',
     flexDirection:'column',
      justifyContent:'center',
     height:'25rem',
     width:'50rem',
     border:'2px solid grey',
     marginLeft:'500px',
     gap:'20px',
    padding:'10px',
    boxShadow: '30px 30px 20px rgba(0, 0, 0, 0.3)',
    transform:"translate(10%,40%)",
    background:'linear-gradient(red, yellow, green)',
    '@media (max-width: 768px)': {
      width: '90vw',
      height:'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
       transform: 'none',
       padding:'none',
       boxShadow:'none',
       gap:'none'
    },

})
const AboutMeBox=styled(Box)({

  height:'89vh',
  width:'100%',
  background:'linear-gradient(120deg, #FF758C, #FF7EB3, #A7C0FD, #6D5BBA)'
})
const AboutMe = () => {
  return (
   
    <AboutMeBox>
    
    <CusomBox>

      <Typography variant='h4'> 🙋‍♂️ About Me</Typography>
      
     <Typography variant='body1'>
        Hello! I'm Somnath More, a passionate Full Stack Developer based in Zemoso Tech ,Hyderabad. I'm dedicated to Developing Good Software, and I love sharing my experiences and insights with the world.
      </Typography>
      <Typography variant='body1'>
        I have a background in Computer Science and 2 years experience in development. I'm constantly learning and exploring new things, and I'm excited to see where my journey takes me.
        </Typography>
        <Typography variant='body1'>
        In my free time, you can find me on Netflix,Playing Cricket. I also enjoy running and writing, and I'm a firm believer in the power of my ethics.
        </Typography>
        <Typography variant='body1'>
        This website/blog is my platform to share my thoughts, ideas, and experiences with you. I hope you find my content interesting and valuable. Feel free to connect with me on somnath_more and let's embark on this journey together!
        </Typography>
    </CusomBox>
    </AboutMeBox>
  );
};


const AboutPage = () => {
  return (
    <LandingPageTemplate content={<AboutMe/>}/>
  )
}

export default AboutPage
