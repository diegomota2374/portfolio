// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { Avatar, Link, Typography } from '@mui/material'
import { EmailOutlined, Phone } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { styled } from '@mui/material/styles'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
}

const Sobre = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '10px'
  }
}))
const Contato = styled(Typography)(({ theme }) => ({
  '> :first-child': {
    marginRight: '10px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
    '> :first-child': {
      marginRight: '5px',
      width: '10px'
    }
  }
}))

const Footer = (props: Props) => {
  // ** Props
  const { settings } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  return (
    <Box
      id='Contato'
      component='footer'
      className='layout-footer'
      sx={
        settings.mode === 'dark'
          ? {
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#312d4b'
            }
          : {
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff'
            }
      }
    >
      <Box
        className='footer-content-container'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            maxWidth: '60%'
          }}
        >
          <Sobre variant='subtitle1' sx={{ fontWeight: 'bold' }}>
            Sobre:
          </Sobre>
          <Sobre variant='body1'>
            Desenvolvedor front-end em inicio de carreira, procurando oportunidade para entrar no mercado, com muita
            dedicação e vontade de aprender.
          </Sobre>
          <Box sx={{ display: 'flex' }}>
            <Link
              href='https://www.linkedin.com/in/diego-mota-5214b1a0/'
              rel='noopener'
              variant='body2'
              target='_blank'
              underline='none'
            >
              <Avatar
                alt='React'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                sx={{ p: 1, mr: 2, mt: 2, width: 28, height: 28 }}
              />
            </Link>
            <Link
              href='https://github.com/diegomota2374'
              rel='noopener'
              variant='body2'
              target='_blank'
              underline='none'
            >
              <Avatar
                alt='Next'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                sx={{ mr: 2, mt: 2, width: 26, height: 26 }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', fontSize: 1 }}
        >
          <Contato variant='body1'>
            <LocationOnIcon />
            Paraipaba - Ceará - Brasil
          </Contato>
          <Contato variant='body1'>
            <EmailOutlined />
            diegomota2374@gmail.com
          </Contato>
          <Contato variant='body1'>
            <Phone />
            (85)99637-0976
          </Contato>
          <Contato variant='body1'>
            <Phone />
            (85)99984-6994
          </Contato>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
