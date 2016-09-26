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
console.log("pos", pos);
$('body').each(function() {
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var height = $element.height();
      console.log("height", height);
      $(this).css('backgroundPosition', '50% ' + (-(Math.round((pos) * velocity))) +  'px');
    });
  };

 $(window).bind('scroll', update);



// $(document).ready(function(){
//     $(".skills_imgs").hover(function(){
//       $(this).parent.lastchild
//       //Fade in
//         $('.skills_imgs').stop().animate({'margin-top': '200px'}, 1500);
//     }, function(){
//       //Fade out
//         $('.skill_tag').stop().animate({'margin-top': '50px'}, 1500);
//     });
// });











