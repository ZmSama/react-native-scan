/*
 * @Description:首页
 * @Autor: ZmSama
 * @Date: 2020-08-20 17:51:35
 */
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SwitchButton from '../../components/SwitchButton';
export default class Home extends React.Component {
  state = {
    planNo: 'SHB2208000862',
    shippingDate: '2020-8-31',
    qrRuslt: '默认值',
  };

  // 开始扫码
  startQrCode = () => {
    console.log('1111');
    this.props.navigation.navigate('ScannerScreen', {
      getScreenData: (data) => {
        this.setState({
          qrRuslt: data,
        });
      },
    });
  };

  // 防伪扫描
  toSecurityScan = () => {
    this.props.navigation.navigate('SecurityScan');
  };

  // 去图表页
  toChartView = () => {
    this.props.navigation.navigate('Echart');
  };
  //
  switchChange = (status) => {
    console.log(status);
  };

  render() {
    return (
      <View>
        {/* 扫码区域 */}
        <View style={styles.topQrCode}>
          <TouchableOpacity onPress={this.startQrCode}>
            <View style={styles.QrCodeImg}>
              <Image
                source={require('../../assets/saoma.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* 当前扫出的结果 */}
        <View style={styles.currentQrCode}>
          <View style={styles.titleTop}>
            <View style={styles.titleLeft}>
              <Text style={{color: '#fff', fontSize: 11}}>计划数量</Text>
              <Text style={{color: '#fff', fontSize: 16}}>910</Text>
            </View>
            <View style={styles.titleRight}>
              <Text style={{color: '#fff', fontSize: 11}}>已扫数量</Text>
              <Text style={{color: '#fff', fontSize: 16}}>50</Text>
            </View>
          </View>

          {/* 计划单号 */}
          <View style={styles.QrCodeOutput}>
            <Text style={styles.label}>计划单号</Text>
            <TextInput
              value={this.state.planNo}
              style={styles.input}></TextInput>
          </View>
          {/* 出货日期 */}
          <View style={styles.QrCodeOutput}>
            <Text style={styles.label}>出货日期</Text>
            <TextInput
              value={this.state.shippingDate}
              style={styles.input}></TextInput>
          </View>
        </View>

        {/*  */}
        <View style={styles.bottomTable}>
          <View style={styles.tableHead}>
            <Text style={[styles.headTitle, styles.firstHead]}>行号</Text>
            <Text style={[styles.headTitle, styles.sencondHead]}>料号</Text>
            <Text style={styles.headTitle}>计划数量</Text>
            <Text style={styles.headTitle}>已扫数量</Text>
            <Text style={styles.headTitle}>扫描</Text>
          </View>
          <ScrollView style={styles.scrollWarp}>
            {/* 循环下面这个 */}
            <View style={styles.tablein}>
              <Text style={[styles.tableTd, styles.firstTd]}>10</Text>
              <Text style={[styles.tableTd, styles.sencondTd]}>0.86565656</Text>
              <Text style={styles.tableTd}>160</Text>
              <Text style={styles.tableTd}>0</Text>
              <TouchableOpacity
                onPress={this.toSecurityScan}
                style={[styles.tableTd, styles.QrImg]}>
                <Image
                  source={require('../../assets/saoma.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* 点击跳转到图表页 */}

        <TouchableOpacity onPress={this.toChartView}>
          <View style={styles.toEcharts}>
            <Text style={{color: '#fff'}}>点击跳转到图表页</Text>
          </View>
        </TouchableOpacity>

        <Text>扫码结果：{this.state.qrRuslt}</Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <SwitchButton change={this.switchChange}></SwitchButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topQrCode: {
    width: '95%',
    height: 40,
    backgroundColor: '#fff',
    marginLeft: '2.5%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 10,
    elevation: 4,
  },
  QrCodeImg: {
    height: 30,
    width: 30,
  },
  currentQrCode: {
    height: 190,
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 10,
    borderRadius: 5,
    elevation: 4,
    backgroundColor: '#fff',
  },
  titleTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleLeft: {
    flex: 1,
    backgroundColor: 'rgb(1,128,128)',
    alignItems: 'center',
    height: 45,
    paddingTop: 5,
    borderTopLeftRadius: 5,
    borderRightWidth: 1,
    borderColor: 'rgb(1,128,128)',
  },
  titleRight: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(254,148,0)',
    height: 45,
    paddingTop: 5,
    borderTopRightRadius: 5,
    borderWidth: 0,
  },
  QrCodeOutput: {
    flexDirection: 'row',
    padding: 5,
    height: 50,
    marginTop: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: 200,
    flex: 4,
  },
  label: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 40,
    color: 'rgba(0,0,0,.6)',
  },
  bottomTable: {
    maxHeight: 220,
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 10,
  },
  scrollWarp: {
    // flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 3,
  },
  tableHead: {
    flexDirection: 'row',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    // elevation: 4,
  },
  headTitle: {
    textAlign: 'center',
    flex: 1,
    backgroundColor: 'rgb(228,228,228)',
    height: 20,
    fontSize: 12,
  },
  firstHead: {
    textAlign: 'left',
    paddingLeft: 10,
    flex: 0.3,
    // borderRightWidth: 1,
    // borderColor: 'rgb(228,228,228)',
  },
  sencondHead: {
    flex: 1.7,
  },
  tablein: {
    flexDirection: 'row',
  },
  tableTd: {
    textAlign: 'center',
    flex: 1,
    borderBottomWidth: 1,
    height: 40,
    lineHeight: 40,
    borderColor: 'rgb(228,228,228)',
    color: 'rgba(0,0,0,0.5)',
  },
  firstTd: {
    flex: 0.3,
    paddingLeft: 9,
  },
  sencondTd: {
    flex: 1.7,
  },
  QrImg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  toEcharts: {
    marginLeft: '29%',
    marginTop: 30,
    backgroundColor: 'blue',
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
