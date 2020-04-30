import React,{Component} from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class DesertScreenDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Desert Detail" navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Desert Detail!</Text>
                </View>
            </View>
          );
    }
}