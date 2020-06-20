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
        //   text = "Задание от Магнита"
          caption = "Пройти 10000 шагов"
          after = "50 баллов"
          >
          Магнит
      </RichCell> 
      </Card>         
    </CardGrid>
    );
  }

  export default CardAchievements;