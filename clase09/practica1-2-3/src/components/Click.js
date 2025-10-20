import React, { Component } from 'react';
import { Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';


class Click extends Component {
    clickMe(){
        console.log("Me Clickearon")
    }
    
    render () {
      return (
        <Pressable style={styles.clickable} onPress={() => this.clickMe()}> 
            <Text style={styles.texto}>Presionar</Text>
        </Pressable>
      )
    }
  }
  const styles = StyleSheet.create({
    clickable:{
        padding: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderCurve: 4,
    },
    texto:{
        fontWeight: "bold",
        textAlign:"center"
    }
})

export default Click