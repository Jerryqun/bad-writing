---
nav: 算法/工具
group:
  title: 递归
  order: 2
toc: content
mobile: false
title: bfs
---

## BFS 广度优先搜搜

```js
// 与队列相关  先进先出
function BFS(入口坐标) {
    const queue = [] // 初始化队列queue
    // 入口坐标首先入队
    queue.push(入口坐标)
    // 队列不为空，说明没有遍历完全
    while(queue.length) {
        const top = queue[0] // 取出队头元素

        访问 top // 此处是一些和 top 相关的逻辑，比如记录它对应的信息、检查它的属性等等

        // 注意这里也可以不用 for 循环，视题意而定
        for(检查 top 元素出发能够遍历到的所有元素)  {
            queue.push(top能够直接抵达的元素)
        }

        queue.shift() // 访问完毕。将队头元素出队
    }
}


const tree = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        { value: "D", children: [] },
        { value: "E", children: [] },
      ]
    },
    {
      value: "C",
      children: [
        { value: "F", children: [] },
        { value: "G", children: [] },
      ]
    }
  ]
};

function bfs(tree) {
  const queue = [tree]; // BFS使用队列数据结构，初始时包含树的根节点

  while (queue.length > 0) {
    const currentNode = queue.shift(); // 从队列中移除并返回第一个节点
    console.log(currentNode.value); // 访问当前节点的值

    // 将当前节点的所有子节点加入队列末尾
    for (const child of currentNode.children) {
      queue.push(child);
    }
  }
}

// 执行广度优先搜索
bfs(tree);


```
