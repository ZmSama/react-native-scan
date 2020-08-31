/*
 * @Description:路由根组件
 * @Autor: ZmSama
 * @Date: 2020-08-22 10:24:02
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from '../views/login/Login';
import Home from '../views/home/Home';
import Result from '../views/result/Result';
import Echart from '../views/echarts/Echart';
import LicensePlate from '../views/licensePlate/LicensePlate';
import SecurityScan from '../views/securityScan/SecurityScan';
import ScannerScreen from '../components/ScannerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

const Stack = createStackNavigator();

export default class RootNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {/* 初始页面 */}
        <Stack.Navigator initialRouteName="Home">
          <>
            {/* 加入要路由的组件 */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTitleAlign: 'center',
                headerShown: false,
                title: '系统登陆',
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitleAlign: 'left',
                title: '防伪标签出货扫描',
                headerStyle: {
                  height: 40,
                },
                headerTitleStyle: {
                  color: 'rgb(1,128,128)',
                },
              }}
            />
            <Stack.Screen
              name="ScannerScreen"
              component={ScannerScreen}
              options={{
                headerTitleAlign: 'center',
                title: '单据码扫描',
                headerStyle: {
                  height: 40,
                },
                headerTitleStyle: {
                  color: 'rgb(1,128,128)',
                },
              }}
            />
            <Stack.Screen
              name="Echart"
              component={Echart}
              options={{
                headerTitleAlign: 'center',
                title: 'echart图表demo展示',
              }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{
                headerTitleAlign: 'left',
                title: '防伪标签扫描结果',
                headerStyle: {
                  height: 40,
                },
                headerTitleStyle: {
                  color: 'rgb(1,128,128)',
                },
              }}
            />
            <Stack.Screen
              name="LicensePlate"
              component={LicensePlate}
              options={{
                headerTitleAlign: 'left',
                title: '运输方式',
                headerStyle: {
                  height: 40,
                },
                headerTitleStyle: {
                  color: 'rgb(1,128,128)',
                },
              }}
            />
            <Stack.Screen
              name="SecurityScan"
              component={SecurityScan}
              options={{
                headerTitleAlign: 'center',
                headerShown: false,
              }}
            />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
