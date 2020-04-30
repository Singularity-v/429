import React,{Component} from 'react'
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity,ScrollView,Botton} from 'react-native';
import {CustomHeader} from '../index'
import Swiper from 'react-native-swiper'
import contentData from "../json/Content.json";
import ArcticDetail from "../tab/ArcticScreenDetail"

export class ArcticScreen extends Component {
    render() {
        return (
          <View style={{ flex: 1 ,backgroundColor:"#5E7369"}}>
            <CustomHeader title="Arctic" isHome={true} navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
              <ScrollView style={{  flex: 1,width:'100%',backgroundColor:'#fff',paddingTop:10, borderTopLeftRadius: 25,borderTopRightRadius: 25,}}>
                <View style={styles.menu}>
                  <Text style={styles.word1}>Arctic</Text>
                </View>
                <View >
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={ true } showsPagination={false}>
                    <View style={styles.slide1}>
                        <Image  style={styles.picture1} source={{ uri:contentData[0].picture}} />
                    </View>
                    <View style={styles.slide2}>
                        <Image  style={styles.picture1} source={{ uri:contentData[0].picture1}} />
                    </View>
                    <View style={styles.slide3}>
                        <Image  style={styles.picture1}source={{ uri:contentData[0].picture2}} />
                    </View>
                </Swiper>    
                </View>

                <View>
                  <Text style={styles.word2}>Another</Text>
                  <TouchableOpacity 
                  style={styles.square}
                  onPress={() => this.props.navigation.navigate("ArcticDetail")}
                  >
                      <Image style={styles.p1} source={{ uri:contentData[0].p1}} />
                      <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                      <Text style={styles.word3}>{contentData[0].word}</Text>
                      <Text style={styles.word4}>{contentData[0].word1}</Text>
                      </View>
                  </TouchableOpacity>
                  <View style={styles.square}>
                      <Image style={styles.p1} source={{uri:contentData[1].p1}} />
                      <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                      <Text style={styles.word3}>{contentData[0].word}</Text>
                      <Text style={styles.word4}>{contentData[0].word1}</Text>
                    
                      </View>
                  </View>
                  <View style={styles.square}>
                      <Image style={styles.p1} source={{ uri:contentData[2].p1 }} />
                      <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                      <Text style={styles.word3}>{contentData[0].word}</Text>
                      <Text style={styles.word4}>{contentData[0].word1}</Text>
                    
                      </View>
                  </View>
                  <View style={styles.square}>
                      <Image style={styles.p1} source={{uri:contentData[3].p1 }} />
                      <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                      <Text style={styles.word3}>{contentData[0].word}</Text>
                      <Text style={styles.word4}>{contentData[0].word1}</Text>
                  
                      </View>
                  </View>
                  <View style={styles.square}>
                      <Image style={styles.p1} source={{uri:contentData[4].p1 }} />
                      <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                      <Text style={styles.word3}>{contentData[0].word}</Text>
                      <Text style={styles.word4}>{contentData[0].word1}</Text>
                    
                      </View>
                  </View>
                  <View style={styles.square}>
                      <Image style={styles.p1} source={{uri:contentData[5].p1}} />
                      <View style={{ justifyContent:"center",alignItems:"flex-start",height:85,left:10,width:200}}>
                      <Text style={styles.word3}>{contentData[0].word}</Text>
                      <Text style={styles.word4}>{contentData[0].word1}</Text>
                  
                  </View>
                  </View>
                  </View>
      
                </ScrollView>
            </View>
          </View>
          );
    }
}

const styles = StyleSheet.create({
  word:{
      width:100,
      fontSize:15,
      fontWeight:"bold",
      justifyContent:"space-around",
      left:40
  },
  word1:{
      color:"#5e7369",
      width:100,
      fontSize:20,
      justifyContent:"space-around",
      left:40,
      fontWeight:"bold",
  },
  content:{
      backgroundColor:"#fff",
      top:0,
      height:'100%',
      width:'100%',
      borderTopStartRadius:25,
      borderTopEndRadius:25,
      elevation:10
  },
  picture1:{
      width:302,
      height:183,
      top:10,
      left:29,
      borderRadius:25,
  },
  word2:{
      fontWeight:"bold",
      fontSize:18,
      width:302,
      left:34
  },
  
  word3:{
      color:"#5E7369",
      paddingBottom:7,
      fontWeight:"bold",
      fontSize:15,
      fontFamily:"Roboto"
  },
  word4:{
      lineHeight:13,
      color:"#5E7369",
      fontSize:10.5,
      fontFamily:"Roboto"
  },
  square:{
      alignItems:"flex-start",
      backgroundColor:"#FCF8F5",
      borderRadius:10,
      flexDirection:"row",
      width:302,
      height:85,

      marginTop:10,
      left:29
  },
  p1:{
      borderRadius:10,
      width:85,
      height:85,
  },
  buttom:{
  flexDirection:"row",
  justifyContent:"space-around",
  alignItems:"center",
  borderTopStartRadius:25,
  borderTopEndRadius:25,
  backgroundColor:"#869FB3",
  //borderWidth:1,
  //borderColor:"#1E87B0",
  top:-88,
  width:360,
  height:60,
  elevation:11
 },
 icon:{
  alignItems:"center",
  justifyContent:"center",
 }
});