import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacity } from 'react-native';

class Inputs extends Component{
    state:{
        email:'',
        password:'',
        intro:''
    }
    handleEmail = (text) =>{
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
                    /*下划线的颜色，透明则为transparent*/
                    underlineColorAndroid = "transparent"
                    /*占位符*/
                    placeholder = "请输入邮箱"
                    /*    占位符的字体颜色*/
                    placeholderTextColor = '#ccc'
                    /*    字母大写模式，可选的值有"default","number-pad","decimal-pad","numeric","email-address","phone-pad"*/
                    autoCapitalize = "none"
                    /*    键盘上返回键类型，可选的值有:"done","go","next","search","send"*/
                    returnKeyType = "next"
                    /*    文本变更后的回调函数，参数为输入框里的文本*/
                    onChangeText = {this.handleEmail}
                ></TextInput>

                <TextInput
                    style = {styles.input}
                    /*下划线的颜色，透明则为transparent*/
                    underlineColorAndroid = "transparent"
                    /*占位符*/
                    placeholder = "请输入密码"
                    /*    占位符的字体颜色*/
                    placeholderTextColor = '#ccc'
                    /*    字母大写模式，可选的值有"default","number-pad","decimal-pad","numeric","email-address","phone-pad"*/
                    autoCapitalize = "none"
                    /*    键盘上返回键类型，可选的值有:"done","go","next","search","send"*/
                    returnKeyType = "next"
                    /*    文本变更后的回调函数，参数为输入框里的文本*/
                    //是否属于密码框类型
                    secureTextEntry = {true}
                    onChangeText = {this.handlePassword}
                ></TextInput>

                <TextInput
                    style = {styles.input}
                    /*下划线的颜色，透明则为transparent*/
                    underlineColorAndroid = "transparent"
                    /*占位符*/
                    placeholder = "请输入描述"
                    /*    占位符的字体颜色*/
                    placeholderTextColor = '#ccc'
                    /*    字母大写模式，可选的值有"default","number-pad","decimal-pad","numeric","email-address","phone-pad"*/
                    autoCapitalize = "none"
                    /*    键盘上返回键类型，可选的值有:"done","go","next","search","send"*/
                    returnKeyType = "done"
                    /*    文本变更后的回调函数，参数为输入框里的文本*/
                    //多行设置
                    mutiline = {true}
                    //行数
                    numberOfLines = {4}
                    //文字的位置靠上
                    textAlignVertical="top"
                    onChangeText = {this.handleIntro}
                ></TextInput>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress = {
                        ()=> this.register(this.state.email,this.state.password,this.state.intro)
                    }>
                    <Text style={styles.submitButtonText}>注册</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingTop:23
    },
    input:{
        margin:15,
        paddingLeft:8,
        height:40,
        borderColor:'#eeeeee',
        borderWidth:1
    },
    submitButton:{
        backgroundColor:'#7a42f4',
        padding:10,
        alignItems:'center',
        margin: 15,
        height: 40
    },
    submitButtonText:{
        color:'white'
    }
})
export default Inputs


