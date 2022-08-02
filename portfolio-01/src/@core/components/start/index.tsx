import { useSettings } from 'src/@core/hooks/useSettings'
import { Box, Button, CardActions, Link, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Title = styled(Typography)(({ theme }) => ({
  textShadow: '2px 3px 5px #00000030',
  ':hover': {
    fontSize: '98px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '58px',
    ':hover': {
      fontSize: '60px'
    }
  }
}))
const SubTitle = styled(Typography)(({ theme }) => ({
  textShadow: '2px 3px 5px #00000030',

  [theme.breakpoints.down('md')]: {
    fontSize: '28px'
  }
}))
const BoxWrapper = styled(Box)(({ theme }) => ({
  opacity: '0',
  height: '85vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'cardProfile 1.5s ease-in-out 0.6s forwards',
  '@keyframes cardProfile':{
    to:{
      opacity: '1'
    }
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}))
const Strip = styled(Box)(() => ({
  width: '20%'
}))

const BoxStrip = styled(Box)(({ theme }) => ({
  width: '15%',
  height: '180%',
  display: 'flex',
  position: 'absolute',
  justifyContent: 'space-around',
  animation: 'strips 1.5s ease-in-out forwards',
  '@keyframes strips': {
    from: {
      opacity: '0',
      transform: 'translate(100vw, -50vh) rotate(0.40turn)'
    },
    to: {
      opacity: '1',
      transform: 'translate(0vw , -10vh) rotate(0.40turn)'
    }
  },
  [theme.breakpoints.down('md')]: {
    '@keyframes strips': {
      from: {
        opacity: '0',
        transform: 'translate(100vw, -50vh) rotate(0.40turn)'
      },
      to: {
        opacity: '1',
        transform: 'translate(-20vw , -20vh) rotate(0.40turn)'
      }
    }
  }
}))

const BoxRectangle = styled(Box)(({theme}) => ({
  width: '20%',
  height: '250vh',
  position: 'absolute',
  animation: 'rectangle 1.5s ease-in-out forwards',
  '@keyframes rectangle':{
    from: {
      opacity: '0',
      transform: 'translate(100vw, 50vh) rotate(0.10turn)'
    },
    to: {
      opacity: '1',
      transform: 'translate(0vw, -130vh) rotate(0.10turn)'
    }
  },
  [theme.breakpoints.down('md')]: {
    '@keyframes rectangle': {
      from: {
        opacity: '0',
        transform: 'translate(100vw, 50vh) rotate(0.10turn)'
      },
      to: {
        opacity: '1',
        transform: 'translate(-50vw, -80vh) rotate(0.10turn)'
      }
    }
  }
}))

const Start = () => {
  const { settings } = useSettings()

  return (
    <Box
      sx={
        settings.mode === 'dark'
          ? { backgroundColor: 'gray', position: 'relative' }
          : { backgroundColor: 'white', position: 'relative' }
      }
    >
      <BoxStrip >
        <Strip sx={settings.mode === 'dark' ? { backgroundColor: '#312D4B' } : { backgroundColor: '#9155FD' }} />
        <Strip sx={settings.mode === 'dark' ? { backgroundColor: '#312D4B' } : { backgroundColor: '#9155FD' }} />
        <Strip sx={settings.mode === 'dark' ? { backgroundColor: '#312D4B' } : { backgroundColor: '#9155FD' }} />
      </BoxStrip>

      <BoxRectangle sx={settings.mode === 'dark' ? { backgroundColor: '#312D4B' } : { backgroundColor: '#9155FD' }} />

      <BoxWrapper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Title variant='h1' sx={{ fontFamily: 'Amatic SC cursive' }}>
            DIEGO MOTA
          </Title>
          <SubTitle variant='h3' sx={{ fontFamily: 'Amatic SC cursive' }}>
            FRONT-END DEVELOPER
          </SubTitle>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href='https://www.linkedin.com/in/diego-mota-5214b1a0/'
              rel='noopener'
              variant='body2'
              target='_blank'
              underline='none'
            >
              <Button variant='contained' color='primary' size='large'>
                Linkedin
              </Button>
            </Link>
            <Link
              href='https://github.com/diegomota2374'
              rel='noopener'
              variant='body2'
              target='_blank'
              underline='none'
            >
              <Button variant='contained' color='primary' size='large'>
                GitHub
              </Button>
            </Link>
          </CardActions>
        </Box>
      </BoxWrapper>
    </Box>
  )
}

export default Start
