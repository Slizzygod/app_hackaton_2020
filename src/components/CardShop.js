import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid, Panel, PanelHeader, View, Banner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/style.css';
function CardShop() {
  return ( 
<View activePanel="card">
  <Panel id="card">
    <CardGrid>
    <Banner
      before={<Avatar size={96} mode="image" src="https://vangogh.teespring.com/v3/image/fbWGNqYJKN6vIdpDoUBkJT2nzxs/480/560.jpg" />}
      header="Худи от компании"
      subheader="14:00:13"
      text="2000 баллов"
      actions={<Button stretched size="m">Забрать свое</Button>}
    />
        <Card size="m">
            <div class="merch__card" style={{ height: 96 }} >
              <img src="https://vangogh.teespring.com/v3/image/fbWGNqYJKN6vIdpDoUBkJT2nzxs/480/560.jpg" />
              <p>1000 баллов</p>
            </div>
            <Button style={{width: '100%'}} stretched>Забрать свое</Button>
        </Card>
        <Card size="m">
            <div class="merch__card" style={{ height: 96 }} >
              <img src="https://w7.pngwing.com/pngs/1000/777/png-transparent-t-shirt-adidas-hoodie-los-angeles-lakers-tees-merch-tshirt-active-shirt-adidas.png" />
              <p>1000 баллов</p>
            </div>
            <Button style={{width: '100%'}} stretched>Забрать свое</Button>
        </Card>
    </CardGrid>
    <CardGrid>
    <Card size="m">
            <div class="merch__card" style={{ height: 96 }} >
              <img src="https://www.sostav.ru/images/news/2019/07/25/ziex7vlp.jpg" />
              <p>1000 баллов</p>
            </div>
            <Button style={{width: '100%'}} stretched>Забрать свое</Button>
        </Card>
        <Card size="m">
            <div class="merch__card" style={{ height: 96 }} >
              <img src="https://vangogh.teespring.com/v3/image/fbWGNqYJKN6vIdpDoUBkJT2nzxs/480/560.jpg" />
              <p>1000 баллов</p>
            </div>
            <Button style={{width: '100%'}} stretched>Забрать свое</Button>
        </Card>
    </CardGrid>
  </Panel>
</View>
    );
  }

  export default CardShop;