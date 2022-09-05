// 真正创建节点,将vnode创建为DOM，是孤儿节点，不进行插入
export default function createElement(vnode) {
    // console.log('目的是把虚拟节点', vnode, '真正变为dom')
    let domNode = document.createElement(vnode.sel)
    // 有子节点还是文本？
    if (vnode.text != '' && (vnode.children == undefined || vnode.children.length === 0)) {
        // 内部是文字
        domNode.innerText = vnode.text;
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        // 它内部是子节点，就要递归创建节点
        for (let i = 0; i < vnode.children.length; i++) {
            // 得到当前这个children
            let ch = vnode.children[i];
            // 创建出它的DOM，一旦调用了createElement意味着：创建出dom了，并且它的elm属性指向了创建出的DOM，但是还没有上树，
            // 是一个孤儿节点
            let chDOM = createElement(ch);
            // 上树
            domNode.appendChild(chDOM);
        }
    }
    // 补充elm属性
    vnode.elm = domNode;
    // 返回elm， elm属性是一个纯dom
    return vnode.elm;
}