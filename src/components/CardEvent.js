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
          caption = "Пройти 10000 шагов"
          after = "50 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Adidas
      </RichCell> 
      </Card> 
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://oblaka-tc.ru/assets/cache_image/template/img/shops/2/5_528x434_8ea.jpg')}/>}
          caption = "Обьединиться в сообщество"
          after = "80 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Пятерочка
      </RichCell> 
      </Card> 
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://foodcity.ru/storage/companies/February2019/5duSepVQUTbgbZ9xBAKy.png')}/>}
          caption = "Зарегистрируйся в мобильном приложении банка"
          after = "10 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Газпромбанк
      </RichCell> 
      </Card> 
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://lh3.googleusercontent.com/proxy/Ye6N4xuWDJ11WfpD_b-HFOBN3DNmvkhib4pX3Oz9fEfr2gmTk6YvJLEIBDmOdVuUGUbV9yOPNGBsSiC1X13jPW0baq8ai-c')}/>}
          caption = "Автоматизируй бизнес-процессы"
          after = "100 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Газпром
      </RichCell> 
      </Card>
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://limg.imgsmail.ru/splash/v/i/share-fp-a2954bf3df.png')}/>}
          caption = "Подай заявку на оплачеваемую стажирувку"
          after = "100 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Маил
      </RichCell> 
      </Card>
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://i.otzovik.com/objects/b/560000/550033.png')}/>}
          caption = "Участвуй в бесплатном вебинаре"
          after = "50 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Нетология
      </RichCell> 
      </Card>  
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72} src={('https://fondvoskresenie.ru/upload/site182/document_news/FzE3sG6a7G.jpg')}/>}
          caption = "Оплати следующую заправку по бонусной карте"
          after = "60 дублонов"
          actions = {
            <React.Fragment ><Button > Действуй! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Лукойл
      </RichCell> 
      </Card>         
    </CardGrid>
    );
  }

  export default CardEvent;