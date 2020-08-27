/*
 * @Description:登陆组件
 * @Autor: ZmSama
 * @Date: 2020-08-20 14:05:26
 */
import React from 'react';
import {View, TextInput, StyleSheet, Image, Text, Switch} from 'react-native';
import {Button, Toast, Provider} from '@ant-design/react-native';
import SwitchButton from '../../components/SwitchButton';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
    isRemen: false,
    isLoading: false,
    isEye: true,
  };

  // 捕获用户输入账号和密码
  inputUsername = (text) => {
    this.setState({
      username: text,
    });
  };
  inputPassword = (text) => {
    this.setState({
      password: text,
    });
  };
  // 记住密码
  remenberPsw = (val) => {
    this.setState({
      isRemen: val,
    });
  };
  // 登陆
  login = () => {
    if (this.state.username === '') {
      Toast.info('账号不能为空', 2, undefined, false);
      return;
    }
    if (this.state.password === '') {
      Toast.info('登陆密码不能为空', 2, undefined, false);
      return;
    } else {
      this.setState({
        isLoading: true,
      });
      // 前面应该校验账号密码
      setTimeout(() => {
        Toast.info('登陆成功', 1, undefined, false);
        this.setState({
          isLoading: false,
        });
        // 路由跳转
        this.props.navigation.navigate('Home');
      }, 1000);
    }
  };
  // 密码显示与否切换方法
  switchChange = (status) => {
    this.setState({
      isEye: !status,
    });
  };

  render() {
    return (
      <Provider>
        <View style={styles.login_warp}>
          {/* logo区域 */}
          <View style={styles.logo}>
            <Image
              source={require('../../assets/all.png')}
              style={{width: '100%', height: '100%'}}></Image>
          </View>

          {/* 账号密码区域 */}
          <View style={styles.options}>
            <View style={styles.username}>
              <View style={styles.icon}>
                <Image
                  source={require('../../assets/icon.png')}
                  style={{width: '100%', height: '100%'}}></Image>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.username}
                placeholder="登陆账号"
                onChangeText={this.inputUsername}></TextInput>
            </View>
            <View style={styles.password}>
              <View style={styles.icon}>
                <Image
                  source={require('../../assets/mima.png')}
                  style={{width: '100%', height: '100%'}}></Image>
              </View>
              <TextInput
                style={styles.input}
                value={this.state.password}
                placeholder="登陆密码"
                secureTextEntry={this.state.isEye}
                onChangeText={this.inputPassword}></TextInput>
              <SwitchButton change={this.switchChange}></SwitchButton>
            </View>
          </View>

          {this.state.isLoading ? (
            <Button
              loading
              onPress={this.login}
              activeStyle={{backgroundColor: 'rgb(125,185,252)'}}
              style={styles.submit}>
              <Text style={{color: '#fff'}}>登陆</Text>
            </Button>
          ) : (
            <Button
              onPress={this.login}
              activeStyle={{backgroundColor: 'rgb(125,185,252)'}}
              style={styles.submit}>
              <Text style={{color: '#fff'}}>登陆</Text>
            </Button>
          )}
        </View>
      </Provider>
    );
  }
}
// 样式部分
const styles = StyleSheet.create({
  login_warp: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(245,245,245,1)',
  },
  logo: {
    width: 140,
    height: 50,
    marginTop: '30%',
  },
  options: {
    width: '95%',
    height: 100,
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  username: {
    borderColor: '#fff',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  input: {
    height: 40,
    width: '75%',
    marginTop: 5,
    marginLeft: 10,
  },
  submit: {
    width: '95%',
    marginTop: 15,
    backgroundColor: 'rgb(1,128,128)',
    color: '#fff',
  },
});
