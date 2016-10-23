/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import BlockableWebView from 'react-native-blockable-webview';

export default class example extends Component {
  constructor(props) {
    super(props);

    this.onNavigationBlocked = this.onNavigationBlocked.bind(this);
  }

  onNavigationBlocked(request) {
    console.log(request);
  }

  render() {
    const source = { uri: 'https://github.com/facebook/react-native'};
    const policy = [{url: 'https://github.com/facebook/react-native/issues'}];

    return (
      <View style={styles.container}>
        <BlockableWebView style={styles.webview} source={source}
          navigationBlockingPolicies={policy}
          onNavigationBlocked={this.onNavigationBlocked}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  webview: {
    marginTop: 20,
    flex: 1,
  },
});
