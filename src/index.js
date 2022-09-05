import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const myVnode1 = h('ul', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E')
]);

/* const myVnode1 = h('ul', {}, [
    h('li', {}, '嘻嘻'),
    h('li', {}, '哈哈'),
    h('li', {}, [
        h('div', {}, [
            h('ol', {}, [
                h('li', {}, 'A'),
                h('li', {}, 'B'),
                h('li', {}, 'C'),
            ])
        ])
    ]),
    h('li', {}, h('span', {}, '')),
]) */
/* const myVnode1 = h('ul', {}, [
    h('p', {}, 'A'),
    h('p', {}, 'B'),
    h('p', {}, 'C'),
]) */
// 得到盒子和按钮
const container = document.getElementById('container')
const btn = document.getElementById('btn')
// 第一次上树
patch(container, myVnode1)

// 新节点
const myVnode2 = h('ul', {}, [
    h('li', { key: 'Q' }, 'QQQ'),
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E')
]);

btn.onclick = function () {
    patch(myVnode1, myVnode2)
}
/* const myVode2 = h('ul', {}, [
    h('li', {}, '苹果'),
    h('li', {}, '西瓜'),
    h('li', {}, [
        h('div', {}, [
            h('p', {}, '😄'),
            h('p', {}, '🐰')
        ])
    ]),
    h('li', {}, '火龙果')
])
console.log(myVode2) */