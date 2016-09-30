$("#composer").on("click",function(){
  $("#Intro").toggle();
  $("#Composer_Site").toggle();
  $("body").css('background-image','url("css/images/cool-music-wallpapers-for-android.jpg")');
})

$("#sft_dev").on("click",function(){
  $("#Intro").toggleClass('hidden');
  $("#Sft_Site").toggleClass('hidden');
  $("body").css('background-image','url("css/images/blueBG.jpg")');
})

$(".brand-logo").on("click",function(){
  $("#Intro").toggleClass('hidden');
  $("#Sft_Site").addClass('hidden');
  $("#Composer_Site").addClass('hidden');
  $("body").css('background-image','url("css/images/WildBillsBackground.png")');
})

var velocity = .5;

function update(){
var pos = $(window).scrollTop();
$('body').each(function() {
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var height = $element.height();
      $(this).css('backgroundPosition', '50% ' + (-(Math.round((pos) * velocity))) +  'px');
    });
  };

 $(window).bind('scroll', update);

// var isHovered = $('#elem').is(":hover");
var currentHoverEle = $(this).parent().siblings()

function growingChecker(animation_identifer){
  var isGrowing = true;
}

// Animate Skills tag
$(".skills_imgs").hover(
  // on hover
  function(){
    var currentHoverEle = $(this).parent().siblings()
    var fontIncreaser = 14;
    var fontAnimation = setInterval(
      function() {
        // Check if the person has un-hovered before the animation is complete
        if (currentHoverEle.css("font-size") != fontIncreaser + "px") {
          clearInterval(fontAnimation);
        };
        if (currentHoverEle.css("font-size") <= "20px") {
          // Increase the size of the font
          fontIncreaser += .2;
          fontIncreaser=Math.round(fontIncreaser*100)/100
          currentHoverEle.css("font-size", fontIncreaser)
        } else {
          clearInterval(fontAnimation);
        }
      },5
    );
  },
  // after leaving hover
  function(){
    var currentHoverEle = $(this).parent().siblings()
    var fontIncreaser = 20;
    var fontAnimation = setInterval(
      function() {
        if (currentHoverEle.css("font-size") >= "14px") {
          // Increase the size of the font
          fontIncreaser -= .2;
          currentHoverEle.css("font-size", fontIncreaser)
        } else {
          currentHoverEle.css("font-size", "14px")
          clearInterval(fontAnimation);
        }
      },5
    );
  }
)


