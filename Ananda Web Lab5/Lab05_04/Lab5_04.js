var quantity = 0;
      function Price() {
        var price = quantity * 135; 
        var discount = document.getElementById("discount").value;
        if (discount > price) {
          document.getElementById("price").innerHTML = "Error";
          document.getElementById("price").classList.add("error");
        } else {
          var finalPrice = price - discount;
          document.getElementById("price").innerHTML = "Rs." +finalPrice;
          document.getElementById("quantity-number").innerHTML = quantity;
          document.getElementById("price").classList.remove("error");
        }
      }
      function increase() {
        quantity++;
        Price();
      }
      function decrease() {
        if (quantity > 0) {
          quantity--;
          Price();
        }
      }