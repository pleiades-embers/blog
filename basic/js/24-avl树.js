// 假设你正在开发一个在线购物网站，其中有一个需求是根据用户的搜索关键字进行商品的自动补全提示。
// 你希望在用户输入关键字的同时，能够实时地提供与关键字相关的商品名称供用户选择。
// 在这种情况下，你可以使用一个基于AVL树的数据结构来管理商品名称的索引。以下是一个简化的示例：


class AVLNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
module.exports= class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // 获取节点的高度
    getHeight(node) {
      if (node === null) return 0;
      return node.height;
    }
  
    // 平衡因子: 左子树高减去右子树高
    getBalanceFactor(node) {
      return this.getHeight(node.left) - this.getHeight(node.right);
    }

    /**
     * 执行平衡操作
     * 左旋转：当节点的平衡因子大于1且节点左子树的平衡因子大于等于0时，进行右旋转。
     * 右旋转：当节点的平衡因子小于-1且节点右子树的平衡因子小于等于0时，进行左旋转。
     * 左右双旋转：当节点的平衡因子大于1且节点左子树的平衡因子小于0时，先对节点的左子树进行左旋转，然后对节点进行右旋转。
     * 右左双旋转：当节点的平衡因子小于-1且节点右子树的平衡因子大于0时，先对节点的右子树进行右旋转，然后对节点进行左旋转。
     */
    balance(node) {
      // 左旋转
      if (this.getBalanceFactor(node) > 1 && this.getBalanceFactor(node.left) >= 0) {
        return this.rotateRight(node);
      }
  
      // 右旋转
      if (this.getBalanceFactor(node) < -1 && this.getBalanceFactor(node.right) <= 0) {
        return this.rotateLeft(node);
      }
  
      // 左右双旋转
      if (this.getBalanceFactor(node) > 1 && this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
  
      // 右左双旋转
      if (this.getBalanceFactor(node) < -1 && this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    // 右旋转
    rotateRight(node) {
      const newRoot = node.left;
  
      node.left = newRoot.right;
      newRoot.right = node;
  
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
      newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;
  
      return newRoot;
    }
  
    // 左旋转
    rotateLeft(node) {
      const newRoot = node.right;
  
      node.right = newRoot.left;
      newRoot.left = node;
  
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
      newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;
  
      return newRoot;
    }
  
    // 插入节点
    insert(value) {
      this.root = this.insertNode(this.root, value);
    }
  
    insertNode(node, value) {
      if (node === null) {
        return new AVLNode(value);
      }
  
      if (value < node.value) {
        node.left = this.insertNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.insertNode(node.right, value);
      } else {
        return node; // 避免插入重复的值
      }
      //更新节点高度
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
      //avl树平衡操作
      node = this.balance(node);
      return node;
    }
  
    // 搜索关键字，获取相关的商品名称
    search(keyword) {
      const result = [];
      this.searchNode(this.root, keyword, result);
      return result;
    }
  
    searchNode(node, keyword, result) {
      if (node !== null) {
        if (node.value.startsWith(keyword)) {
          result.push(node.value);
        }
  
        if (keyword < node.value) {
          this.searchNode(node.left, keyword, result);
        } else {
          this.searchNode(node.right, keyword, result);
        }
      }
    }
  }
  


//   在上述示例中，AVL树用于管理商品名称的索引，通过插入节点和搜索关键字的方式提供自动补全提示功能。当用户输入关键字时，调用AVL树的search方法，获取与关键字匹配的商品名称，最后将结果展示给用户