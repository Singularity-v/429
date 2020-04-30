import React,{Component} from 'react'
import { View, Text,StyleSheet,TouchableOpacity ,Image} from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';
import Select from 'react-select';
import {IMAGE} from '../constant/Image'


// this example assumes you're using a header and a tab bar

const TAB_BAR_HEIGHT = -20;

export class Buttom extends Component {
 
  
  renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.text}></Text>
        <View style={styles.all}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
         style={styles.titlebutton}>
          <Text style={styles.title}>Information </Text>
          </TouchableOpacity>
          <TouchableOpacity
         style={styles.titlebutton}

         >  
          <Text style={styles.title}>Learn More</Text>
          </TouchableOpacity>
          </View>
          <View>
          <View style={styles.box}>
          <Text style={styles.title2}>Location </Text>
            <View style={{width:140,height:35,backgroundColor:"#C0DBFF",marginTop:5}}>
            </View>
            </View>
          </View>
          <View style={styles.box2}>
              <View>
                <Text style={styles.title2}>yyyy/mm/dd</Text>
                <View style={{width:140,height:35,backgroundColor:"#C0DBFF",marginTop:5}}>
                  <Image style={{top:5,left:110,width:24,height:24}} source={IMAGE.ICON_ARROW}/>
                </View>
              </View>
              <View>
                <Text style={styles.title2}>People</Text>
                <View style={{width:140,height:35,backgroundColor:"#C0DBFF",marginTop:5}}>
                <Image style={{top:5,left:110,width:24,height:24}} source={IMAGE.ICON_ARROW}/>
                </View>
              </View>
          </View>
          </View>
      </View>
      
     
    )
  }
 
  render() {
    
    return (
      
      <BottomDrawer
        containerHeight={400}
        offset={TAB_BAR_HEIGHT}
        onExpanded = {() => {console.log('expanded')}}
        onCollapsed = {() => {console.log('collapsed')}}
      >
        {this.renderContent()}
      </BottomDrawer>
      
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width:"100%",
    borderTopStartRadius:10,
    borderTopEndRadius:10,
    backgroundColor:"#3C849E",
    alignItems: 'center',
    //justifyContent: 'space-around',
    padding:30
  },
  buttonContainer: {
    flexDirection: 'row',
    width:320,
    justifyContent: "flex-start",
  },
  button:{
      left:-50,
     color:"#000000"
  },

  text: {
    
    backgroundColor:"#fff",
    height:5,
    width:149,
    borderRadius:10,
    paddingHorizontal: 5
  },
 
  title:{
    color:"#C0DBFF",
    fontSize:20,
    fontFamily:"Roboto",
    fontWeight:"bold",
    marginRight:30

    
  },
  title2:{
    color:"#fff",
    fontSize:15,
    fontFamily:"Roboto",
    fontWeight:"bold",
    justifyContent: "flex-start"
  },
  box:{
    width:320,
    flexDirection: "column",
    //backgroundColor:"#000000",
    //alignItems: "flex-start",
   
   
  },
  box2:{
    width:320,
    flexDirection: 'row',
    justifyContent:"space-between"
   
  },
  all:{
    height:220,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent:"space-around",
    marginTop:20
  }
});