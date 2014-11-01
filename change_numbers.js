<script>
$( document ).ready(function() {

  var $pricesArray = $(".sqs-money-native");

  function getNewTotal(pricesArray, i){
    var oldTotal = $($pricesArray[i]).text();
    var integerAmount = parseFloat(oldTotal);
    var newTotal = integerAmount * 1.1;
    var finalFloat = parseFloat(newTotal).toFixed(2);
    return finalFloat;
  };

  function addGstToPrice(){
    for (var i = 0; i < $pricesArray.size(); i++) {
      $($(".sqs-money-native")[i]).html(getNewTotal($pricesArray, i));
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
