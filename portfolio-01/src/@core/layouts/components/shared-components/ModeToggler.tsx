// ** MUI Imports
import { Box, PaletteMode, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const ModeToggler = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      {settings.mode === 'dark' ? (
        <Box sx={{display: 'flex'}}>
          <Typography variant='button'>Claro</Typography>
          <WeatherSunny />
        </Box>
      ) : (
        <Box sx={{display: 'flex'}}>
          <Typography variant='button' sx={{color:'white'}}>Escuro</Typography>
          <WeatherNight />
        </Box>
      )}
    </IconButton>
  )
}

export default ModeToggler
