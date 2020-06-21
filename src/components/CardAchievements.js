import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

function CardAchievements() {
  return ( 
    <CardGrid>
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://pllsll.com/assets/tmp/storage/3f/cc/61/06217582ffb.jpg')}/>}
          caption = "Пройти 10000 шагов"
          after = "50 дублонов"
          >
          Магнит
      </RichCell> 
      </Card>
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://limg.imgsmail.ru/splash/v/i/share-fp-a2954bf3df.png')}/>}
          caption = "Получи 10гб свободного диска в облаке"
          after = "20 дублонов"
          >
          Маил
      </RichCell> 
      </Card> 
      <Card size = "l" mode = "secondary" style={{backgroundColor: 'rgba(194, 16, 64, .4)'}}>
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://static2.agro24.ru/company/28/image/png/245608c8f5e5dbd81bbea6ffdd3e8125.png')}/>}
          caption = "Найди и отсканиру код в одном из наших магазинов"
          after = "0 дублонов"
          >
          Лента
      </RichCell> 
      </Card>        
    </CardGrid>
    );
  }

  export default CardAchievements;