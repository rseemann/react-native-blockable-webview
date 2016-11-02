# react-native-blockable-webview

A <BlockableWebView/> component for React Native that extends [WebView](https://facebook.github.io/react-native/docs/webview.html) and allow the blocking of navigation to urls based on rules passed via `props`. This allows the loading control to be done from the JavaScript side without having to rely on some possible faulty methods, such as mentioned [here](https://github.com/facebook/react-native/pull/6478).

## Usage

`BlockableWebView` component receives all the WebView props plus two more:

- `navigationBlockingPolicies` which is an array with the policies that will be used to block the navigation. A policy is an object that contains [Regular Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions) that will be used to check the state - `currentURL`, `url` and `navigationType` (iOS only).
- `onNavigationBlocked` which is the callback function that will be called once at least one of the policies is fulfilled. It receives the `NativeEvent` just at any other WebView loading callback.

For further uses please check the example project.

```js
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
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
      /* this would only happen for requests to the login url. We can take the user to a RN view that will handle that, for example */
      return;
    }

    // Url isn't inside github.com, open it in the browser
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
  webview: {
    marginTop: 20,
    flex: 1,
  },
});

```
