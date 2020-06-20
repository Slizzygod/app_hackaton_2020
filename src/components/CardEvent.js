import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid, InfoRow, Progress } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

function CardEvent() {
  return ( 
    <CardGrid >
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://pllsll.com/assets/tmp/storage/3f/cc/61/06217582ffb.jpg')}/>}
          // text = "Задание от Магнита"
          caption = "Найти qr-код в Вашем городе"
          after = "14:35:02" 
          >
          Магнит
      </RichCell> 
        <Progress value={40} style={{width: '95%', margin: '0 auto'}}/>
      </Card>       
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2019/06/27172619/3_adidas_originals.jpg')}/>}
          // text = "Задание от Adidas"
          caption = "Пройти 10000 шагов"
          after = "50 баллов"
          actions = {
            <React.Fragment ><Button > Давай! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Adidas
      </RichCell> 
      </Card>          
    </CardGrid>
    );
  }

  export default CardEvent;