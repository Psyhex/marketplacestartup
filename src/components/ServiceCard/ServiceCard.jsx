import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './ServiceCard.css';
import { Link } from 'react-router-dom';
import { SERVICE } from '../../constants/routes';

function ServiceCard({ service }) {
  const priceTag = '€/Day';
  const location = 'Location - ';
  return (
    <Link to={SERVICE + service.service_id} className="Link">
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
      </Card>
    </Link>
  );
}

export default ServiceCard;
