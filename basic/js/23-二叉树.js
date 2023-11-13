const tree = {
    value: 'A',
    left: {
      value: 'B',
      left: {
        value: 'D',
        left: null,
        right: null
      },
      right: {
        value: 'E',
        left: null,
        right: null
      }
    },
    right: {
      value: 'C',
      left: {
        value: 'F',
        left: null,
        right: null
      },
      right: {
        value: 'G',
        left: null,
        right: null
      }
    }
  };

// 输出二叉树结构
console.log(tree);