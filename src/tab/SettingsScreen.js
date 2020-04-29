import React,{Component} from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Setting!</Text>
                  <TouchableOpacity
                    style={{marginTop:20}}
                    onPress={() => this.props.navigation.navigate("SettingDetail")}
                  >
                    <Text>Go Setting Detail</Text>
                  </TouchableOpacity>
                </View>
            </View>
          );
    }
}