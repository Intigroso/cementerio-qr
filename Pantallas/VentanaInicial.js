import React from 'react';
import { StyleSheet, Text, View, Button, DrawerLayoutAndroid, ToolbarAndroid } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuButton from '../components/MenuButton';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class VentanaInicial extends React.Component {
    state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
  	const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Se solicita permiso para la camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>Acceso a la camara denegado</Text>;
    }
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Localización</Text>
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
