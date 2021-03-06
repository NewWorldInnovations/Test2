/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import styles from './src/Styles';

import { Card, ListItem, Button, Avatar, FormLabel, FormInput } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={require('./src/assets/images/bg1.jpg')} style={styles.appBackground}> */}
          <Card containerStyle={styles.loginPageContainer}>
            <View style={styles.login}>
              <Text style={styles.header}>
                REDEEM
              </Text>
              <View >
                <FormLabel containerStyle={styles.loginForm}>Username</FormLabel>
                <FormInput containerStyle={styles.loginForm}/>
                <FormLabel containerStyle={styles.loginForm}>Password</FormLabel>
                <FormInput containerStyle={styles.loginForm}/>
              </View>
              <Button
                style={styles.loginButton}
                backgroundColor='red'
                buttonStyle={{borderRadius: 10, justifyContent: 'center'}}
                title='SIGN IN'
              />
            </View>
          </Card>
        {/* </ImageBackground> */}
      </View>
    );
  }
}
AppRegistry.registerComponent('ReactCalculator', () => App);
