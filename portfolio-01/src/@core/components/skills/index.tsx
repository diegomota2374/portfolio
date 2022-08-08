import { Avatar, Box, Container, Typography } from '@mui/material'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const labels: { [index: string]: string } = {
  1.0: 'Inicio',
  1.5: 'Inicio+',
  2.0: 'Ok',
  2.5: 'Ok+',
  3: 'Ok++',
  3.5: 'Bom',
  4: 'Bom+',
  4.5: 'Excelente',
  5: 'Excelente+'
}

const BoxWrapper = styled(Box)(() => ({
  minHeight: '85vh',
  maxHeight: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(/backAbout.png)',
  backgroundPosition: '0% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '42%',

}))
const ListWrapper = styled(List)(({ theme }) => ({
  width: '100%',
  borderRadius: 5,
  filter: 'grayscale(0.5)',
  transition: '0.3s',
  ':hover': {
    filter: 'unset',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))
const Skills = () => {
  const react = 1.5
  const next = 1.5
  const ts = 1.0
  const html = 2.5
  const css = 2.5
  const materialUi = 2.0
  const git = 2.0
  const ps = 2.5

  const [openReact, setOpenReact] = useState(false)

  const [openNext, setOpenNext] = useState(false)

  const [openTs, setOpenTs] = useState(false)

  const [openHtml, setOpenHtml] = useState(false)

  const [openCss, setOpenCss] = useState(false)

  const [openMaterialUi, setOpenMaterialUi] = useState(false)

  const [openGit, setOpenGit] = useState(false)

  const [openPs, setOpenPs] = useState(false)

  const handleClickReact = () => {
    setOpenReact(!openReact)
  }
  const handleClickNext = () => {
    setOpenNext(!openNext)
  }
  const handleClickTs = () => {
    setOpenTs(!openTs)
  }
  const handleClickHtml = () => {
    setOpenHtml(!openHtml)
  }
  const handleClickCss = () => {
    setOpenCss(!openCss)
  }
  const handleClickMaterialUi = () => {
    setOpenMaterialUi(!openMaterialUi)
  }
  const handleClickGit = () => {
    setOpenGit(!openGit)
  }
  const handleClickPs = () => {
    setOpenPs(!openPs)
  }

  return (
    <BoxWrapper id='Habilidades' >
      <Container>
        <ListWrapper
          sx={{ backgroundColor: 'background.paper' }}
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader' sx={{ borderRadius: 5 }}>
              LISTA DE HABILIDADES
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClickReact}>
            <ListItemIcon>
              <Avatar alt='React' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
            </ListItemIcon>
            <ListItemText primary='React.js' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={react}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[react]}</Box>
            </Box>
            {openReact ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openReact} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido através de cursos, como "React e Next.js" da Cod3r ou "React básico" da DIO,
                    com videos e artigos visualizados no Google e YouTube, e na pratica, devido ao projeto desenvolvido
                    'NANO FARMACO', que utiliza esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickNext}>
            <ListItemIcon>
              <Avatar alt='Next' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg' />
            </ListItemIcon>
            <ListItemText primary='Next.js' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={next}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[next]}</Box>
            </Box>
            {openNext ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openNext} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido através de cursos, como "React e Next.js" da Cod3r ou "Next.js básico" da
                    DIO, com videos e artigos visualizados no Google e YouTube, e na pratica, devido ao projeto
                    desenvolvido 'NANO FARMACO', que utiliza esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickTs}>
            <ListItemIcon>
              <Avatar
                sx={{ p: 1 }}
                alt='TypeScript'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
              />
            </ListItemIcon>
            <ListItemText primary='TypeScript' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={ts}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[ts]}</Box>
            </Box>
            {openTs ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openTs} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido através de cursos, como "React e Next.js" da Cod3r, com videos e artigos
                    visualizados no Google e YouTube, e na pratica, devido ao projeto desenvolvido 'NANO FARMACO', que
                    utiliza esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickHtml}>
            <ListItemIcon>
              <Avatar
                sx={{ p: 1 }}
                alt='HTML'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg '
              />
            </ListItemIcon>
            <ListItemText primary='HTML' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={html}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[html]}</Box>
            </Box>
            {openHtml ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openHtml} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido através de cursos, como "HTML e CSS" da DeveMedia ou "HTML e CSS básico" da
                    DIO, com videos e artigos visualizados no Google e YouTube, e na pratica, devido aos projetos
                    desenvolvidos, como o "NANO FARMACO" e outros projetos antigos desenvolvidos com PHP puro, que
                    utilizavam esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickCss}>
            <ListItemIcon>
              <Avatar
                sx={{ p: 1 }}
                alt='CSS'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
              />
            </ListItemIcon>
            <ListItemText primary='CSS' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={css}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[css]}</Box>
            </Box>
            {openCss ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openCss} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido através de cursos, como "HTML e CSS" da DeveMedia ou "HTML e CSS básico" da
                    DIO, com videos e artigos visualizados no Google e YouTube, e na pratica, devido aos projetos
                    desenvolvidos, como o "NANO FARMACO" e outros projetos antigos desenvolvidos com PHP puro, que
                    utilizavam esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickMaterialUi}>
            <ListItemIcon>
              <Avatar
                sx={{ p: 1 }}
                alt='Material UI'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
              />
            </ListItemIcon>
            <ListItemText primary='Material UI' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={materialUi}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[materialUi]}</Box>
            </Box>
            {openMaterialUi ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openMaterialUi} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido com videos e artigos visualizados no Google e YouTube, e na pratica, devido
                    ao projeto desenvolvido 'NANO FARMACO', que utiliza esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickGit}>
            <ListItemIcon>
              <Avatar
                alt='Git/GitHub'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              />
            </ListItemIcon>
            <ListItemText primary='Git/GitHub' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={git}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[git]}</Box>
            </Box>
            {openGit ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openGit} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido através de cursos, como "Git e GitHub" da DIO, com videos e artigos
                    visualizados no Google e YouTube, e na pratica, devido ao projeto desenvolvido 'NANO FARMACO', que
                    utiliza esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickPs}>
            <ListItemIcon>
              <Avatar
                alt='PhotoShop'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
              />
            </ListItemIcon>
            <ListItemText primary='PhotoShop' />

            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating
                name='text-feedback'
                value={ps}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
              />
              <Box sx={{ ml: 2 }}>{labels[ps]}</Box>
            </Box>
            {openPs ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openPs} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Typography variant='subtitle2' sx={{ p: 5 }}>
                    Conhecimento adquirido com videos e artigos visualizados no Google e YouTube, e na pratica, devido
                    aos projetos desenvolvidos, como o "NANO FARMACO" e outros projetos antigos desenvolvidos com PHP
                    puro, que utilizavam esta tecnologia.
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        </ListWrapper>
      </Container>
    </BoxWrapper>
  )
}
export default Skills
