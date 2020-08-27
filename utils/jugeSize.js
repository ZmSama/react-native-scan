/*
 * @Description:动态计算类型函数,用于图标、单选框
 * @Autor: ZmSama
 * @Date: 2020-08-27 14:09:58
 */

export default function (type) {
  switch (type) {
    case 'mini':
      return {
        W: 15,
        H: 15,
      };
    case 'small':
      return {
        W: 20,
        H: 20,
      };

    case 'midle':
      return {
        W: 25,
        H: 25,
      };

    case 'large':
      return {
        W: 30,
        H: 30,
      };
    default:
      return {
        W: 15,
        H: 15,
      };
  }
}
