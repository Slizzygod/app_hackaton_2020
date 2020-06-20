import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

function CardRating() {
  return ( 
    <CardGrid >
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://daily.scm.com.ua/wp-content/uploads/2017/05/Dmitriy-Vakulyuk.jpg')}/>}
          text = "Тарас Иванов"
          caption = "Легаси"
          after = "5000 баллов"
          actions = {
            <React.Fragment ><Button > Вступить в связь </Button></React.Fragment>
          } 
          >
      </RichCell> 
      </Card> 
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://sun9-8.userapi.com/c836230/v836230430/26df5/e-_MnMhI5Qk.jpg?ava=1')}/>}
          text = "Иванова Лиза"
          caption = "Салага"
          after = "2100 баллов"
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