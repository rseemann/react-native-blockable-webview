import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import BlockableWebView from 'react-native-blockable-webview';

export default class Controlled extends Component {
  constructor(props) {
    super(props);

    this.onNavigationBlocked = this.onNavigationBlocked.bind(this);
  }

  onNavigationBlocked({ nativeEvent }) {
    this.props.navigator.push({ scene: 'login' });
  }

  render() {
    const source = { uri: 'https://github.com/rseemann/react-native-blockable-webview'};
    // const policy = [{url: `${source.uri}/issues`}];
    // const policy = [{url: 'https://github.com/login'}];
    const policy = [{url: 'https://github.com/login.*'}];

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
  loading: {
    textAlign: 'center',
  },
  webview: {
    marginTop: 20,
    flex: 1,
  },
});
