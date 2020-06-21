import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

function CardRating() {
  return ( 
    <CardGrid >
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://sun1-90.userapi.com/4Vs_tQxNFmbfsCu_Fm0_DesTY6URSgqiJRBkTg/3Aq6E84R73E.jpg')}/>}
          text = "Михаил Козлов"
          caption = "Легаси"
          after = "5000 дублонов"
          actions = {
            <React.Fragment ><Button > Вступить в связь </Button></React.Fragment>
          } 
          >
      </RichCell> 
      </Card> 
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://sun9-22.userapi.com/c854532/v854532193/498b/x4Q5jG76y34.jpg')}/>}
          text = "Александр Пирожников"
          caption = "Опытный боец"
          after = "2100 дублонов"
          actions = {
            <React.Fragment ><Button > Вступить в связь </Button></React.Fragment>
          } 
          >
      </RichCell> 
      </Card>  
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://sun9-21.userapi.com/c630216/v630216429/1d8dc/awutUzNGrCA.jpg')}/>}
          text = "Александр Павлов"
          caption = "Новичок"
          after = "1200 дублонов"
          actions = {
            <React.Fragment ><Button > Вступить в связь </Button></React.Fragment>
          } 
          >
      </RichCell> 
      </Card>
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://sun9-41.userapi.com/c858336/v858336107/10aaca/Y0FWWQmjJ88.jpg')}/>}
          text = "Владислав Захаров"
          caption = "Опытный боец"
          after = "500 дублонов"
          actions = {
            <React.Fragment ><Button > Вступить в связь </Button></React.Fragment>
          } 
          >
      </RichCell> 
      </Card>
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://sun1-85.userapi.com/vn-4b8D3PvLkx1lTnrxFaB4fV6GVAd3SZS--8w/twmsYU7nrII.jpg')}/>}
          text = "Тимур Токарев"
          caption = "Новичок"
          after = "500 дублонов"
          actions = {
            <React.Fragment ><Button > Вступить в связь </Button></React.Fragment>
          } 
          >
      </RichCell> 
      </Card>          
    </CardGrid>
    );
  }

  export default CardRating;