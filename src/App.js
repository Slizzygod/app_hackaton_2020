import React from 'react';
import bridge from '@vkontakte/vk-bridge'
import { Epic, Tabbar, TabbarItem, View, Panel, PanelHeader, ConfigProvider, Text, Div } from '@vkontakte/vkui';

import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28MagicWandOutline from '@vkontakte/icons/dist/28/magic_wand_outline';
import Icon28StatisticsOutline from '@vkontakte/icons/dist/28/statistics_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28CoinsOutline from '@vkontakte/icons/dist/28/coins_outline';
import CardEvent from './components/CardEvent';
import CardShop from './components/CardShop';
import CardAchievements from './components/CardAchievements';
import CardRating from './components/CardRating';
import ApiNative from './components/ApiNative';

class App extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'home'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	render () {
		
	  return (
		<Epic activeStory={this.state.activeStory} tabbar={
		  <Tabbar>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'home'}
			  data-story="home"
			  text="Главная"
			><Icon28HomeOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'achievements'}
			  data-story="achievements"
			  label="12"
			  text="Достижения"
			><Icon28MagicWandOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'statistics'}
			  data-story="statistics"
			  text="Рейтинг"
			><Icon28StatisticsOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'market'}
			  data-story="market"
			  text="Магазин"
			><Icon28MarketOutline /></TabbarItem>
		  </Tabbar>
		}>
		  <View id="home" activePanel="home">
			<Panel id="home">
			<PanelHeader separator={false}
              right={ <Text weight="regular" style={{display:"block"}}><span style={{display:"inline-block",fontSize:"25px"}}>3000</span> <div style={{display:"inline-block",verticalAlign:"bottom"}}><Icon28CoinsOutline /></div></Text> }
            >
				Главная
            </PanelHeader>
			  <ApiNative />
			  <CardEvent />
			</Panel>
		  </View>
		  <View id="achievements" activePanel="achievements">
			<Panel id="achievements">
			<PanelHeader separator={false}
              right={ <Text weight="regular" style={{display:"block"}}><span style={{display:"inline-block",fontSize:"25px"}}>3000</span> <div style={{display:"inline-block",verticalAlign:"bottom"}}><Icon28CoinsOutline /></div></Text> }
            >
				Достижения
            </PanelHeader>
			  <CardAchievements />
			</Panel>
		  </View>
		  <View id="statistics" activePanel="statistics">
			<Panel id="statistics">
			<PanelHeader separator={false}
              right={ <Text weight="regular" style={{display:"block"}}><span style={{display:"inline-block",fontSize:"25px"}}>3000</span> <div style={{display:"inline-block",verticalAlign:"bottom"}}><Icon28CoinsOutline /></div></Text> }
            >
				Рейтинг
            </PanelHeader>
			  <CardRating />
			</Panel>
		  </View>
		  <View id="market" activePanel="market">
			<Panel id="market">
			  <PanelHeader separator={false}
              right={ <Text weight="regular" style={{display:"block"}}><span style={{display:"inline-block",fontSize:"25px"}}>3000</span> <div style={{display:"inline-block",verticalAlign:"bottom"}}><Icon28CoinsOutline /></div></Text> }
            >
				Магазин
            </PanelHeader>
			  <CardShop />
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }

export default App;