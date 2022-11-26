export interface Point {
  x: number
  y: number
}

export default class TouchCore {
  // 获取点
  getPoint(ev: TouchEvent, index: number): Point {
    return {
      x: Math.round(ev.touches[index].pageX),
      y: Math.round(ev.touches[index].pageY)
    }
  }

  // 获取向量
  getVector(p1: Point, p2: Point): Point {
    return {
      x: Math.round(p1.x - p2.x),
      y: Math.round(p1.y - p2.y)
    }
  }

  // 获取向量长度
  getLength(v1: Point) {
    return Math.sqrt(v1.x * v1.x + v1.y * v1.y)
  }

  // 获取旋转角度
  getAngle(v1: Point, v2: Point) {
    // 判断方向，顺时针为 1，逆时针为 -1
    const direction = v1.x * v2.y - v2.x * v1.y > 0 ? 1 : -1
    const len1 = this.getLength(v1)
    const len2 = this.getLength(v2)
    const mr = len1 * len2

    if (mr === 0) return 0
    // 通过数量积公式可以推导出
    // cos = (x1 * x2 + y1 * y2)/(|a| * |b|)
    const dot = v1.x * v2.x + v1.y * v2.y
    let r = dot / mr
    if (r > 1) r = 1
    if (r < -1) r = -1
    // 解值并结合方向转化为角度值
    return (Math.acos(r) * direction * 180) / Math.PI
  }

  // 解析 transform: matrix(1, 0, 0, 1, 0, 0) 的值
  matrixTo(matrix: string) {
    // 解析 matrix 字符串，分割为数组
    const arr = matrix.replace('matrix(', '').replace(')', '').split(',')
    // 根据不等式计算出 rotate 和 scale
    const cos = +arr[0]
    const sin = +arr[1]
    const tan = sin / cos
    const rotate = (Math.atan(tan) * 180) / Math.PI
    const scale = cos / Math.cos((Math.PI / 180) * rotate)

    // 传入编译后的各项参数
    return {
      x: parseInt(arr[4]),
      y: parseInt(arr[5]),
      scale,
      rotate
    }
  }
}
