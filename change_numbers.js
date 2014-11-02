<script>
$( document ).ready(function() {

  var $prices = $(".sqs-money-native");

  function newTotal(prices, i){
    var oldTotal = $($prices[i]).text();
    var integerAmount = parseFloat(oldTotal);
    var newTotal = integerAmount * 1.1;
    var finalFloat = parseFloat(newTotal).toFixed(2);
    return finalFloat;
  };

  function addGstToPrice(){
    for (var i = 0; i < $prices.size(); i++) {
      $($(".sqs-money-native")[i]).html(newTotal($pricesArray, i));
    };
  };

  $.fn.exists = function () {
    return this.length !== 0;
  };

  var $subtotalElement = $(".sqs-fullpage-shopping-cart-content > .cart-container > .subtotal >.label");

  if ($subtotalElement.exists()){
      $subtotalElement.html("Subtotal (excluding GST)");
  }

  addGstToPrice();

});
</script>
