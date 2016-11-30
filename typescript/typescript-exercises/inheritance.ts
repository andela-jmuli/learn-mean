// Inheritance demo

// class HappyMeal extends Menu{
//     constructor(item_list: Array<string>, total_pages: number){
//         super(item_list, total_pages);
//     }

//     list(){
//         console.log("my special menu");
//         for(var i=0; i<this.items.length; i++){
//             console.log(this.items[i]);
//         }
//     }
// }
// var children_menu = new HappyMeal(["candy", "drink", "toy"], 1);
// children_menu.list();

class Report{
    data: Array<string>;

    constructor(data: Array<string>){
        this.data = data;

    }
    run(){
        this.data.forEach(function(line){
            console.log(line);
        });
    }
}

var r: Report = new Report(['First Line', 'Second Line']);
r.run();

class TabbedReport extends Report{
    headers: Array<string>;

    constructor(headers: string[], values: string[]){
        super(values)
        this.headers = headers;
    }
    run(){
        console.log(this.headers);
        super.run();
    }
}
// r.run();