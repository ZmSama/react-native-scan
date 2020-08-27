/*
 * @Description:icon组件,支持自定义背景颜色，大小和图片资源
 * @Autor: ZmSama
 * @Date: 2020-08-27 11:24:47
 */
import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';
import jugeSize from '../utils/jugeSize';

export default class Icon extends React.Component {
  state = {
    size: {
      W: 15,
      H: 15,
    },
  };

  componentDidMount() {
    this.setState({
      size: jugeSize(this.props.size),
    });
  }
  //   判断型号的方法
  //   jugeSize = (type) => {
  //     switch (type) {
  //       case 'mini':
  //         this.setState({
  //           size: {
  //             W: 15,
  //             H: 15,
  //           },
  //         });
  //         break;
  //       case 'small':
  //         this.setState({
  //           size: {
  //             W: 20,
  //             H: 20,
  //           },
  //         });
  //         break;
  //       case 'midle':
  //         this.setState({
  //           size: {
  //             W: 25,
  //             H: 25,
  //           },
  //         });
  //         break;
  //       case 'large':
  //         this.setState({
  //           size: {
  //             W: 30,
  //             H: 30,
  //           },
  //         });
  //         break;
  //     }
  //   };

  render() {
    return (
      <View
        style={{
          height: this.state.size.H,
          width: this.state.size.W,
          backgroundColor: this.props.backgroundColor || '#fff',
        }}>
        <Image
          source={this.props.name}
          style={{width: '100%', height: '100%'}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconWarp: {
    height: 20,
    width: 20,
  },
});
