import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appBackground: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  loginPageContainer: {
    marginTop: 250,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginForm: {
    alignItems: 'center',
  },
  loginButton: {
    width: 250,
    borderRadius: 10,
    paddingTop: 10,
  },
  username: {
    textAlign: 'center',
  },
  password: {
    textAlign: 'center',
  }
});
