import {createContext, useState, useMemo} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'


const ColorModeContext = createContext({toggleColorMode: () => {}})

export interface ColorModeProps {
    children: React.ReactNode
}

export const ColorModeProvider = ({children}: ColorModeProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default ColorModeContext