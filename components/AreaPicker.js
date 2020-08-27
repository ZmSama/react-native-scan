/*
 * @Description:地域选择器（暂时没有实现）
 * @Autor: ZmSama
 * @Date: 2020-08-27 15:11:45
 */
import React from 'react';

import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class AreaPicker extends React.Component {
  state = {
    areaData: [
      '京',
      '津',
      '冀',
      '晋',
      '蒙',
      '辽',
      '吉',
      '黑',
      '沪',
      '苏',
      '浙',
      '皖',
      '闽',
      '赣',
      '鲁',
      '豫',
      '鄂',
      '湘',
      '粤',
      '桂',
      '琼',
      '渝',
      '川',
      '黔',
      '滇',
      '藏',
      '陕',
      '甘',
      '青',
      '宁',
      '新',
      '台',
      '港',
      '澳',
    ],
    areaCardOrinPotions: new Animated.Value(-450),
    areaCardIsOpen: false,
    curreSelectArea: '京',
  };

  //   切换地域卡
  toggleAreaCard = () => {
    if (!this.state.areaCardIsOpen) {
      this.areaCardUpAnimation().start(() => {
        this.setState({
          areaCardIsOpen: true,
        });
      });
    } else {
      this.areaCardDownAnimation().start(() => {
        this.setState({
          areaCardIsOpen: false,
        });
      });
    }
  };

  //   地域卡向上运动动画
  areaCardUpAnimation = () => {
    return Animated.timing(this.state.areaCardOrinPotions, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.linear,
    });
  };

  //   向下运动
  areaCardDownAnimation = () => {
    return Animated.timing(this.state.areaCardOrinPotions, {
      toValue: -450,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.linear,
    });
  };

  //   下面卡片选中方法
  selected = (val) => {
    console.log(val);
    this.setState(
      {
        curreSelectArea: val,
      },
      () => {
        this.areaCardDownAnimation().start(() => {
          this.setState({
            areaCardIsOpen: false,
          });
        });
      },
    );
  };
  render() {
    const areaData = this.state.areaData;
    return (
      <View style={styles.pickerWrap}>
        {/* 这是下面的地域卡，循环出来，加上动画 */}
        <Animated.View
          style={[
            styles.areaCard,
            {
              bottom: this.state.areaCardOrinPotions,
            },
          ]}>
          {areaData.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.oneLittleleCard}
                key={index}
                onPress={this.selected.bind(this, item)}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: 18,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerWrap: {
    flex: 1,
    position: 'absolute',
    bottom: -450,
    left: 0,
    zIndex: 99,
  },
  outTengle: {
    height: 30,
    width: 30,
    backgroundColor: 'rgb(2,126,126)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  areaCard: {
    height: 450,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -450,
    left: 0,
    elevation: 8,
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  oneLittleleCard: {
    height: 60,
    width: 60,
    backgroundColor: 'rgb(2,126,126)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 10,
  },
});
