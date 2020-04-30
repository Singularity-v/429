import React,{Component} from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class ArcticScreenDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Arctic Detail" navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Arctic Detail!</Text>
                </View>
            </View>
          );
    }
}