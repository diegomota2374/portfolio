import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSettings } from 'src/@core/hooks/useSettings'

const BoxWrapper = styled(Box)(() => ({
  minHeight: '90vh',
  maxHeight: '100%',
  width: '100%',
  flexGrow: 1,
  py: 8,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(/backProject1.png)',
  backgroundPosition: '5% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',

}))
const CardWrapper = styled(Card)(() => ({
  filter: 'grayscale(0.5)',
  transition: '0.3s',
  ':hover': {
    filter: 'unset',
  },

}))

const Projects = () => {
  const { settings } = useSettings()

  return (
    <BoxWrapper
      component='main'
      id='Projetos'
      sx={
        settings.mode === 'dark'
          ? {
              backgroundColor: 'gray'
            }
          : {
              backgroundColor: 'white'
            }
      }
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CardWrapper>
              <Grid item xs={12}>
                <Typography variant='h5' sx={{ p: 5, fontFamily: 'Amatic SC cursive' }}>
                  PROJETOS
                </Typography>
              </Grid>
              <CardContent>
                <Card sx={{ border: 1, borderColor: 'divider' }}>
                  <TableContainer>
                    <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                      <TableRow hover sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                        <TableCell>
                          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                              component='img'
                              sx={{
                                height: 233,
                                width: 233,
                                borderRadius: 2,
                                maxHeight: { xs: 93, md: 167 },
                                maxWidth: { xs: 93, md: 167 }
                              }}
                              src='/projeto01.png'
                            />
                            <Box
                              sx={{
                                mx: 4,
                                flex: '1 1',
                                display: 'flex',
                                overflow: 'hidden',
                                flexDirection: 'column'
                              }}
                            >
                              <Typography variant='subtitle1'>NANO FARMACO</Typography>
                              <Typography variant='subtitle2'>
                                Este projeto foi desenvolvido junto com o desenvolvedor full stack Cireneu Guilherme. A
                                nano farmaco é um sistema voltado para medicos, tendo como base, cadastro e
                                gerenciamento de receitas e clientes, incluindo também um pequeno eCommerce.
                                <br />
                                Atividades Realizadas:
                                <br />
                                Implementação e aprimoramento de sistemas. Participação de reuniões regulares para
                                apresentação e acompanhamento do progresso do projeto. Aplicar os Fundamentos do Design
                                à criação de sites. <br /> Tecnologias utilizadas: <br /> React.js, Next.js, Material
                                UI, TypeScript, JavaScript e Git/Github.
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                        <TableCell>
                          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                              component='img'
                              sx={{
                                height: 233,
                                width: 233,
                                borderRadius: 2,
                                maxHeight: { xs: 93, md: 167 },
                                maxWidth: { xs: 93, md: 167 }
                              }}
                              src='/futureProject1.png'
                            />
                            <Box
                              sx={{
                                mx: 4,
                                flex: '1 1',
                                display: 'flex',
                                overflow: 'hidden',
                                flexDirection: 'column'
                              }}
                            >
                              <Typography variant='subtitle1'>FUTURO PROJETO</Typography>
                              <Typography variant='subtitle2'>
                                Este local está reservado para futuros projetos que serão desenvolvidos.
                              </Typography>
                            </Box>
                            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                              {}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                        <TableCell>
                          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                              component='img'
                              sx={{
                                height: 233,
                                width: 233,
                                borderRadius: 2,
                                maxHeight: { xs: 93, md: 167 },
                                maxWidth: { xs: 93, md: 167 }
                              }}
                              src='/futureProject1.png'
                            />
                            <Box
                              sx={{
                                mx: 4,
                                flex: '1 1',
                                display: 'flex',
                                overflow: 'hidden',
                                flexDirection: 'column'
                              }}
                            >
                              <Typography variant='subtitle1'>FUTURO PROJETO</Typography>
                              <Typography variant='subtitle2'>
                                Este local está reservado para futuros projetos que serão desenvolvidos.
                              </Typography>
                            </Box>
                            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                              {}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>
                </Card>
              </CardContent>
            </CardWrapper>
          </Grid>
        </Grid>
      </Container>
    </BoxWrapper>
  )
}

export default Projects
