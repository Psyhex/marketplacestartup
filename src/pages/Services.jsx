import { Grid } from "@mui/material";
import { Slider } from "@mui/material";
import React from "react";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import service10good from "../mockdata/service10good.json";

function Services() {
  const services = service10good;
  const priceRangeIndicator = "Price range filter";
  return (
    <>
      <main>
        <Grid container spacing={4}>
          <Grid container item xs={12} md={2}>
            <Grid item xs={12}>
              {priceRangeIndicator}
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                color="secondary"
              />
            </Grid>
          </Grid>
          <Grid container item justify="center" spacing={3} xs={12} md={10}>
            {services.map((service) => (
              <Grid item key={services.service_id} xs={12} sm={6} md={4} lg={3}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default Services;
