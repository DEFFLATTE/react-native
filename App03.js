import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
const App = () => {
    return (
        <View style={styles.container}>
            {/*没有样式继承的，每一个组件都要单独设置样式*/}
            <View style={[styles.txt,{color:'#333300'}]}>
                <Text>xxxxxx</Text>
            </View>
            {/*直接设置样式对象*/}
            <View style={styles.card}></View>
            {/*创建样式对象*/}
            <View style={{marginTop:8,marginBottom:8,height: 100,backgroundColor:'blue'}}></View>
            {/*合并多个样式对象，同样的设置，右边的优先级越高*/}
            <View style={[styles.card,{backgroundColor:'yellow'}]}></View>
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
export default App;
