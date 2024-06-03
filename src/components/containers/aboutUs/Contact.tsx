'use client';

import SectionTitle from '@/components/UI/SectionTitle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import SendIcon from '@mui/icons-material/Send';
import { Button, Container, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Contact() {
  return (
    <ContactSection id='ContactSection'>
      <Container>
        <SectionTitle title='Contact' />
        <Information>
          <Grid container>
            <Grid item md={5}>
              <ContactInfo>
                <IconContainer>
                  <FmdGoodOutlinedIcon />
                  <h4>Sheikh Rasel Hall, BSMRSTU</h4>
                </IconContainer>
                <IconContainer>
                  <EmailOutlinedIcon />
                  <h4>mehdihasanshohan25@gmail.com</h4>
                </IconContainer>
                <IconContainer>
                  <PhoneIphoneOutlinedIcon />
                  <h4>+8801721146655</h4>
                </IconContainer>
              </ContactInfo>
            </Grid>
            <Grid item md={7}>
              <ContactForm>
                <form>
                  <TextField
                    id='demo-helper-text-misaligned'
                    label='Your Name'
                    fullWidth
                    color='secondary'
                    margin='dense'
                    className='inputField'
                    size='small'
                  />
                  <TextField
                    id='demo-helper-text-misaligned'
                    label='Your Email'
                    fullWidth
                    color='secondary'
                    size='small'
                    margin='dense'
                  />
                  <TextField
                    id='demo-helper-text-misaligned'
                    label='Message'
                    fullWidth
                    multiline
                    rows={4}
                    size='small'
                    color='secondary'
                    margin='dense'
                  />
                  <Button variant='contained' color='secondary' size='small' endIcon={<SendIcon />}>
                    Send Message
                  </Button>
                </form>
              </ContactForm>
            </Grid>
          </Grid>
        </Information>
      </Container>
    </ContactSection>
  );
}

const ContactSection = styled('section')({
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  padding: '70px 0 70px 0',
});

const Information = styled('div')({
  background: 'rgba(26, 55, 77, 0.2)',
  marginTop: '30px',
  borderRadius: '6px',
  padding: '40px 0',
});

const ContactInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  marginLeft: '50px',
});

const ContactForm = styled('div')({
  padding: '0 30px',
  borderLeft: '1px solid #142850',
});

const IconContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  color: '#000',
  fontFamily: 'Roboto, sans-serif',
});
