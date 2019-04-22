import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry, Image} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
export default class Bananas extends React.Component{
  render() {
    let pic = { 
      uri: 'https://images.assettype.com/swarajya/2019-03/61dd905b-bcb6-4410-b486-28a3b12636f3/Hyderabad_metro.jpg'
  };
  let pic2 = {
    uri: 'https://images.assettype.com/swarajya/2018-11/0d4ba179-27fa-4601-8e83-335f6d3ffbb1/1965066_719167678128062_1074291987_n.jpg'
  };
  return (
    <Image source = {pic} style ={{ justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400}}/>
    <Image source = {pic2} style = {{width: 400,
height: 400}}/>
  );
  }
}

AppRegistry.registerComponent('MyReactNative',() => Bananas);
// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([
//         require('./assets/images/robot-dev.png'),
//         require('./assets/images/robot-prod.png'),
//       ]),
//       Font.loadAsync({
//         // This is the font that we are using for our tab bar
//         ...Icon.Ionicons.font,
//         // We include SpaceMono because we use it in HomeScreen.js. Feel free
//         // to remove this if you are not using it in your app
//         'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//       }),
//     ]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
