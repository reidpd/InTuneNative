import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import LandingPage from '../../screens/LandingPage.js'

const tabOptions = {
  tabBarOptions: {
    inactiveBackgroundColor: '#F8EEE7',
    activeBackgroundColor: '#F4DECB',
    activeTintColor: '#373737'
  }
};

const MainScreenNavigator = createBottomTabNavigator({
  home: {
    screen: LandingPage,
  }
}, tabOptions);

export const MainRouter =  createStackNavigator({
  Home: { screen: MainScreenNavigator }
}, { mode: 'modal' });
