import React from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

export default function login(props) {
  const { navigator: { pop }, url } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.info}>{`After login the user will be taken to: ${url}`}</Text>
      <TouchableHighlight style={styles.button} onPress={pop}>
        <Text style={styles.buttonText}>Magical login!</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
    fontSize: 20,
  }
});
