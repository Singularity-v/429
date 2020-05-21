import * as React from 'react';
import { Text, View, Image,AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabView } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { SplashScreen } from 'expo';

import {CustomHeader,CustomDrawerContent} from './src'
import {ArcticScreen, ArcticScreenDetail,DesertScreen,DesertScreenDetail,RainforestScreen,RainforestScreenDetail} from './src/tab'
import {NotificationScreen} from './src/drawer'
import {RegisterScreen, LoginScreen} from './src/auth'
import {IMAGE} from './src/constant/Image'
import {Buttom} from './src/constant/Buttom'

/*function SafeArea () {
  return(
    <View style={{width:360,height:25}}></View>
  )
}*/

const PERSISTENCE_KEY = "NAVIGATION_STATE";

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
      <StackArctic.Screen name="Buttom" component={Buttom} options={navOptionHandler}/>
    </StackArctic.Navigator>
  )
}

const StackButttom = createStackNavigator();

function ButtomStack() {
  return(
    <StackButttom.Navigator initialRouteName="ArcticBackl">
      <StackButttom.Screen name="ArcticBack" component={ArcticScreenDetail} options={navOptionHandler}/>
      <StackButttom.Screen name="DesertDetai" component={DesertScreenDetail} options={navOptionHandler}/>
    </StackButttom.Navigator>
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
      //borderTopStartRadius:25,
      //borderTopEndRadius:25,
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
        return <Image source={iconName} style={{width:35,height:35,top:-10}}
        //resizeMode="contain"
        />;
      },
    })}

    >
      <Tab.Screen name="Arctic" component={ArcticScreen} />
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
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
  return (
    <NavigationContainer
    　initialState={initialNavigationState}
    　onStateChange={(state)=>
    　AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }
    >
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="ArcticDetail" component={ArcticScreenDetail} options={navOptionHandler}/>
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name="ArcticBack" component={ButtomStack} options={navOptionHandler}/>
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
  }
}