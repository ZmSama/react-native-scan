import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Alert,
  Vibration,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Tools from './Tools';

export default class SecurityScan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      loadingPosition: new Animated.Value(0),
      isOpenLighter: false,
      flashMode: RNCamera.Constants.FlashMode.off,
      currentAnimation: null,
      bottomTableOriginHeight: new Animated.Value(290),
      topScanOriginHeight: new Animated.Value(500),
      isOpen: false,
      isOpenTools: false,
    };
  }
  componentDidMount() {
    this.setState({
      currentAnimation: this.startAnimation(),
    });

    setTimeout(() => {
      // 启动动画
      this.state.currentAnimation.start();
    }, 200);
  }
  //   开始动画函数，该函数返回一个动画
  startAnimation = () => {
    return (
      // 循环执行动画
      Animated.loop(
        // 定义一个动画序列，用于分解扫码动画往下和往上运动的效果
        Animated.sequence([
          // 定义一个基于1.5s的简单动画,从上到下
          Animated.timing(this.state.loadingPosition, {
            toValue: 280,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          // 接着从下到上
          Animated.timing(this.state.loadingPosition, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ]),
      )
    );
  };

  // 结束动画函数,传入当前运动的函数对象
  stopAnimation = (currentAnimation) => {
    console.log('关闭了');

    currentAnimation.stop();
    // 重置开始位置
    this.setState({
      loadingPosition: new Animated.Value(0),
    });
  };
  //   扫码结果处理
  barcodeReceived(e) {
    if (this.state.show) {
      this.setState({
        show: false,
      });
      if (e) {
        // 此处是扫码成功，得到结果，停止动画
        Vibration.vibrate([0, 500], false);
        let result = e.data;
        console.log(result);
        // this.stopAnimation(this.state.currentAnimation);
      } else {
        Alert.alert(
          '提示',
          '扫描失败，请将手机对准二维码重新尝试',
          [
            {
              text: '确定',
              onPress: () => {
                this.setState({
                  show: true,
                });
              },
            },
          ],
          {cancelable: false},
        );
      }
    }
  }

  // 下面表格和上面扫码区域高度变化动画
  increaHeightAnimation = () => {
    return Animated.parallel([
      // 让下面表格高度增长
      Animated.timing(this.state.bottomTableOriginHeight, {
        toValue: 730,
        duration: 800,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
      // 让上面的扫码区域减少
      Animated.timing(this.state.topScanOriginHeight, {
        toValue: 70,
        duration: 800,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
    ]);
  };
  declineHeightAnimation = () => {
    return Animated.parallel([
      // 让下面表格高度增长
      Animated.timing(this.state.bottomTableOriginHeight, {
        toValue: 290,
        duration: 800,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
      // 让上面的扫码区域减少
      Animated.timing(this.state.topScanOriginHeight, {
        toValue: 500,
        duration: 800,
        useNativeDriver: false,
        easing: Easing.bounce,
      }),
    ]);
  };

  // 返回
  goback = () => {
    this.stopAnimation(this.state.currentAnimation);
    this.props.navigation.navigate('Home');
  };

  // 收起扫码面板
  closeScanView = () => {
    this.stopAnimation(this.state.currentAnimation);
    this.increaHeightAnimation().start((finish) => {
      this.setState({
        isOpen: true,
      });
      console.log(finish);
    });
  };
  // 打开扫码面板
  openScanView = () => {
    this.setState({
      bottomTableOriginHeight: new Animated.Value(730),
      topScanOriginHeight: new Animated.Value(70),
    });
    setTimeout(() => {
      this.declineHeightAnimation().start((finish) => {
        this.setState({
          isOpen: false,
        });
        //
        console.log('这里是结束的');

        console.log(finish);
      });
    }, 100);
  };
  // 切换弹出的工具栏
  togglePople = () => {
    this.setState({
      isOpenTools: !this.state.isOpenTools,
    });
  };
  // 去结果页面
  toResultPage = () => {
    this.props.navigation.navigate('Result');
  };
  render() {
    return (
      <View style={{height: height}}>
        <Animated.View style={{height: this.state.topScanOriginHeight}}>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            googleVisionBarcodeType={
              RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType
                .QR_CODE
            }
            flashMode={this.state.flashMode}
            onBarCodeRead={(e) => this.barcodeReceived(e)}>
            <View
              style={{
                height: 170,
                width: width,
                backgroundColor: 'rgb(0,0,0)',
                opacity: 0.8,
                alignItems: 'center',
              }}>
              <View style={styles.rightStyle}>
                <TouchableOpacity
                  style={{marginLeft: 20, flex: 1}}
                  onPress={this.goback}>
                  <Image
                    source={require('../../assets/xiangzuo.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
                <View style={{flex: 6}}>
                  <Text
                    style={{
                      color: 'rgb(2,126,126)',
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '600',
                    }}>
                    防伪码扫描
                  </Text>
                </View>
                {/* 三点区域 */}
                <TouchableOpacity
                  style={{marginLeft: 20, flex: 0.5, position: 'relative'}}
                  onPress={this.togglePople}>
                  <Image
                    source={require('../../assets/sandianshuzhuode.png')}
                    style={{width: 20, height: 20}}
                  />
                  {this.state.isOpenTools ? (
                    <Tools></Tools>
                  ) : (
                    <View style={{width: 0, height: 0}}></View>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 20, flex: 0.5}}
                  onPress={this.toResultPage}>
                  <Image
                    source={require('../../assets/zhengque-copy.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
              {/* <Text style={{color: 'rgb(0,127,127)', fontSize: 16}}>
                    单据码扫描
                  </Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.itemStyle} />
              <View style={styles.rectangle}>
                <Image
                  style={[
                    styles.rectangle,
                    {position: 'absolute', left: 0, top: 0},
                  ]}
                  source={require('../../assets/icon_scan_rect.png')}
                />
                {/* 动画区域 */}
                <Animated.View
                  style={[
                    styles.animatedStyle,
                    {
                      transform: [
                        {
                          translateY: this.state.loadingPosition,
                        },
                      ],
                    },
                  ]}></Animated.View>
              </View>
              {/* 二维码右边区域 */}
              <View style={styles.itemStyle} />
            </View>
            {/* 下面阴影 */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgb(0,0,0)',
                opacity: 0.8,
                width: width,
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <TouchableOpacity onPress={this.closeScanView}>
                <View>
                  <Image
                    source={require('../../assets/xiangshangjiantouarrowup.png')}
                    style={{
                      height: 30,
                      width: 30,
                    }}
                  />
                  {/* <View style={styles.box} /> */}
                </View>
              </TouchableOpacity>
            </View>
          </RNCamera>
        </Animated.View>
        <Animated.View
          style={{
            height: this.state.bottomTableOriginHeight,
            backgroundColor: '#fff',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {this.state.isOpen ? (
              <View
                style={{
                  justifyContent: 'flex-start',
                  width: width,
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    width: width,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,0,0,0.9)',
                    }}>
                    <TouchableOpacity onPress={this.openScanView}>
                      <Image
                        style={{
                          width: 40,
                          height: 40,
                        }}
                        source={require('../../assets/arrow-bottom-copy-copy.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.bottomtableText, {flex: 0.5}]}>
                      序号
                    </Text>
                    <Text style={[styles.bottomtableText, {flex: 2}]}>
                      防伪码
                    </Text>
                    <Text style={styles.bottomtableText}>数量</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.bottomtableText, {flex: 0.5}]}>1</Text>
                    <Text style={[styles.bottomtableText, {flex: 2}]}>
                      56595262431654
                    </Text>
                    <Text style={styles.bottomtableText}>3</Text>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: 'flex-start',
                  width: width,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.bottomtableText, {flex: 0.5}]}>
                    序号
                  </Text>
                  <Text style={[styles.bottomtableText, {flex: 2}]}>
                    防伪码
                  </Text>
                  <Text style={styles.bottomtableText}>数量</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.bottomtableText, {flex: 0.5}]}>1</Text>
                  <Text style={[styles.bottomtableText, {flex: 2}]}>
                    56595262431654
                  </Text>
                  <Text style={styles.bottomtableText}>3</Text>
                </View>
              </View>
            )}
          </View>
        </Animated.View>
      </View>
    );
  }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#fff',
  },
  preview: {
    flex: 1,
  },
  itemStyle: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.8,
    width: (width - 310) / 2,
    height: 280,
  },

  animatedStyle: {
    height: 2,
    backgroundColor: 'rgb(1,128,128)',
  },
  rectangle: {
    height: 280,
    width: 310,
  },
  rightStyle: {
    width: width,
    height: height / 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 10,
  },
  bottomtableText: {
    flex: 1,
    color: 'rgb(1,124,124)',
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(1,124,124)',
  },
});
