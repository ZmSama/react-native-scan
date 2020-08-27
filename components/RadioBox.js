/*
 * @Description:单选框组件，可以定制颜色和大小,排列方式,根据不同的排列方式设置列间距行间距
 接收label数组和value数组
 * @Autor: ZmSama
 * @Date: 2020-08-27 10:49:10
 */
import React from 'react';

import {View, StyleSheet, Text, Image, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import jugeSize from '../utils/jugeSize';
import jugeSizeForFont from '../utils/jugeSizeForFont';

export default class RadioBox extends React.Component {
  state = {
    isCheck: false,
    size: {
      W: 15,
      H: 15,
    },
    fz: 14,
    currenSelect: 0,
  };

  componentDidMount() {
    if (this.props.label.length != this.props.value.length) {
      console.log(
        '这是一个友好提示，使用该组件时label数组和value数组应该一一对应，请检查是否一样',
      );
    }
    this.setState({
      size: jugeSize(this.props.size),
      fz: jugeSizeForFont(this.props.size),
    });

    // 进来的时候默认选中第一个
    this.toggleCheck(0);
  }
  //   切换单选的选中状态
  toggleCheck = (index) => {
    //   该方法有个回调函数能确保拿到最新的值
    this.setState(
      {
        currenSelect: index,
      },
      () => {
        //   当状态为选中的时候将value值返回给用户即可
        // console.log(this.props.value[index]);
        this.props.change(this.props.value[index]);
      },
    );
  };
  render() {
    const {label} = this.props;
    return (
      <View style={[styles.checkBox, {flexDirection: this.props.direction}]}>
        {label.map((item, index) => {
          return (
            <View
              style={[
                styles.RadioBoxGroup,
                {
                  marginRight:
                    this.props.direction == 'row' ? this.props.column_gap : 0,
                  marginTop:
                    this.props.direction == 'column' ? this.props.row_gap : 0,
                },
              ]}
              key={index}>
              <TouchableOpacity
                onPress={this.toggleCheck.bind(this, index)}
                style={[
                  styles.tengle,
                  {
                    backgroundColor:
                      this.state.currenSelect === index
                        ? this.props.backgroundColor || 'rgb(2,126,126)'
                        : '#fff',
                    borderColor: this.props.backgroundColor || 'rgb(2,126,126)',
                    height: this.state.size.H,
                    width: this.state.size.W,
                  },
                ]}>
                <Image
                  source={require('../assets/check.png')}
                  style={styles.inIcon}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.label,
                  {color: this.props.backgroundColor, fontSize: this.state.fz},
                ]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tengle: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: 'rgb(2,126,126)',
    borderRadius: 3,
    marginRight: 3,
    position: 'relative',
  },
  label: {
    color: 'rgba(0,0,0,.4)',
  },
  inIcon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  RadioBoxGroup: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
