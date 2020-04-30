import React,{Component} from 'react'
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import {IMAGE} from './constant/Image'
import {RVText} from './core'
export class CustomDrawerContent extends Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: "#273939"}}>
              <View style={{width:360,height:25}}></View>
              <View style={{height:180, justifyContent:"center", marginLeft:20,}}>
                <Image source={IMAGE.ICON_HEAD}
                style={{height:90,width:90,borderRadius:60,marginBottom:10}}
                />
                <Text style={styles.NameStyle}>Kanahei</Text>
              </View>
              <ScrollView >
                <TouchableOpacity
                  style={styles.BoxStyle}
                  onPress={() => this.props.navigation.navigate("MenuTab")}
                >
                  <Image style={styles.IconStyle}   source={IMAGE.ICON_HOME} />
                  <Text style={styles.TextStyle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.BoxStyle}
                  onPress={() => this.props.navigation.navigate("Notifications")}
                >
                  <Image style={styles.IconStyle}   source={IMAGE.ICON_LIKE} />
                  <Text style={styles.TextStyle}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.BoxStyle}
                  onPress={() => this.props.navigation.navigate("Notifications")}
                >
                  <Image style={styles.IconStyle}   source={IMAGE.ICON_TAG} />
                  <Text style={styles.TextStyle}>Tag</Text>
                </TouchableOpacity>
              </ScrollView>
              <View style={{paddingBottom:20}}>
                <TouchableOpacity
                  style={styles.BoxStyle}
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <Image style={styles.IconStyle}   source={IMAGE.ICON_SETTING} />
                    <Text style={styles.TextStyle}>Setting</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.BoxStyle}
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <Image style={styles.IconStyle}  source={IMAGE.ICON_LOGOUT} />
                    <Text style={styles.TextStyle}>Logout</Text>
                  </TouchableOpacity>
                </View>
            </View>
          )
    }
}

const styles = StyleSheet.create({
  NameStyle: {
    color:"#93AB98",
    fontSize: 20,
    fontWeight:"bold",
  },
  BoxStyle: {
    marginLeft:10,
    flexDirection:"row",
    alignItems:"center"
  },
  IconStyle: {
    width:40,
    height:40,
    marginRight:20,
  },
  TextStyle:{
    color:"#F1DACC",
    fontSize: 16,
  }
});