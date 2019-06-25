import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import VentanaInicial from '../Pantallas/VentanaInicial';
import VentanasUnion from '../Pantallas/VentanasUnion';
import VentanaConfiguracion from '../Pantallas/VentanaConfiguracion';

import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: VentanaInicial
		},
		Links: {
			screen: VentanasUnion
		},
		Settings: {
			screen: VentanaConfiguracion
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);