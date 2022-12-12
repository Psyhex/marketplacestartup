import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NAV_BAR_ABOUT, NAV_BAR_TITLE } from "../../constants/navbartitles";
import "./Footer.css";
import {
  ABOUT,
  ADD_SERVICE,
  HOME,
  LOGIN,
  PRIVACY_POLICY,
  REGISTER,
  SERVICES,
  USER_PROFILE,
} from "../../constants/routes";
function Footer() {
  const service = "Service";
  const allServices = "All Services";
  const addService = "Add Service";
  const popularServices = "Popular Services";
  const login = "Login";
  const register = "Register";
  const userProfile = "Profile";
  const home = "Home";
  const privacyPolicy = "Privacy Policy";
  const account = "Account";

  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        mt={10}
        className="FooterContainer"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">{NAV_BAR_TITLE}</Typography>
              </Box>
              <Box>
                <Link to={HOME} className="Link">
                  {home}
                </Link>
              </Box>
              <Box>
                <Link to={ABOUT} className="Link">
                  {NAV_BAR_ABOUT}
                </Link>
              </Box>
              <Box>
                <Link to={PRIVACY_POLICY} className="Link">
                  {privacyPolicy}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">{account}</Typography>
              </Box>
              <Box>
                <Link to={LOGIN} className="Link">
                  {login}
                </Link>
              </Box>
              <Box>
                <Link to={REGISTER} color="inherit" className="Link">
                  {register}
                </Link>
              </Box>
              <Box>
                <Link to={USER_PROFILE} color="inherit" className="Link">
                  {userProfile}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">{service}</Typography>
              </Box>
              <Box>
                <Link to={SERVICES} className="Link">
                  {allServices}
                </Link>
              </Box>
              <Box>
                <Link to="/" className="Link">
                  {popularServices}
                </Link>
              </Box>
              <Box>
                <Link to={ADD_SERVICE} className="Link">
                  {addService}
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            className="CopyRight"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            {NAV_BAR_TITLE} &#169; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
