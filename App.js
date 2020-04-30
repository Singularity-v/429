import * as React from 'react';
import { Text, View, Image,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabView } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

import {CustomHeader,CustomDrawerContent} from './src'
import {ArcticScreen, ArcticScreenDetail,DesertScreen,DesertScreenDetail,RainforestScreen,RainforestScreenDetail} from './src/tab'
import {NotificationScreen} from './src/drawer'
import {RegisterScreen, LoginScreen} from './src/auth'
import {IMAGE} from './src/constant/Image'

/*function SafeArea () {
  return(
    <View style={{width:360,height:25}}></View>
  )
}*/


const Tab = createMaterialBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown:false
})

const StackArctic = createStackNavigator();

function ArcticStack() {
  return(
    <StackArctic.Navigator initialRouteName="Arctic">
      <StackArctic.Screen name="Arctic" component={ArcticScreen} options={navOptionHandler}/>
      <StackArctic.Screen name="ArcticDetail" component={ArcticScreenDetail} options={navOptionHandler}/>
    </StackArctic.Navigator>
  )
}

const StackDesert = createStackNavigator();


function DesertStack() {
  return(
    <StackDesert.Navigator initialRouteName="Desert">
      <StackDesert.Screen name="Desert" component={DesertScreen} options={navOptionHandler}/>
      <StackDesert.Screen name="DesertDetail" component={DesertScreenDetail} options={navOptionHandler}/>
    </StackDesert.Navigator>
  )
}

const StackRainforest = createStackNavigator();


function RainforestStack() {
  return(
    <StackRainforest.Navigator initialRouteName="Rainforest">
      <StackRainforest.Screen name="Rainforest" component={RainforestScreen} options={navOptionHandler}/>
      <StackRainforest.Screen name="RainforestDetail" component={RainforestScreenDetail} options={navOptionHandler}/>
    </StackRainforest.Navigator>
  )
}

function TabNavigator() {
  return(
    <Tab.Navigator
    barStyle={{ 
      backgroundColor:'#273939',
      borderTopStartRadius:25,
      borderTopEndRadius:25,
      margin:0,
      height:60,
      justifyContent:"space-evenly"
    }}
    activeTintColor= 'tomato'
    inactiveTintColor='gray'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Arctic') {
          iconName = focused
            ? IMAGE.ICON_A
            : IMAGE.ICON_ARCTIC_CHANGE
        } else if (route.name === 'Desert') {
          iconName = focused ? 
          IMAGE.ICON_D
          : IMAGE.IMAGE_DESERT_CHANDE;
        }
        else if (route.name === 'Rainforest') {
          iconName = focused ? 
         IMAGE.ICON_R
          : IMAGE.IMAGE_RAINFOREST_CHANDE;
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:40,height:40,top:-10}}
        //resizeMode="contain"
        />;
      },
    })}

    >
      <Tab.Screen name="Arctic" component={ArcticStack} />
      <Tab.Screen name="Desert" component={DesertStack} />
      <Tab.Screen name="Rainforest" component={RainforestStack} />
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