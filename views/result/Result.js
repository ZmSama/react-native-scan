/*
 * @Description:扫码结果页面
 * @Autor: ZmSama
 * @Date: 2020-08-24 09:53:02
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class Result extends React.Component {
  // 去车牌录入界面
  gotoSearchPage = () => {
    this.props.navigation.navigate('LicensePlate');
  };
  //   确认
  confirm = () => {
    console.log('111');
  };
  // 取消
  cancel = () => {
    console.log('222');
  };
  render() {
    const width = Dimensions.get('window').width;
    return (
      <View style={styles.resultWrap}>
        {/* 上边卡片 */}
        <View style={styles.topCard}>
          {/* 带颜色提示 */}
          <View style={styles.topTips}>
            <View style={styles.left}>
              <View>
                <Text style={styles.topText}>数量</Text>
                <Text style={styles.bottomText}>160</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View>
                <Text style={styles.topText}>已扫数量</Text>
                <Text style={styles.bottomText}>50</Text>
              </View>
            </View>
          </View>

          {/* 中部表格 */}
          <View style={styles.middleTable}>
            <View style={styles.firstRow}>
              <View style={{flex: 1}}>
                <Text>计划单号</Text>
              </View>
              <View
                style={{
                  flex: 3.3,
                  backgroundColor: 'rgb(242,242,242)',
                  height: 55,
                  justifyContent: 'center',
                  padding: 7,
                  marginLeft: 1,
                }}>
                <Text>SHB220080096</Text>
              </View>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: 'rgb(242,242,242)',
                  height: 55,
                  justifyContent: 'center',
                  marginLeft: 3,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  10
                </Text>
              </View>
            </View>
            <View style={styles.sencondRow}>
              <View style={{flex: 1}}>
                <Text style={{textAlign: 'right', paddingRight: 8}}>料号</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: 'rgb(242,242,242)',
                  height: 50,
                  justifyContent: 'center',
                  padding: 7,
                }}>
                <Text>0.B05010.0030</Text>
              </View>
            </View>
            <View style={styles.threeRow}>
              <View style={{flex: 1}}>
                <Text style={{textAlign: 'right', paddingRight: 8}}>规格</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  height: 60,
                  backgroundColor: 'rgb(242,242,242)',
                  padding: 7,
                  marginTop: 4,
                }}>
                <Text>105/φ127×18/ASH80811S/1840/黑色亚光/NO</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 中间搜索 */}

        <TouchableOpacity
          onPress={this.gotoSearchPage}
          style={styles.middleSearch}>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'right', paddingRight: 6}}>车牌</Text>
          </View>
          <View
            style={{
              flex: 3,
              borderBottomWidth: 1,
              borderColor: '#ccc',
              height: 40,
            }}></View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderColor: '#ccc',
              height: 40,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingRight: 13,
              paddingBottom: 5,
            }}>
            <Image
              source={require('../../assets/sousuo.png')}
              style={{height: 20, width: 20}}></Image>
          </View>
        </TouchableOpacity>
        {/* 下面展示表格 */}
        <View style={styles.bottomTable}>
          <View style={styles.tableHead}>
            <Text style={styles.tableText}>序号</Text>
            <Text style={styles.tableText}>防伪码</Text>
            <Text style={styles.tableText}>数量</Text>
          </View>
          <ScrollView>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>1</Text>
              <Text style={styles.tableText}>5672771593223865</Text>
              <Text style={styles.tableText}>3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>1</Text>
              <Text style={styles.tableText}>5672771593223865</Text>
              <Text style={styles.tableText}>3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>1</Text>
              <Text style={styles.tableText}>5672771593223865</Text>
              <Text style={styles.tableText}>3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>1</Text>
              <Text style={styles.tableText}>5672771593223865</Text>
              <Text style={styles.tableText}>3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>1</Text>
              <Text style={styles.tableText}>5672771593223865</Text>
              <Text style={styles.tableText}>3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>1</Text>
              <Text style={styles.tableText}>5672771593223865</Text>
              <Text style={styles.tableText}>3</Text>
            </View>
          </ScrollView>
        </View>

        {/* 底部按钮 */}
        <View style={styles.bottomButton}>
          <TouchableOpacity
            onPress={this.confirm}
            style={{
              backgroundColor: 'rgb(rgb(1,128,128))',
              height: 50,
              width: width / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>确认</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.cancel}
            style={{
              height: 50,
              width: width / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>取消</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultWrap: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(245,245,245)',
  },
  topCard: {
    height: 250,
    width: '95%',
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: '2.5%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderRadius: 7,
    elevation: 4,
  },
  topTips: {
    flexDirection: 'row',
    height: 50,
  },
  left: {
    flex: 1,
    backgroundColor: 'rgb(1,128,128)',
    height: '100%',
    borderTopLeftRadius: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    backgroundColor: 'rgb(254,148,0)',
    height: '100%',
    borderTopRightRadius: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  bottomText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  middleTable: {
    padding: 10,
    height: 190,
  },
  firstRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sencondRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  threeRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSearch: {
    height: 60,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: '#fff',
    width: '95%',
    marginLeft: '2.5%',
    elevation: 4,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  bottomTable: {
    maxHeight: 258,
    // marginTop: 15,
    borderRadius: 7,
    width: '95%',
    marginLeft: '2.5%',
    elevation: 4,
  },
  tableHead: {
    backgroundColor: 'rgb(228,228,228)',
    height: 50,
    flexDirection: 'row',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  tableText: {
    lineHeight: 50,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#ccc',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
