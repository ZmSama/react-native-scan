/*
 * @Description:switch组件
 * @Autor: ZmSama
 * @Date: 2020-08-26 17:12:35
 */
import React from 'react';

import {View, Animated, StyleSheet, Easing, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';

export default class SwitchButton extends React.Component {
  state = {
    isOpen: false,
    outOffStatus: new Animated.Value(0),
    outOffPosition: new Animated.Value(0),
  };

  //   打开的动画
  openStatusAnimation = () => {
    return Animated.parallel([
      // 让底色改变
      Animated.timing(this.state.outOffStatus, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
      // 让白色小球向右运动
      Animated.timing(this.state.outOffPosition, {
        toValue: 32,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
    ]);
  };
  //   关闭动画
  closeStatusAnimation = () => {
    return Animated.parallel([
      // 让底色改变
      Animated.timing(this.state.outOffStatus, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
      // 让白色小球向左运动
      Animated.timing(this.state.outOffPosition, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
    ]);
  };

  // 切换状态方法
  toggleStatus = () => {
    // 加入延迟函数体现动画效果
    setTimeout(() => {
      this.setState({
        isOpen: true,
      });
    }, 200);
    if (!this.state.isOpen) {
      this.openStatusAnimation().start((finish) => {
        // 调用父组件定义的方法进行传值
        this.props.change(true);
      });
    } else {
      setTimeout(() => {
        this.setState({
          isOpen: false,
        });
      }, 200);
      this.closeStatusAnimation().start((finish) => {
        this.props.change(false);
      });
    }
  };
  render() {
    return (
      // 外层底色
      <Animated.View
        style={[
          styles.outWrap,
          {
            backgroundColor: this.state.outOffStatus.interpolate({
              inputRange: [0, 1],
              outputRange: ['#ccc', 'rgb(0,121,254)'],
            }),
          },
        ]}>
        {/* 里面的白色按钮 */}
        <TouchableOpacity
          onPress={this.toggleStatus}
          style={{paddingBottom: 3}}>
          <Animated.View
            style={[
              styles.inCircle,
              {
                transform: [{translateX: this.state.outOffPosition}],
              },
            ]}></Animated.View>
        </TouchableOpacity>
        {/* 底部区域的提示性文字，可删除 */}
        {!this.state.isOpen ? (
          <Text style={styles.offText}>***</Text>
        ) : (
          <Text style={styles.openText}>123</Text>
        )}
        {/* ******************************** */}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  outWrap: {
    height: 25,
    width: 55,
    backgroundColor: '#ccc',
    borderRadius: 15,
    position: 'relative',
  },
  inCircle: {
    width: 19,
    height: 19,
    borderRadius: 100,
    top: 3,
    left: 2,
    backgroundColor: '#fff',
  },
  offText: {
    position: 'absolute',
    top: 5,
    left: 30,
    color: '#fff',
  },
  openText: {
    position: 'absolute',
    top: 4,
    left: 5,
    fontSize: 12,
    color: '#fff',
  },
});
