/*
 * @Description:实例图表
 * @Autor: ZmSama
 * @Date: 2020-08-22 09:09:14
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Echarts from 'native-echarts';
import PieChart from './PieChart';

export default class Echart extends Component {
  render() {
    const option = {
      title: {
        text: 'ECharts demo',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    return (
      <>
        <Echarts option={option} height={300} />
        <View>
          <PieChart></PieChart>
        </View>
      </>
    );
  }
}
