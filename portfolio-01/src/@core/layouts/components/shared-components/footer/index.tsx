// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { Typography } from '@mui/material'
import { EmailOutlined, Phone } from '@mui/icons-material'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
}

const Footer = (props: Props) => {
  // ** Props
  const { settings } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
        }}
      >
        {' '}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
          <Typography variant='body1'>
            <EmailOutlined sx={{ mr: 5 }} />
            diegomota2374@gmail.com
          </Typography>
          <Typography variant='body1'>
            <Phone sx={{ mr: 5 }} />
            (85)99637-0976
          </Typography>
          <Typography variant='body1'>
            <Phone sx={{ mr: 5 }} />
            (85)99984-6994
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
