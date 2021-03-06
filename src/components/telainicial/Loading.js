import React from 'react';
import { ActivityIndicator, Image, StatusBar, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import { imagemLogo, imagemLogoBR, logoProEpi, logoUnB } from '../../imgs/imageConst';
import LinearGradient from 'react-native-linear-gradient';
import translate from '../../../locales/i18n';
import { scale } from '../../utils/scallingUtils';
import {API_URL} from 'react-native-dotenv';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    this.state = {
      userEmail: null,
      userPwd: null
    }
  }

  getInfo = async () => { // Get user info
    const userEmail = await RNSecureStorage.get('userEmail');
    const userPwd = await RNSecureStorage.get('userPwd');
    this.setState({ userEmail, userPwd });
  }

  _logoutApp = async () => {
    AsyncStorage.removeItem('userID');
    AsyncStorage.removeItem('userName');
    AsyncStorage.removeItem('userSelected');
    AsyncStorage.removeItem('avatarSelected');
    AsyncStorage.removeItem('householdID');

    RNSecureStorage.exists('userToken').then((res) => {
      (res) ? RNSecureStorage.remove('userToken') : false;
    });
    RNSecureStorage.exists('userEmail').then((res) => {
      (res) ? RNSecureStorage.remove('userEmail') : false;
    });
    RNSecureStorage.exists('userPwd').then((res) => {
      (res) ? RNSecureStorage.remove('userPwd') : false;
    });
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const UserID = await AsyncStorage.getItem('userID');

    if (UserID !== null) {
      this.getInfo();
      setTimeout(() => {
        this.verifyUserToken();
      }, 1500);
    } else {
      this._logoutApp();
      this.props.navigation.navigate('Cadastro');
    }
  };

  verifyUserToken = async () => {
    console.log(this.state.userEmail);

    return fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user:
        {
          email: this.state.userEmail,
          password: this.state.userPwd
        }
      })
    })
      .then((response) => {
        if (response.status == 200) {
          RNSecureStorage.set('userToken', response.headers.map.authorization, {accessible: ACCESSIBLE.WHEN_UNLOCKED});
          this.props.navigation.navigate('BottomMenu');
        }
        else if (response.status == 401) {
          this._logoutApp();
          this.props.navigation.navigate('Cadastro');
        }
        else {
          this.props.navigation.navigate('Cadastro');
        }
      })
  };

  // Render any loading content that you like here
  render() {
    const statusColor = (<StatusBar backgroundColor='#348EAC' barStyle="light-content" />)

    const logoBR = (
      <Image style={styles.imageLogo} source={imagemLogoBR} />
    )

    const logoES = (
      <Image style={styles.imageLogo} source={imagemLogo} />
    )

    let imageType;
    if (translate("initialscreen.title") === "Guardianes de la Salud") {
      imageType = logoES
    }
    else {
      imageType = logoBR
    }

    return (
      <LinearGradient style={styles.container} colors={['#348EAC', '#013444']}>
        {statusColor}
        {imageType}
        <View style={styles.viewLogos}>
          <View style={styles.viewHalfLogos}><Image style={styles.imageHalfLogo} source={logoProEpi} /></View>
          <View style={styles.viewHalfLogos}><Image style={styles.imageHalfLogo} source={logoUnB} /></View>
        </View>
        <ActivityIndicator size="large" color="#ffffff" />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: scale(200),
    resizeMode: 'contain',
    marginBottom: 20,
  },
  viewLogos: {
    flexDirection: "row",
    width: "70%",
    height: scale(110),
    //borderColor: "red",
    //borderWidth: 1,
  },
  viewHalfLogos: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%",
    //borderColor: "green",
    //borderWidth: 1,
  },
  imageHalfLogo: {
    width: scale(80),
    resizeMode: 'contain',
  },
});

export default AuthLoadingScreen;