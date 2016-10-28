import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import BlockableWebView from 'react-native-blockable-webview';

export default class Free extends Component {
  render() {
    const source = { uri: 'https://github.com/facebook/react-native'};
    return (
      <View style={styles.container}>
        <BlockableWebView style={styles.webview} source={source}/>
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
  loading: {
    textAlign: 'center',
  },
  webview: {
    marginTop: 20,
    flex: 1,
  },
});
