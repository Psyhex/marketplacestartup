import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const priceTag = "€/Day";
  const location = "Location - ";
  return (
    <Card className="ServiceCard">
      <CardMedia
        className="ServiceCardMedia"
        image={service.service_img}
        title={service.service_title}
      />
      <CardContent>
        <div className="ServiceCardContent">
          <Typography variant="body1" gutterBottom>
            {service.service_title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {service.service_price}
            {priceTag}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {location}
          {service.service_location}
        </Typography>
      </CardContent>
      <CardActions className="ServiceCardActions" disableSpacing>
        <Button variant="contained" className="ServiceCardButton">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

export default ServiceCard;
