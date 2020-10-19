import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default  class App extends React.Component {
    state = {
        name:'老周',
        type:'牛逼'
    }
    updateState = () => {
        const type = this.state.type == '牛逼'?'帅':'牛逼';
        this.setState({type})
    }
    render(){
        const {name, type }  = this.state;
        return (
            <View style={styles.container}>
                <Text onPress={this.updateState}>名称：{name}</Text>
                <Text>特点：{type}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10
    }
})
