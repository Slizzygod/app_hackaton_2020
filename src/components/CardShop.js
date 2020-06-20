import React from 'react';
import ReactDOM from 'react-dom';
import { Group, Button, Avatar, RichCell, Card, CardGrid, Panel, PanelHeader, View } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

function CardShop() {
  return ( 
<View activePanel="card">
  <Panel id="card">
    <CardGrid>
        <Card size="m">
            <div style={{ height: 96 }} />
        </Card>
        <Card size="m">
            <div style={{ height: 96 }} />
        </Card>
    </CardGrid>
    <CardGrid>
        <Card size="m">
            <div style={{ height: 96 }} />
        </Card>
        <Card size="m">
            <div style={{ height: 96 }} />
        </Card>
    </CardGrid>
  </Panel>
</View>
    );
  }

  export default CardShop;