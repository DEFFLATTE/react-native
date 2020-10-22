import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView } from 'react-native';

export default class App extends Component{
    render(){
        return (
            <ScrollView>
                {/*普通图片设置*/}
                <Image
                    source={require('./assets/lzx.jpg')}
                >
                </Image>
                {/*网络图片设置*/}
                <Image
                    style={{margin:10,width:177,height:100}}
                    source={{uri:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3458299084,4005746562&fm=26&gp=0.jpg'}}
                >
                </Image>
                {/*图片显示模式，contain,按照正常的比例缩放到整个可以刚好放进来*/}
                <Image
                    style={{margin:10,width:200,height:200,resizeMode: 'contain',borderWidth:1,borderColor:'#000'}}
                    source={{uri:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3458299084,4005746562&fm=26&gp=0.jpg'}}
                >
                </Image>
                {/*不会变形，放大图片刚好覆盖住整个内容*/}
                <Image
                    style={{margin:10,width:200,height:200,resizeMode: 'cover',borderWidth:1,borderColor:'#000'}}
                    source={{uri:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3458299084,4005746562&fm=26&gp=0.jpg'}}
                >
                </Image>
                {/*直接将图片拉升成设置的大小，会变形*/}
                <Image
                    style={{margin:10,width:200,height:200,resizeMode: 'stretch',borderWidth:1,borderColor:'#000'}}
                    source={{uri:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3458299084,4005746562&fm=26&gp=0.jpg'}}
                >
                </Image>

            </ScrollView>
        )
    }
}
