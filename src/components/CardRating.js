import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

function CardRating() {
  return ( 
    <CardGrid >
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://thispersondoesnotexist.com/image')}/>}
          text = "Тарас Иванов"
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
        <Avatar size = {72} src={('https://thispersondoesnotexist.com/image')}/>}
          text = "Иванова Лиза"
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
        <Avatar size = {72} src={('https://thispersondoesnotexist.com/image')}/>}
          text = "Иванов Данила"
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
        <Avatar size = {72} src={('https://thispersondoesnotexist.com/image')}/>}
          text = "Шымов Юлия"
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
        <Avatar size = {72} src={('https://thispersondoesnotexist.com/image')}/>}
          text = "Кузнецов Киря"
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