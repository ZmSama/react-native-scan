/*
 * @Description:工具小组件
 * @Autor: ZmSama
 * @Date: 2020-08-26 16:58:59
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Tools extends React.Component {
  render() {
    return (
      <>
        {/* 弹出框上面的小三角形 */}
        <View style={styles.inPopleTopTengle}></View>
        {/* 里面的弹出框 */}
        <View style={styles.inPople}>
          <View style={styles.openLigher}>
            <View style={{marginLeft: 7}}>
              <Text>打开手电筒</Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'rgb(2,126,126)',
                width: 40,
                height: 20,
                borderRadius: 10,
                marginRight: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/lighter_active.png')}
                style={{width: 10, height: 10}}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.manualInput}>
            <View style={{marginLeft: 7}}>
              <Text>手动输入</Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'rgb(2,126,126)',
                width: 40,
                height: 20,
                borderRadius: 10,
                marginRight: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/figer.png')}
                style={{width: 10, height: 10}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inPople: {
    width: 140,
    height: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 40,
    right: -40,
    zIndex: 99,
    borderRadius: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inPopleTopTengle: {
    position: 'absolute',
    top: 25,
    left: 0,
    width: 0,
    height: 0,
    borderRightWidth: 12,
    borderRightColor: 'transparent',
    borderLeftWidth: 12,
    borderLeftColor: 'transparent',
    borderBottomWidth: 15,
    borderBottomColor: '#fff',
    zIndex: 90,
  },
  openLigher: {
    flex: 1,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  manualInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
