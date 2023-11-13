const inventory = [
    { name: "芦笋", type: "蔬菜", quantity: 9 },
    { name: "香蕉", type: "水果", quantity: 5 },
    { name: "山羊", type: "肉", quantity: 23 },
    { name: "樱桃", type: "水果", quantity: 12 },
    { name: "鱼", type: "肉", quantity: 22 },
];
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
