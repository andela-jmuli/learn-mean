// Inheritance demo
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Report = (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) {
            console.log(line);
        });
    };
    return Report;
}());
var r = new Report(['First Line', 'Second Line']);
r.run();
var TabbedReport = (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(headers, values) {
        _super.call(this, values);
        this.headers = headers;
    }
    TabbedReport.prototype.run = function () {
        console.log(this.headers);
        _super.prototype.run.call(this);
    };
    return TabbedReport;
}(Report));
r.run();
