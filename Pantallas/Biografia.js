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
          <Text style={styles.text}>Ricardo Ford</Text>
          <Text style={styles.text2}>Mama cortaste toda la lozzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
    text: {
    fontSize: 25,
    paddingTop: 100,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
    text2: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 5,
    paddingRight: 5
  }
});