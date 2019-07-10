import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerNavigator from '../Navegacion/DrawerNavigator'

import MenuButton from '../components/MenuButton'

export default class VentanasUnion extends React.Component {
  constructor (props){
    super (props);
      console.log('Hola');
  }

  test(){
    fetch('http://192.168.0.214:3000/personas')
      .then(response => response.json())
      .then(personas => console.warn(personas))
  }

  render() {
    return (
      <View style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});