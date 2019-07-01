import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

import MenuButton from '../components/MenuButton'

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
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        <MenuButton navigation={this.props.navigation} />
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Codigo de tipo ${type} y dirección ${data} fue scanneado!`);
  };
}