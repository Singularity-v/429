import * as React from 'react';
import { Text, View, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

import {CustomHeader,CustomDrawerContent} from './src'
import {HomeScreen, HomeScreenDetail,SettingsScreen,SettingsScreenDetail} from './src/tab'
import {NotificationScreen} from './src/drawer'
import {RegisterScreen, LoginScreen} from './src/auth'
import {IMAGE} from './src/constant/Image'

/*function SafeArea () {
  return(
    <View style={{width:360,height:25}}></View>
  )
}*/


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown:false
})

const StackHome = createStackNavigator();

function HomeStack() {
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();


function SettingStack() {
  return(
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}

function TabNavigator() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? IMAGE.ICON_A
            : IMAGE.ICON_ARCTIC_CHANGE
        } else if (route.name === 'Settings') {
          iconName = focused ? 
          IMAGE.ICON_D
          : IMAGE.IMAGE_DESERT_CHANDE;
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:40,height:40}}
        resizeMode="contain"/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return(
    <Drawer.Navigator initialRouteName="MenuTab"
    drawerContent={() => <CustomDrawerContent navigation={navigation}/>}
    >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}