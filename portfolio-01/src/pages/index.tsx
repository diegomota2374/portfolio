import type { NextPage } from 'next'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button } from '@mui/material'
import useColorMode from '../hooks/useColorMode';


const Home: NextPage = () => {
  const theme = useTheme()
  const colorMode = useColorMode()
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Button variant='contained'>Botão</Button> 
    </Box>
  )
}

export default Home
