import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class VentanasUnion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Calendario</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
