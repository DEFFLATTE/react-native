import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            {/*设置红色字体样式*/}
            <Text style={styles.capitalLetter}>xxx</Text>
            <Text>xxx</Text>
            {/*设置字体加粗*/}
            <Text>xxx <Text style={styles.wordBold}>xxx</Text>  xxxxx</Text>
            {/*设置斜体*/}
            <Text style={styles.italicText}>xxxxxxxxxx</Text>
            {/*设置文字阴影*/}
            <Text style={styles.textShadow}>xxxxxxx</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:100,
        padding:20
    },
    text:{
        color:'#41cdf4'
    },
    capitalLetter:{
        color:'red',
        fontSize:20
    },
    wordBold:{
        fontWeight: 'bold',
        color:'black'
    },
    italicText:{
        color:'#37859b',
        fontStyle:'italic'
    },
    textShadow:{
        textShadowColor:'red',
        textShadowOffset:{ width:2,height:2},
        textShadowRadius:1
    }
})
export default App
