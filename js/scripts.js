// business logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(){
   var toppingPrice = 0;
   this.toppings.forEach(function(topping){
   toppingPrice += toppings[topping];
  });

  return size[this.size] + toppingPrice;
    // toppings[this.toppings[0]] + toppings[this.toppings[1]] +toppings[this.toppings[2]] +toppings[this.toppings[3]]);
}

var size = {
  small: 7,
  medium: 9,
  large: 10
}

var toppings = {
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
    var inputtedToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var inputtedTopping = $(this).val();
        inputtedToppings.push(inputtedTopping);
    });
    var newPizza = new Pizza (inputtedSize, inputtedToppings);
    $("#price").append(newPizza.price());
  });
});
