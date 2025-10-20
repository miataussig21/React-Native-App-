import React, { Component } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';


class BotonClick extends Component {
    
    render () {
      return (
        <View>
        <Text> Hola mundo </Text> 
        <Pressable onPress={() => console.log('me clickearon')}> 
            <Text> Presionar </Text> 
        </Pressable>
        
        </View>
      )
    }
  }
export default BotonClick