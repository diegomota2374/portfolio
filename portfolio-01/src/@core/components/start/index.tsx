import { Box, Button, CardActions, Link, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '58px',
  },
}));
const SubTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
  },
}));

const Start = () => {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "85vh",
        backgroundColor: "#007fff12",
      }}
    >
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <Title variant="h1" sx={{ fontFamily: "Amatic SC cursive"}}>
          DIEGO MOTA
        </Title>
        <SubTitle variant="h3" sx={{ fontFamily: "Amatic SC cursive" }}>
          FRONT-END DEVELOPER
        </SubTitle>
        <CardActions sx={{display:'flex', justifyContent:'center'}}>
          <Link
            href="https://www.linkedin.com/in/diego-mota-5214b1a0/"
            rel="noopener"
            variant="body2"
            target="_blank"
            underline="none"
          >
            <Button variant="outlined" color="primary" size="large">
              Linkedin
            </Button>
          </Link>
          <Link
            href="https://github.com/diegomota2374"
            rel="noopener"
            variant="body2"
            target="_blank"
            underline="none"
          >
            <Button variant="outlined" color="primary" size="large">
              GitHub
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Box>
  );
};

export default Start;
