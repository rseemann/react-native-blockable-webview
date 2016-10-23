/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, createElement } from 'react';
import {
  Navigator,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import BlockableWebView from 'react-native-blockable-webview';

import Welcome from './welcome';
import Controlled from './controlled';
import Free from './free';
import Login from './login';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    console.log(route);

    switch (route.scene) {
      case 'welcome':
        return <Welcome navigator={navigator} />;
      case 'controlled':
        return <Controlled navigator={navigator}/>;
      case 'free':
        return <Free />;
      case 'login':
        return <Login navigator={navigator}/>;
      default:

    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ scene: 'welcome' }}
        renderScene={this.renderScene}
      />
    );
  }
}
