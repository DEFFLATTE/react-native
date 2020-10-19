import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacity } from 'react-native';

class Inputs extends Component{
    state:{
        email:'',
        password:'',
        intro:''
    }
    handleRmail = (text) =>{
        this.setState({email:text})
    }
    handlePassword = (text) => {
        this.setState({password:text})
    }
    handleIntro = (text) => {
        this.setState({intro:text})
    }
    register = (email,pass,intro) =>{
        alert(`email:${email}\npassword:${pass}\nintro:${intro}`)
    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    style = {styles.input}
                {/*下划线的颜色，透明则为transparent*/}
                    underlineColorAndroid = "transparent"
                {/*占位符*/}
                    placeholder = "请输入邮箱"
                {/*    占位符的字体颜色*/}
                    placeholderTextColor = '#ccc'
                {/*    字母大写模式，可选的值有"default","number-pad","decimal-pad","numeric","email-address","phone-pad"*/}
                    autoCapitalize = "none"
                {/*    键盘上返回键类型，可选的值有:"done","go","next","search","send"*/}
                    returnKeyType = "next"
                {/*    文本变更后的回调函数，参数为输入框里的文本*/}
                ></TextInput>

            </View>
        )
    }
}
export default Inputs


