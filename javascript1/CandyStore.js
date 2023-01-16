const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
function getCandy(candyStore, id){
    return candyStore.candies.find(candy => candy.id === id);
    }

    function getPrice(store, id) {
        const candy = getCandy(store, id);
        return candy ? candy.price : null;
      }

      function addCandy(candyStore, id, name, price) {
        candyStore.candies.push({ id, name, price, amount: 1 });
      }
      
      function buy(candyStore, id) {
        const candy = getCandy(candyStore, id);
        if (candy) {
          candyStore.cashRegister += candy.price;
          candy.amount--;
        }
      }
      

