import React, {Component} from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';

class SiteNameComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
        }
    }

    updateState = () => {
        const name = this.state.name == '牛逼'?'你咋不翻车呢？':'牛逼';
        this.setState({name})
    }
    render(){
        const {name}  = this.state;
        return (
            <View>
                <Text onPress={this.updateState}>{name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10
    }
})

export default class App extends Component{
    render(){
        return (
            <View style={styles.container}>
                <SiteNameComponent name={'峰峰'}></SiteNameComponent>
            </View>
        )
    }
}
