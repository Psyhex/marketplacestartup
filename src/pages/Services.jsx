import { Grid } from "@mui/material";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import service10good from "../mockdata/service10good.json";

function Services() {
  const services = service10good;
  console.log(services);
  return (
    <>
      <div>Services</div>
      <main>
        <Grid container justify="center" spacing={4}>
          {services.map((service) => (
            <Grid item key={services.service_id} xs={12} sm={6} md={4} lg={3}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}

export default Services;
