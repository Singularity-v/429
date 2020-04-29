import React,{Component} from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class NotificationScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Notifications" navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Notifications Screen!</Text>
                </View>
            </View>
          );
    }
}