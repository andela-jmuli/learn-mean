// Inheritance demo

class HappyMeal extends Menu{
    constructor(item_list: Array<string>, total_pages: number){
        super(item_list, total_pages);
    }

    list(){
        console.log("my special menu");
        for(var i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}
// var children_menu = new HappyMeal(["candy", "drink", "toy"], 1);
// children_menu.list();