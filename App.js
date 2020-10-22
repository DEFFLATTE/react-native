import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomNavigator from './page/root/rootPage';
import BriefPage from './page/brief/briefPage';
import ImgPage from './page/brief/imgPage';
import ListPage from './page/cate/listPage';

//设置react-native路由导航
const AppStack = createStackNavigator(
    {
        BottomNavigator: {
            screen:BottomNavigator,
            navigationOptions: {
                headerShown: false,
            },
        },
        Brief: {screen: BriefPage},
        ImgPage: {screen: ImgPage},
        ListPage: {screen: ListPage},
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(AppStack)
