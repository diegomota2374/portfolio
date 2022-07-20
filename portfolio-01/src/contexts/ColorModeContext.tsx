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
    const lightColor = '#AAAAAA'
    const darkColor = '#212121'
    const mainColor = mode === 'light' ? lightColor : darkColor

    const lightColorPaper = '#AAAAAA'
    const darkColorPaper = '#212121'
    const mainColorPaper = mode === 'light' ? lightColorPaper : darkColorPaper
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
            common: {
              black: '#000',
              white: '#FFF'
            },
            primary: {
              light: '#9E69FD',
              main: '#9155FD',
              dark: '#804BDF',
              contrastText: '#FFF'
            },
            secondary: {
              light: '#9C9FA4',
              main: '#8A8D93',
              dark: '#777B82',
              contrastText: '#FFF'
            },
            success: {
              light: '#6AD01F',
              main: '#56CA00',
              dark: '#4CB200',
              contrastText: '#FFF'
            },
            error: {
              light: '#FF6166',
              main: '#FF4C51',
              dark: '#E04347',
              contrastText: '#FFF'
            },
            warning: {
              light: '#FFCA64',
              main: '#FFB400',
              dark: '#E09E00',
              contrastText: '#FFF'
            },
            info: {
              light: '#32BAFF',
              main: '#16B1FF',
              dark: '#139CE0',
              contrastText: '#FFF'
            },
            grey: {
              50: '#FAFAFA',
              100: '#F5F5F5',
              200: '#EEEEEE',
              300: '#E0E0E0',
              400: '#BDBDBD',
              500: '#9E9E9E',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              A100: '#D5D5D5',
              A200: '#AAAAAA',
              A400: '#616161',
              A700: '#303030'
            },
            background:{
              default:mainColor,
              paper:mainColorPaper,
            }
          },
          
        }),
      [mode, mainColor, mainColorPaper],
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