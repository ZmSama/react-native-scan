/*
 * @Description: 车牌录入界面
 * @Autor: ZmSama
 * @Date: 2020-08-24 15:55:21
 */
import React from 'react';
import {Text, View, StyleSheet, Animated, Easing} from 'react-native';
import RadioBox from '../../components/RadioBox';
// import AreaPicker from '../../components/AreaPicker';
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native-gesture-handler';

export default class LicensePlate extends React.Component {
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
  // 单选框选中方法
  selectd = (status) => {
    console.log('拿到的值是:' + status);
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
      <View style={{flex: 1, position: 'relative'}}>
        <View style={styles.topCard}>
          <View style={styles.checkBoxWrap}>
            <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.7)'}}>
              运输方式
            </Text>
            <View style={{marginLeft: 20}}>
              <RadioBox
                change={this.selectd}
                label={['陆运', '海运']}
                value={['1', '2']}
                backgroundColor="rgb(2,126,126)"
                size="small"
                direction="row"
                column_gap={40}
              />
            </View>
          </View>
          <View style={styles.pickerWrap}>
            <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.7)'}}>
              运输方式
            </Text>
            {/* 地域选择按钮 */}
            <TouchableOpacity
              style={styles.outTengle}
              onPress={this.toggleAreaCard}>
              <Text style={{color: '#fff', fontFamily: 'sans-serif'}}>
                {this.state.curreSelectArea}
              </Text>
            </TouchableOpacity>

            <TextInput
              style={{
                borderWidth: 0,
                borderBottomWidth: 1,
                borderColor: '#ccc',
                width: '75%',
                padding: 0,
                paddingLeft: 5,
                marginLeft: 5,
              }}></TextInput>
          </View>
        </View>
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

        {/* 中间表格 */}

        <View style={styles.middleTabl}>
          <View style={styles.tableHead}>
            <Text style={{flex: 0.5, textAlign: 'center'}}>序号</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>运输方式</Text>
            <Text style={{flex: 2, textAlign: 'center'}}>车牌/柜号</Text>
          </View>
          <View style={styles.tableIn}>
            <ScrollView>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={{flex: 0.5, textAlign: 'center'}}>1</Text>
                <Text style={{flex: 1, textAlign: 'center'}}>陆运</Text>
                <Text style={{flex: 2, textAlign: 'center'}}>粤X88888</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        {/* 底部按钮 */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topCard: {
    height: 100,
    backgroundColor: '#fff',
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 10,
    borderRadius: 7,
    elevation: 3,
    padding: 20,
  },
  checkBoxWrap: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 20,
  },
  pickerWrap: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    height: 30,
  },
  outTengle: {
    height: 30,
    width: 30,
    backgroundColor: 'rgb(2,126,126)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 20,
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

  middleTabl: {
    minHeight: 200,
    maxHeight: 600,
    borderRadius: 7,
    backgroundColor: '#fff',
    width: '95%',
    marginTop: 10,
    marginLeft: '2.5%',
    elevation: 4,
    overflow: 'hidden',
  },
  tableHead: {
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  tableIn: {
    maxHeight: 400,
  },
  tableRow: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 0.6,
    borderColor: 'rgb(2,126,126)',
  },
});
