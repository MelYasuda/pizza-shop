// business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(){
  // Loop through toppins array and add the corresponding value (price) of toppings variable
   var toppingTotalPrice = 0;
   this.toppings.forEach(function(topping){
   toppingTotalPrice += toppingsPrices[topping];
  });

  return size[this.size] + toppingTotalPrice;
}

var size = {
  small: 7,
  medium: 9,
  large: 10
}

var toppingsPrices = {
  cheese: 1,
  pepperoni: 1,
  anchovy: 2,
  pineapple: 3
}

// user interface
$(document).ready(function(){

  $("form#choice-form").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#size").val();
    // store checked values inside an array
    var inputtedToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var inputtedTopping = $(this).val();
        inputtedToppings.push(inputtedTopping);
    });
    var newPizza = new Pizza (inputtedSize, inputtedToppings);

    if(inputtedSize === "none" || inputtedToppings.length === 0) {
      alert("Please select size and toppings.");
      $('#myModal').modal('hide')
    } else {
      $("#price").text("$" + newPizza.price());
    }
  });
});
