// Example Class definition

class Greeting {
    greet(): void{
        console.log("Hello World!")
    }
}
// var obj = new Greeting();
// obj.greet();

class Menu{
    items: Array<string>;
    pages: number;

    constructor(item_list: Array<string>, total_pages: number){
        this.items = item_list;
        this.pages = total_pages;
    }
    list(){
        console.log("Our menu for today:");
        for(var i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

var sundayMenu = new Menu(["pancakes", "waffles", "orange_juice"], 1);
sundayMenu.list();