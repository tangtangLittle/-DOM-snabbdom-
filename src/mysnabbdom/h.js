import vnode from './vnode'

//  编写一个低配版的h函数，这个函数必须接受3个参数，缺一不可
// 相当于它的重载功能较弱
// 也就是说，调用的时候形态必须是以下三种之一
// 形态一：h('div',{},'文字')
// 形态二：h('div',{},[]})
// 形态三：h('div',{},h())
export default function (sel, data, c) {
    // 检查参数的个数
    if (arguments.length != 3)
        throw new Error('对不起，h函数必须传入3个参数，我们是低配版h函数')
    // 检查参数c的类型
    if (typeof c == 'string' || typeof c == 'number') {
        // 说明现在调用函数是形态1
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        // 说明现在调用函数是形态2
        let children = [];
        // 遍历c
        for (let i = 0; i < c.length; i++) {
            // 检查c[i]必须是一个对象
            if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel')))
                throw new Error('传入的数组参数中有项不是h函数')
            // 这里不用执行c[i]，因为你的测试语句中已经执行了h()
            // 此时只要收集好就可以了
            children.push(c[i])
        }
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
        // 说明现在调用函数是形态3
        // 即，传入的c是唯一的children。不用执行c，以为测试语句中已经执行了c
        let children = c
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error('传入的第三个参数类型不对')
    }
}