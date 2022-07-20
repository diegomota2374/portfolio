import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import { Card } from '@mui/material'
import AppBarComponent from '../@core/components/appBar/AppBarComponent'


const Home: NextPage = () => {
  return (
    <Box>
      <Card>
        <AppBarComponent/>
      </Card>
    </Box>

  )
}

export default Home
