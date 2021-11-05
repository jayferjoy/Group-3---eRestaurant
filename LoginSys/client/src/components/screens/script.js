$(document).ready(function() {

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Jay", 20);


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){

        	//qida
        case "Lyonnaise Potatoes": this.add(20 * quantity); break;
        case "Coq Au Vin": this.add(33 * quantity); break;
        case "Chicken Fricassee": this.add(45 * quantity); break;
        case "Cheesy Croissant Casserole": this.add(30 * quantity); break;
        case "Crêpes": this.add(15 * quantity); break;
        case "Quiche Lorraine": this.add(15 * quantity); break;
        case "Steak Frite Bites": this.add(25 * quantity); break;
        case "Easy French Onion Soup": this.add(35 * quantity); break;
        case "Apple Tart": this.add(10 * quantity); break;

        //icki
        case "cola": this.add(12 * quantity); break;
        case "fanta": this.add(15 * quantity); break;
        case "hell": this.add(13 * quantity); break;
		case "redbul": this.add(12 * quantity); break;
        case "vodka": this.add(10 * quantity); break;
        case "viski": this.add(14 * quantity); break;
        case "viski": this.add(35 * quantity); break;

        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent / 100);
        
    }
    
};


//cashRegister.applyStaffDiscount(me);


// Hide all table result divs
$("#rightpanel .table-result").hide();

//Toggle table result divs with clicking on related table

$("#rightpanel .contain").on("click", ".table", function() {

var tabid = $(this).attr("id");


$("#leftpanel .contain p").removeAttr("class");
$("#leftpanel .contain p").addClass(tabid);
$("#rightpanel").children(".table-result").hide();
$("#rightpanel").children("#table"+ tabid +"").toggle();


});

// Show the total bill
$("#rightpanel .contain .table p").html('Price: $' + cashRegister.total.toFixed(2) + '');



//add qida to result-panel by clicking qidalar

$("#leftpanel .contain p").click(function() {

var tabid = $(this).attr("class");

if(tabid == null){
	alert("Please select table");
}
else {

var orders = [];
var yemek = $(this).attr("id"); // get the value of attribute id
$("#rightpanel #table" + tabid + ".table-result p").append("<span>" + yemek + ",</span>");

}

// click on table result items for deleting them
$("#rightpanel #table" + tabid + ".table-result p").on("click", "span", function() {
$(this).remove();
});


// click to result table and show the price
$("#rightpanel #table" + tabid + ".table-result button#sum").click(function() {

var metn = $("#rightpanel #table" + tabid + ".table-result p").text(); // get the text of table result
var letterorders = metn.length; // count characters from metn text
var yemek2 = metn.substring(0, letterorders - 1); // cut the last comma 

var orders = yemek2.split(",");


var  count = {}; 
orders.forEach(function(i) { count[i] = (count[i]||0)+1;  });
cashRegister.total = 0;

for(u = 0; u < orders.length; u++) {
	//cashRegister.total = 0;
cashRegister.scan(orders[u],1);


}

console.log();
$("#rightpanel .contain #" + tabid + ".table p").html('Sum: ' + (cashRegister.total).toFixed(2) + '');


});

// here close the table and set the sum to zero
$("#rightpanel #table" + tabid + ".table-result button#close").click(function() {


cashRegister.total = 0;
$("#rightpanel .contain #" + tabid + ".table p").html('Sum: ' + (cashRegister.total).toFixed(2) + '');
$("#rightpanel #table" + tabid + ".table-result p").empty();


});


});


});