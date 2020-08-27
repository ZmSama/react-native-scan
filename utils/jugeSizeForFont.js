/*
 * @Description:动态计算字号大小
 * @Autor: ZmSama
 * @Date: 2020-08-27 14:37:33
 */
export default function (type) {
  switch (type) {
    case 'mini':
      return 12;

    case 'small':
      return 16;

    case 'midle':
      return 20;

    case 'large':
      return 24;

    default:
      return 14;
  }
}
