/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React,{Component} from 'react';
 import { StyleSheet, View, Text, Image} from 'react-native'
 import { NavigationContainer} from '@react-navigation/native'
 import {createStackNavigator} from '@react-navigation/stack'
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
 import VideoScreen from './src/Video'
 import UploadScreen from './src/Upload'
 import ApplyScreen from './src/Apply'
 
 
 
 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 const tabBarIcon_func = (focused, name) => {
 let iconImagePath;
 
 if (name === 'Video'){
  iconImagePath = require('./src/assets/pics/video.png')
  } else if (name === 'Upload'){
    iconImagePath = require('./src/assets/pics/upload.png')
  } else if (name === 'Apply')
  {
    iconImagePath = require('./src/assets/pics/apply.png')
  }
   return (
     <Image
     style = {{
       width: focused ? 30 : 25,
       height: focused ? 30 : 25
     }}
     source = {iconImagePath}
     />
   )
 
 }
 
 class App extends Component {
   render() {
     return (
       <NavigationContainer>
         <Tab.Navigator
         initialRouteName = 'Video'
         tabBarOptions={{
           activeBackgroundColor : 'skyblue',
           activeTintColor : 'blue',
           inactiveTintColor : 'black',
           styles:{
             backgroundColor:'#c6cbef',
             
           },
           labelPosition: 'below-icon'
           
         }}
         screenOptions={({route}) => ({
           tabBarLabel: route.name,
           tabBarIcon: ({focused}) => (
             tabBarIcon_func(focused, route.name)
           )
         })}
         >
           <Tab.Screen name = 'Video' component={VideoScreen}/>
           <Tab.Screen name = 'Upload' component={UploadScreen}/>
           <Tab.Screen name = 'Apply' component={ApplyScreen}/>
 
         </Tab.Navigator>
       </NavigationContainer>
     )
   }
 }
   const styles = StyleSheet.create({
 
   });
 
   export default App;
 