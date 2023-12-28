const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      this.potions.push(newPotion);
    },
    getTotalPrice() {
      let sum = 0;
      for(const potion of potions){
        sum += potion.price;
      };
      return sum;
    },
  };
  