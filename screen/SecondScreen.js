import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider, observer } from "mobx-react";
import SecondScreenView from 'ReactNativeMobX/view/SecondScreenView';
import SecondScreenStore from 'ReactNativeMobX/mobx/stores/SecondScreenStore';

const secondScreenStore = new SecondScreenStore();

@observer
export default class SecondScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Second Screen',
  };

  render() {
    return (
      <Provider secondScreenStore={secondScreenStore}>
        <SecondScreenView/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});