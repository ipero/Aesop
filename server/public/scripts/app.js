var aesopFoods = ["Apples", "Pears", "Bananas", "Pizza"];
var currentRequest;
var correct = 0;
var incorrect = 0;

$(document).ready(function(){
  for(var i=0; i<aesopFoods.length;i++){
    $('.buttons').append('<button class="'+aesopFoods[i].toLowerCase()+'">'+aesopFoods[i]+'</button>');
  }
  $('.buttons').on('click', '.apples', feedWithApple);
  $('.buttons').on('click', '.pears', feedWithPear);
  $('.buttons').on('click', '.bananas', feedWithBanana);
  $('.buttons').on('click', '.pizza', feedWithPizza);

});

function feedWithApple(){
  //console.log("You clicked on Apples");
  $.ajax({
    type: "GET",
    url: "/food/apples",
    success: function(food){
      console.log("Here is food Aesop! ", food);
      feedAesopFood(food);
    }
  });
}

function feedWithPear(){
  //console.log("You clicked on Apples");
  $.ajax({
    type: "GET",
    url: "/food/pears",
    success: function(food){
      console.log("Here is food Aesop! ", food);
      feedAesopFood(food);
    }
  });
}

function feedWithBanana(){
  //console.log("You clicked on Apples");
  $.ajax({
    type: "GET",
    url: "/food/bananas",
    success: function(food){
      console.log("Here is food Aesop! ", food);
      feedAesopFood(food);
    }
  });
}

function feedWithPizza(){
  $.ajax({
    type: "GET",
    url: "/food/pizza",
    success: function(food){
      console.log("Here is food Aesop! ", food);
      feedAesopFood(food);
    }
  });
}


var timer = setInterval(aesopWantsFood, 5000);

function aesopWantsFood(){
  currentRequest = aesopFoods[randomNumber(0, aesopFoods.length - 1)];
  $('.aesop-wants').text(currentRequest);
}

function feedAesopFood(food){
  if(food == currentRequest){
    correct++;
    $('.correct').text(correct);
  } else {
    incorrect++;
    $('.incorrect').text(incorrect);
  }


  aesopWantsFood();
  clearInterval(timer);
  timer = setInterval(aesopWantsFood, 5000);
}

var randomNumber = function(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};
