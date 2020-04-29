import React,{Component} from 'react'
import { Text, View, Image,TouchableOpacity,ScrollView} from 'react-native';
import {IMAGE} from './constant/Image'


export class CustomDrawerContent extends Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: "#273939"}}>
              
              <View style={{height:150, alignItems:"center", justifyContent:"center"}}>
                <Image source={IMAGE.ICON_HEAD}
                style={{height:120,width:120,borderRadius:60}}
                />
              </View>
              <ScrollView style={{marginLeft:5}}>
                <TouchableOpacity
                  style={{marginTop:20}}
                  onPress={() => this.props.navigation.navigate("MenuTab")}
                >
                  <Text style={{color:"#F1DACC"}}>Menu Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20}}
                  onPress={() => this.props.navigation.navigate("Notifications")}
                >
                  <Text style={{color:"#F1DACC"}}>NotificationsScreen</Text>
                </TouchableOpacity>
              </ScrollView>
              <TouchableOpacity
                  style={{marginTop:20,marginLeft:5}}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={{color:"#F1DACC"}}>Logout</Text>
                </TouchableOpacity>
            </View>
          )
    }
}