import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import { Card, Container } from '@mui/material'
import AppBarComponent from '../@core/components/appBar/AppBarComponent'
import Start from '../@core/components/start';


const Home: NextPage = () => {
  return (
    <Box>
      <Card>
        <AppBarComponent/>
      </Card>
      <Container>
        <Start/>
      </Container>
    </Box>

  )
}

export default Home
