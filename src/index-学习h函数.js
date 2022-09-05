import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import {h} from 'snabbdom/h'

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule ]);

// 创建虚拟节点
let myVode = h('a', {
    props: {
        href: 'http://www.baidu.com',
        target: '_blank'
    }
}, '百度一下')
console.log(myVode);

const myVode2 = h('div', {class: {'box': true}}, '我是一个盒子');

// h函数嵌套
const myVode3 = h('ul', [
    h('li', '苹果'),
    h('li', '西瓜'),
    h('li', [
        h('div', [
            h('p', '😄'),
            h('p', '🐰')
        ])
    ]),
    h('li', '火龙果')
])

// 让虚拟节点上树
const container = document.getElementById('container');
patch(container, myVode3)