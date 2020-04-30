import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity,ScrollView} from "react-native";


const image= {uri:"https://raw.githubusercontent.com/shakuneko/picture2/master/arctic.png"}

const Introduction = ({ navigation }) => {
    return (
        
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} >
        <View style={{flex:1}}></View>
        <View style={styles.block}>
            <View>
            <Image style={styles.arrow} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/LearnMore_down.png" }} /> 
            </View>
            <View style={{flexDirection:"row"}} >
            
            <ScrollView style={styles.scrollViewStyle}horizontal={true}>

            <TouchableOpacity
                  style={{marginTop:20,left:10}}>
                  <View style={styles.TextBoxStyle}>
                    <Text style={styles.TextStyle}>Arctic fox</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20,left:20}}>
                  <View style={styles.TextBoxStyle2}>
                    <Text style={styles.TextStyle}>Polar bear</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20,left:30}}>
                  <View style={styles.TextBoxStyle2}>
                    <Text style={styles.TextStyle}>Seal</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20,left:40}}>
                  <View style={styles.TextBoxStyle2}>
                    <Text style={styles.TextStyle}>Arctic fox</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20,left:50}}>
                  <View style={styles.TextBoxStyle2}>
                    <Text style={styles.TextStyle}>Polar bear</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop:20,left:60}}>
                  <View style={styles.TextBoxStyle2}>
                    <Text style={styles.TextStyle}>Seal</Text>
                  </View>
                </TouchableOpacity>
           </ScrollView>
             

                
            </View>
            
            <View style={{height:200,marginTop:30}}>
               <Image style={styles.p} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Arctic%20Fox%20(1).png" }} /> 
            </View>
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <View style={{justifyContent:"flex-start",alignItems:"flex-start",width:360}}>
                    <Text style={styles.title}>北極狐</Text>
               </View>
               <Text style={styles.content}>北極狐額面狹，吻部很尖，耳短而圓，頰後部生長毛，腳底部也密生長毛，所以適於在冰雪地上行走，尾毛蓬鬆，尖端白色，身體略小於赤狐。
                     冬天毛色為純雪白色，僅無毛的鼻尖和尾端黑色，自春天至夏天逐漸轉變為青灰色，特稱「青狐」。</Text>
            </View>

    
        </View>
       
        </ImageBackground>
    </View>

    );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:"column",
  },
  image:{
      flex:1,
      resizeMode:"cover",
      width:"100%"
  },
  block:{
    alignContent:"center",
    backgroundColor:"#546261",
    opacity:0.75,
    width:"100%",
    height:613,
    borderTopStartRadius:25,
    borderTopEndRadius:25,
  },
arrow:{
    justifyContent:"flex-start",
    top:5,
    left:10,
    width:48,
    height:48
},
p:{
    width:"100%",
    height:"100%"
},
title:{
    color:"#E7ECF0",
    fontSize:25,
    fontFamily:"Roboto",
    fontWeight:"bold",
 
},
content:{
    width:300,
    color:"#E7ECF0",
    fontSize:15,
    fontFamily:"Roboto",
    fontWeight:"bold",
   
},
TextBoxStyle:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#C0DBFF",
    borderRadius:20,
    height:40,
    width:95   
},
TextBoxStyle2:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#C0DBFF50",
    borderRadius:20,
    height:40,
    width:95
}
});
 
  
export default Introduction;