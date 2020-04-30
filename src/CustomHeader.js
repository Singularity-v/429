import React,{Component} from 'react'
import { Text, View, Image,TouchableOpacity} from 'react-native';
import {IMAGE} from './constant/Image'
import {SafeArea} from './constant/SafeArea'


export class CustomHeader extends Component {
    render(){
      let {navigation, isHome, title} = this.props
        return(
          <View>
          <SafeArea/>
            <View style={{flexDirection:"row",height:50,backgroundColor:"#5E7369"}}>
              
              <View style={{flex:1,justifyContent:"center"}}>
                {
                  isHome ?
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={{width:40,height:40,marginLeft:5,marginTop:5}}
                    source={IMAGE.ICON_MENU}
                    resizeMode="contain"
                    />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity 
                  style ={{flexDirection:"row", alignItems:"center"}}
                  onPress={()  => navigation.goBack()}
                >
                    <Image style={{width:48,height:48,marginLeft:5}}
                    source={IMAGE.ICON_BACK}
                    resizeMode="contain"
                    />
                    <Text>Back</Text>
                  </TouchableOpacity> 
                }
              </View>

              <View style={{flex:1.5, justifyContent:"center"}}>
                <Text style={{textAlign:"center",color:"#F1DACC",fontSize:20,fontWeight:"bold"}}>{title}</Text>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity style={{alignItems:"flex-end"}}>
                  <Image style={{width:40,height:40,marginRight:5,marginTop:5}}
                  source={IMAGE.ICON_SEARCH}
                  resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            </View>
        )
    }
}