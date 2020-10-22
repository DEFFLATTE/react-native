import React from 'react';
//导入底部导航栏组件
import {createBottomTabNavigator} from 'react-navigation-tabs';

//导入底部导航栏3个相关的页面
import HomePage from '../home/homePage';
import CatePage from '../cate/catePage'
import MinePage from '../mine/minePage'

//定义整个底部导航栏组件
const BottomNavigator = createBottomTabNavigator({
    Home:{
        screen:HomePage,
        navigationOptions:{
            title:'首页',
            tabBarLabel:'首页'
        }
    },
    Cate:{
        screen:CatePage,
        navigationOptions:{
            title:'分类',
            tabBarLabel:'分类'
        }
    },
    Mine:{
        screen:MinePage,
        navigationOptions:{
            title:'我的',
            tabBarLabel:'我的'
        }
    }
})
export default BottomNavigator
