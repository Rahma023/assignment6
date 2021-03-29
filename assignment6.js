var kiosk={
    fruit:"Mango",
    setFruit(){
        return this.fruit;
    },
    getFruit(newFruits){
        return this.fruit=newFruits;
    }
}
console.log(kiosk.fruit);
kiosk.newFruits=["Apple","Banana","Orange"];
console.log(kiosk.newFruits);