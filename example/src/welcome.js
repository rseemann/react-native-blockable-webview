import React from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

export default function Welcome(props) {
  const { navigator: { push } } = props;

  return (
    <View style={styles.container}>
      { button('Navigation Free React Native Github', () => {
        push({ scene: 'free' })
      }) }
      { button('Controlled Navigation - For this - Github', () => {
        push({ scene: 'controlled' })
      }) }
    </View>
  );
}

function button(text, onPress) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
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
    backgroundColor: 'red',
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
  }
});
