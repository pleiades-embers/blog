// 导入需要的模块和方法
const AVLNode = require("../24-avl树");

/**
 * 测试balance方法
 */
describe('balance', () => {
   // 测试左旋转
   test('avl树测试左旋', () => {
      // 示例用法
      const avlTree = new AVLNode();
      avlTree.insert(2);
      avlTree.insert(0);
   });

   // 测试右旋转
   test('avl树测试右旋', () => {
      // arrange
      const node = createNodeWithBalanceFactor(-2, 0);
      // act
      const result = balance(node);
      // assert
      expect(result).toBe(node.left);
   });

   // 测试左右双旋转
   test('should rotate left and then right when balance factor of node is greater than 1 and balance factor of left child is less than 0', () => {
      // arrange
      const node = createNodeWithBalanceFactor(2, -1);
      // act
      const result = balance(node);
      // assert
      expect(result).toBe(node.right);
   });

   // 测试右左双旋转
   test('should rotate right and then left when balance factor of node is less than -1 and balance factor of right child is greater than 0', () => {
      // arrange
      const node = createNodeWithBalanceFactor(-2, 1);
      // act
      const result = balance(node);
      // assert
      expect(result).toBe(node.left);
   });

   // 测试边界和异常情况
   test('should return the node itself when balance factor of node is not greater than 1 or less than -1', () => {
      // arrange
      const node = createNodeWithBalanceFactor(0, 0);
      // act
      const result = balance(node);
      // assert
      expect(result).toBe(node);
   });
});