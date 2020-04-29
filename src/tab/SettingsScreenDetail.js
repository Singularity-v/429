import React,{Component} from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class SettingsScreenDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Setting Detail" navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Setting Detail!</Text>
                </View>
            </View>
          );
    }
}