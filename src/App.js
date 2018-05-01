/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import styles from './Styles';

import { Card, ListItem, Button, Avatar, FormLabel, FormInput } from 'react-native-elements'

class WelcomeScreen extends Component {
  render() {
    return (
      <Text>Hello</Text>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg1.jpg')} style={styles.appBackground}>
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
        </ImageBackground>
      </View>
    );
  }
}
