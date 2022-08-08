// ** MUI Imports
import Grid from '@mui/material/Grid'
import About from 'src/@core/components/about'
import Contact from 'src/@core/components/contact'
import Projects from 'src/@core/components/projects'
import Skills from 'src/@core/components/skills'
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
        <Grid >
          <Projects/>
        </Grid>
        <Grid >
          <Skills/>
        </Grid>
        <Grid >
          <Contact/>
        </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
