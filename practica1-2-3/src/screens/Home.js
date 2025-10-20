import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Contador from '../components/Contador';
import Click from '../components/Click';
import { StyleSheet } from 'react-native';


function Home(){
  return (
  <View style={styles.principal}>
  <Text style={styles.texto}> Hola mundo </Text> 
  <Click/>
  <Contador/>
    
  </View>
)}
const styles = StyleSheet.create({
    
  principal:{
      padding: 10
  },
  texto:{
      textAlign:"center"
  }
  })
export default Home