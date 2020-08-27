import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
  Animated,
  Easing,
  Image,
  Alert,
  Vibration,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class ScannerScreen extends React.Component {
  static navigationOptions = {
    title: 'Scanner',
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      animation: new Animated.Value(0),
      isOpenLighter: false,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.startAnimation();
    });
  }

  componentWillUnmount() {
    this.setState({
      show: false,
    });
  }

  //   开始动画
  startAnimation() {
    if (this.state.show) {
      this.state.animation.setValue(0);
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => this.startAnimation());
    }
  }

  //   开关灯操作
  toggleLighter = () => {
    this.setState({
      isOpenLighter: !this.state.isOpenLighter,
    });
  };

  render() {
    let scanView = null;
    if (Platform.OS === 'ios') {
      scanView = (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          flashMode={RNCamera.Constants.FlashMode.auto}
          onBarCodeRead={(e) => this.barcodeReceived(e)}>
          <View
            style={{
              height: (height - 264) / 3,
              width: width,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.itemStyle} />
            <View style={styles.rectangle}>
              <Image
                style={[
                  styles.rectangle,
                  {position: 'absolute', left: 0, top: 0},
                ]}
                source={require('../assets/icon_scan_rect.png')}
              />
              <Animated.View
                style={[
                  styles.animatedStyle,
                  {
                    transform: [
                      {
                        translateY: this.state.animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 200],
                        }),
                      },
                    ],
                  },
                ]}></Animated.View>
            </View>
            <View style={styles.itemStyle} />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: width,
              alignItems: 'center',
            }}>
            <Text style={styles.textStyle}>将二维码放入框内，即可自动扫描</Text>
          </View>
        </RNCamera>
      );
    } else {
      scanView = (
        <>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            googleVisionBarcodeType={
              RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType
                .QR_CODE
            }
            flashMode={RNCamera.Constants.FlashMode.auto}
            onBarCodeRead={(e) => this.barcodeReceived(e)}>
            <View
              style={{
                height: (height - 244) / 3,
                width: width,
                backgroundColor: 'rgba(0,0,0,0.5)',
                alignItems: 'center',
              }}>
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
                  source={require('../assets/icon_scan_rect.png')}
                />
                <Animated.View
                  style={[
                    styles.animatedStyle,
                    {
                      transform: [
                        {
                          translateY: this.state.animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200],
                          }),
                        },
                      ],
                    },
                  ]}></Animated.View>
              </View>
              <View style={styles.itemStyle} />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: width,
                alignItems: 'center',
              }}>
              <Text style={styles.textStyle}>
                将二维码放入框内，即可自动扫描
              </Text>
              <View style={styles.bottomOptions}>
                {/* 在此处加入开灯按钮 */}
                <TouchableOpacity onPress={this.toggleLighter}>
                  <View
                    style={
                      !this.state.isOpenLighter
                        ? styles.openLight
                        : styles.openLightActive
                    }>
                    <Image
                      source={require('../assets/lighter.png')}
                      style={styles.lighterStyle}></Image>
                  </View>
                </TouchableOpacity>
                {/* 手指 */}
                <View style={styles.figer}>
                  <Image
                    source={require('../assets/figer.png')}
                    style={styles.figerStyle}></Image>
                </View>
              </View>
            </View>
          </RNCamera>
        </>
      );
    }
    return <View style={styles.container}>{scanView}</View>;
  }

  barcodeReceived(e) {
    if (this.state.show) {
      this.state.show = false;
      if (e) {
        Vibration.vibrate([0, 500], false);
        let result = e.data;
        // this.props.navigation.state;
        // 新版改了参数传递的方式了，这里调用上一个屏幕传递过来的回调参数，把参数放入即可回调回相应的页面
        const {getScreenData} = this.props.route.params;
        getScreenData(result);
        this.props.navigation.goBack();
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
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  preview: {
    flex: 1,
  },
  itemStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: (width - 200) / 2,
    height: 200,
  },
  textStyle: {
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  animatedStyle: {
    height: 2,
    backgroundColor: '#00c050',
  },
  rectangle: {
    height: 200,
    width: 200,
  },
  bottomOptions: {
    flexDirection: 'row',
    marginTop: 60,
  },
  openLight: {
    backgroundColor: '#ccc',
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  openLightActive: {
    backgroundColor: 'rgb(0,127,127)',
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  figer: {
    backgroundColor: '#ccc',
    height: 70,
    width: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  figerStyle: {
    height: 30,
    width: 30,
  },
  lighterStyle: {
    height: 30,
    width: 30,
  },
});
