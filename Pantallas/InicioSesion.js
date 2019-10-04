import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground

} from 'react-native';
import MenuButton from '../components/MenuButton'

const {width: WIDTH } = Dimensions.get('window')

export default class InicioSesion extends React.Component {
    render() {
        return (
          <ImageBackground source={require('../assets/fondo.png')} style={styles.container}>
                <MenuButton navigation={this.props.navigation} />

                <Text style={styles.header}>Iniciar Sesion</Text>

                <TextInput 
                style={styles.textinput}
                    placeholder={"Nombre de Usuario"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid={'transparent'} />

                <TextInput 
                style={styles.textinput}
                placeholder={"Contraseña"}
                secureTextEntry={true}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid={'transparent'} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Entrar</Text>
                </TouchableOpacity>

                </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf:  'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth:  1,
    },
    textinput: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        marginHorizontal: 25      
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30 
    },
    

})