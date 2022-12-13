import { Grid, Slider, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import service10good from "../mockdata/service10good.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Services() {
  const services = service10good;
  const [data, setData] = useState(services);
  const priceRangeIndicator = "Price range filter";
  const [sortType, setSortType] = useState("");
  const defaultSort = "Default";
  const ascSort = "Asc";
  const descSort = "Desc";

  const handleChange = (event) => {
    setSortType(event.target.value);
    if (event.target.value === defaultSort) {
      setData(services.sort((a, b) => a.service_id - b.service_id));
    } else if (event.target.value === ascSort) {
      setData(services.sort((a, b) => a.service_price - b.service_price));
    } else if (event.target.value === descSort) {
      setData(services.sort((a, b) => b.service_price - a.service_price));
    }
  };
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
                color="primary"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortType}
                  label="Sort Type"
                  onChange={handleChange}
                >
                  <MenuItem value={defaultSort}>{defaultSort}</MenuItem>
                  <MenuItem value={ascSort}>{ascSort}</MenuItem>
                  <MenuItem value={descSort}>{descSort}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item justify="center" spacing={3} xs={12} md={10}>
            {data.map((service) => (
              <Grid item key={data.service_id} xs={12} sm={6} md={4} lg={3}>
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
