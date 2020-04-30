import React,{Component} from 'react'
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity} from 'react-native';
import {IMAGE} from '../constant/Image'
import {Buttom} from "../constant/Buttom"

const image= {uri:"https://raw.githubusercontent.com/shakuneko/picture2/master/Grimsey.png"}
export class ArcticScreenDetail extends Component {
    render() {
        return (
          <View style={{ flex: 1 }}>
            <View style={{width:360,height:25}}></View>
            <TouchableOpacity 
              style ={{flexDirection:"row", alignItems:"center"}}
              onPress={() => this.props.navigation.navigate("Arctic")}
            >
                <Image style={{width:30,height:30,marginLeft:5}}
                source={IMAGE.ICON_BACK_ARROW}
                resizeMode="contain"
                />
              </TouchableOpacity> 
              <View style={styles.container}>
                <ImageBackground source={image} style={styles.image} >
               
                  <View style={styles.title2}> 
                  
                  <Text style={styles.title}>Grimsey</Text>
                  </View>
                  <View style={{flex:1}}/>
                  <View style={styles.title3}>
                    <Text style={{fontSize:12,color:"#fff"}}>Grimsey Island - far away in the north: Home of one hundred people - and one million seabirds. The island stands alone far out on the horizon, a blue cliff, surrounded by the wide Arctic Ocean, about 40 km off the north coast of Iceland; it is about 5 square kilometers in area.</Text>
                  </View>
                  <Buttom/>
                </ImageBackground>
              </View>
          </View>
          );
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:"column", 
      justifyContent:"center",
      alignItems:"center"  
  },
  image:{
      flex:1,
      resizeMode:"cover",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"  
  },
  title:{
      color:"#273939",
      fontFamily:"Roboto",
      fontSize:60,
      fontWeight:"bold",
  },
  title2:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    width:360,
    height:640,

  },
  title3:{
    flex:1,
    top:40,

    width:320,
    height:120,
  }
});
 