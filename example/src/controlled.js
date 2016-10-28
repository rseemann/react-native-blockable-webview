import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
} from 'react-native';

import BlockableWebView from 'react-native-blockable-webview';

const POLICY = [
  {
    // blocks navigation to login page
    url: 'https://github.com/login.*',
  }, {
    // blocks any navigation to url that doesn't contain github.com
    url: '^((?!(github.com)).)*$',
  }
];

export default class Controlled extends Component {
  constructor(props) {
    super(props);

    this.onNavigationBlocked = this.onNavigationBlocked.bind(this);
  }

  onNavigationBlocked({ nativeEvent }) {
    const { url } = nativeEvent;

    const hostname = new URL(url).hostname;

    if (hostname === 'github.com') {
      this.props.navigator.push({ scene: 'login', url });
      return;
    }

    Linking.openURL(url);
  }

  render() {
    const source = { uri: 'https://github.com/rseemann/react-native-blockable-webview'};

    return (
      <View style={styles.container}>
        <BlockableWebView style={styles.webview} source={source}
          navigationBlockingPolicies={POLICY}
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
