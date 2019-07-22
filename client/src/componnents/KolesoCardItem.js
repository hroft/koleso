import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './KolesoCardItem.css'
const url_img = "https://tn1.ru/img/tyres/";
const KolesoCardItem = (props) => {
    return (
        <div className="main_card_style">
          <Card>
            <CardImg top width="100%" src={url_img+props.photo} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
              <CardSubtitle>{props.brand}</CardSubtitle>
              <CardSubtitle>{props.disk}</CardSubtitle>
              <CardText>{props.feature}</CardText>        
              <Button color="primary">Подробне</Button>
            </CardBody>
          </Card>
        </div>
      );
    };
    export default KolesoCardItem;