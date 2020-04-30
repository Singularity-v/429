import React,{Component} from 'react'
import { Text, View, Image,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
import {IMAGE} from '../constant/Image'



export class LoginScreen extends Component {
    render() {
        return (
          <View style={{ flex: 1 }}>
            <ImageBackground 
            source={IMAGE.ICON_MEOWMO} 
            style={{
              zIndex: 0,
              flex: 1,
              resizeMode: "cover",
              width: 360,
              height: 640}} >
              <View style={{ flex: 2 }}></View>
              <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity
                  style={{marginTop:20,}}
                  onPress={() => this.props.navigation.navigate("HomeApp")}
                >
                  <View style={styles.TextBoxStyle}>
                    <Text style={styles.TextStyle}>GO!</Text>
                  </View>
                </TouchableOpacity>
              </View>
              </ImageBackground>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  TextBoxStyle: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFFFFF50",
    width:100,
    height:40,
    zIndex:1
  },
  TextStyle:{
    color:"#fff",
    fontSize: 20,
    fontWeight:"bold",
    zIndex:4
  }
});