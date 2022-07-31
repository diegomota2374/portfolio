import { Grid, Container, Card, Typography, CardHeader, Box } from '@mui/material'
import Head from 'next/head'

const CreatePatient = () => {
  return (
    <>
      <Head>
        <title>Controle de Receituário</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='h5'>Controle de Receituário</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title='Conteúdo do card' titleTypographyProps={{ variant: 'h6' }} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default CreatePatient
