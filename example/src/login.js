import React from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

export default function login(props) {
  const onPress = props.navigator.pop;

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={onPress}>
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
  }
});
