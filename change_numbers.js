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

  var $eventContentSelector = $(".sqs-events-collection-list")
  var eventContent = '<p>These are the events that Caching Supplies is able to ship to as "Event Pickup". This means that we will have someone either at the event or bring orders to these events meaning you can get free shipping<p></hr></br>'

  function addEventContent(){
    $eventContentSelector.prepend(eventContent);
  };


  if (window.location.pathname === "/event-pickup/") {
    addEventContent();
  };

});
</script>

<script src="https://s3.amazonaws.com/f.cl.ly/items/2D1V2u3o1j003D1U0z1X/subbscribe.js"></script>
<script>
  $('body').subbscribe({
    list: "MailChimp",
    url : "//cachingsupplies.us10.list-manage.com/subscribe/post?u=a5fe3c7ab391a2b25a06a6c79&amp;id=5905952226",
    color: "#324F17",
    title: "5% off your first order when you sign up to CachingSupplies News.",
    text: "You will also then learn about great new products, monthly specials and much more!",
    name: "Matthew & the team",
    thumbnail: "https://s3.amazonaws.com/f.cl.ly/items/0w2B1N3I2U3Y1p1j2k2B/caching_supplies_team.jpeg",
    emailonly: false
  });
</script>

<script type="text/javascript" data-cfasync="false">(function () { var done = false;var script = document.createElement('script');script.async = true;script.type = 'text/javascript';script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';document.getElementsByTagName('HEAD').item(0).appendChild(script);script.onreadystatechange = script.onload = function (e) {if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {var w = new PCWidget({ c: '3583e936-7377-4b39-a0a2-c59e9d42d171', f: true });done = true;}};})();</script>

<script>
  $('.sqs-add-to-cart-button').on('click', function() {
  	ga('send', 'event', 'button', 'click', 'add_to_cart_button');
   });

  $('.checkout-button ').on('click', function() {
    ga('send', 'event', 'button', 'click', 'checkout_button');
  });

  $('.subb-button').on('click', function() {
   ga('send', 'event', 'button', 'click', 'sign_up_to_newsletter_model');
  });

  $('.close-x').on('click', function() {
  ga('send', 'event', 'button', 'click', 'close_subscription_pop_up');
  });

  $('.sqs-search-ui-text-input').on('click', function() {
  ga('send', 'event', 'button', 'click', 'search_field_clicked_into');
  });

 </script>
