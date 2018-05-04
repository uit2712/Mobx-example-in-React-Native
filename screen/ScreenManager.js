import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import SecondScreen from './SecondScreen';

const Screens = StackNavigator({
  MainScreen: {screen: MainScreen},
  SecondScreen: {screen: SecondScreen},
});

export default Screens;