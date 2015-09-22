<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
$( document ).ready(function() {

  var pathname = window.location.pathname;

  if(pathname == "/commerce/order-confirmed") {
    throw new Error("Does not need to run (order confirmation page)");
  }

  $(".sqs-block-search").prependTo("#page")

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

<script src="https://s3.amazonaws.com/f.cl.ly/items/0A2z3k47270t3S3z3B1M/subbscribe.js"></script>
<script>
  $('body').subbscribe({
    list: "MailChimp",
    url : "//cachingsupplies.us10.list-manage.com/subscribe/post?u=a5fe3c7ab391a2b25a06a6c79&amp;id=5905952226",
    title: "10% off! When you subscribe to CachingSupplies News",
    text: "You will also then learn about great new products, monthly specials and much more!",
    name: "Matthew & the team",
    thumbnail: "https://s3.amazonaws.com/f.cl.ly/items/0w2B1N3I2U3Y1p1j2k2B/caching_supplies_team.jpeg",
    emailonly: false
  });
</script>
