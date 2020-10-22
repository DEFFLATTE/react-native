import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//导入ant轮播图组件
import { Carousel, Button } from '@ant-design/react-native';
//导入自定义的列表组件

export default class HomePage extends React.Component{
    static navigationOptions = {
        tabBarLabel:'首页',
        tabBarIcon:({focused}) => {
            if(focused){
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/my.png')}></Image>
                )
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../assets/my_n.png')}></Image>
            )
        }
    }
    render(){
        return (
            <View>
                <Text>1234567910</Text>
                <Button type="primary">default disabled</Button>
               <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
               >
                   <View style={[styles.containerHorizontal,{backgroundColor:'red'}]}>
                       <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../../assets/lzx.jpg')}></Image>
                   </View>
                   <View style={[styles.containerHorizontal,{backgroundColor:'blue'}]}>
                       <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../../assets/lzx.jpg')}></Image>
                   </View>
                   <View style={[styles.containerHorizontal,{backgroundColor:'yellow'}]}>
                       <Image style={{width:'100%',height:200}} resizeMode="cover" source={require('../../assets/lzx.jpg')}></Image>
                   </View>
               </Carousel>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
                >
                    <View
                        style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
                    >
                        <Text>Carousel 1</Text>
                    </View>
                    <View
                        style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
                    >
                        <Text>Carousel 2</Text>
                    </View>
                    <View
                        style={[
                            styles.containerHorizontal,
                            { backgroundColor: 'yellow' },
                        ]}
                    >
                        <Text>Carousel 3</Text>
                    </View>
                    <View
                        style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}
                    >
                        <Text>Carousel 4</Text>
                    </View>
                    <View
                        style={[
                            styles.containerHorizontal,
                            { backgroundColor: 'fuchsia' },
                        ]}
                    >
                        <Text>Carousel 5</Text>
                    </View>
                </Carousel>
                {/*<ListViewCom navigation={this.props.navigation}></ListViewCom>*/}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabBarIcon:{
        width:21,
        height:21
    },
    wrapper:{
        backgroundColor:'#fff'
    },
    containerHorizontal:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        height:200
    },
    containerVertical:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        height:150
    },
    text:{
        color:'#fff',
        fontSize:36
    }
})
