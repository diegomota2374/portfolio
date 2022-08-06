import { Avatar, Box, Card, Typography } from '@mui/material'
import { useSettings } from 'src/@core/hooks/useSettings'
import { styled } from '@mui/material/styles'

const CardAbout = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70vw',
  padding: '20px',
  position: 'relative',
  filter: 'grayscale(0.5)',
  transition: '0.3s',

  ':before': {
    content: '""',
    position: 'absolute',
    height: '70%',
    width: '97%',
    display: 'block',
    border: '1px solid',
    borderRadius: '10px',
    opacity: '0',
    transition: '0.3s'
  },

  ':hover': {
    filter: 'unset',

    ':before': {
      height: '92%',
      opacity: '1'
    }
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '2px',
    fontSize: '2px',

    ':before': {
      height: '99%'
    },
    ':hover': {
      ':before': {
        height: '99%'
      }
    }
  }
}))
const AvatarSize = styled(Avatar)(({ theme }) => ({
  height: '300px',
  width: '300px',

  [theme.breakpoints.down('md')]: {
    height: '100px',
    width: '100px'
  }
}))
const Title = styled(Typography)(({ theme }) => ({
  textShadow: '2px 3px 5px #00000030',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  }
}))
const SubTitle = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.down('md')]: {
    fontSize: '14px'
  }
}))
const About = () => {
  const { settings } = useSettings()

  return (
    <Box
      sx={
        settings.mode === 'dark'
          ? {
              height: '90vh',
              width: '100%',
              backgroundColor: '#27243d',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg)',
              backgroundPosition: 'start',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '10%',
            }
          : {
              height: '90vh',
              width: '100%',
              backgroundColor: '#9155FD',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg)',
              backgroundPosition: 'start',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '10%',
            }
      }
    >
      <CardAbout sx={settings.mode === 'dark' ? { borderColor: 'white' } : { borderColor: 'gray' }}>
        <AvatarSize alt='Remy Sharp' src='/diego.png' sx={{}} />
        <Typography sx={{ p: 5 }}>
          <Title variant='h4' sx={{pb:4}}>Olá, meu nome é Diego Mota Cavalcante.</Title>
          <SubTitle variant='body1' sx={{pb:2}}>
            Eu sou um desenvolvedor font-end com experiência em desenvolvimento e análise de sistemas, provendo soluções em analise, arquitetura, desenvolvimento e manutenção de
            aplicações web com suas respectivas tecnologias. Expertise em análise de projetos e desenvolvimento de
            soluções, com desenvolvimento profissional em constante processo de renovação. Eficaz em produzir e relatar
            dados para a Gestão de Projetos.
          </SubTitle>
          <SubTitle variant='body1'>
          	Tecnologias conhecidas:
            React.js, Next.js, Material UI, TypeScript, JavaScript, HTML, CSS e Git/GitHub.
          </SubTitle>
        </Typography>
      </CardAbout>
    </Box>
  )
}

export default About
