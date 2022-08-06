// ** MUI Imports
import Grid from '@mui/material/Grid'
import About from 'src/@core/components/about'
import Start from 'src/@core/components/start'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

const Dashboard = () => {
  return (
    <ApexChartWrapper >
        <Grid >
          <Start/>
        </Grid>
        <Grid >
          <About/>
        </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
