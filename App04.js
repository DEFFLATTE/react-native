import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
const FlexDirectionBasics = () => {
    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
          <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
          <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
          <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:8,
        backgroundColor:'#eeeeee'
    },
    card:{
        height:100,
        backgroundColor: '#ffffff'
    },
    txt:{

    }
})
export default FlexDirectionBasics;
