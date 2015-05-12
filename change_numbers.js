<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$( document ).ready(function() {

  $(".sqs-block-search").prependTo("#page")

  var $pricesArray = $(".sqs-money-native");

  $(".sold-out").html("Coming Soon")

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

  var $subtotalPrice = $(".sqs-fullpage-shopping-cart-content > .cart-container > table > tr > td.price");

  if ($subtotalElement.exists()){
      $subtotalElement.html("Subtotal (excluding GST)");
      $subtotalPrice.html("Prices (excludes GST)");
  }
  addGstToPrice();

  $( ".product-variants" ).change(function() {

    var $pricesArray = $(".sqs-money-native");


    function getNewTotal(pricesArray, i){
      var oldTotal = $($pricesArray[i]).text();
      var integerAmount = parseFloat(oldTotal);
      var newTotal = integerAmount * 1.1;
      var finalFloat = parseFloat(newTotal).toFixed(2);
      return finalFloat;
    };

    function addGstToPrice(){
      $($(".sqs-money-native")[0]).html(getNewTotal($pricesArray, 0));
    };

    addGstToPrice();

  });

});
</script>
