$(document).ready(function() {
  // $(function() {
  //   $("#mainMenu").smartmenus()
  // })

  // $("li.level-1.has_children").each(function(index) {
  //   console.log(index + ": " + $(this).text())
  //   var linkText = $(this)
  //     .children("a")
  //     .text()
  //   var linkUrl = $(this)
  //     .children("a")
  //     .attr("href")
  //   var active = ""
  //   if (window.location.pathname == linkUrl) {
  //     active = " active"
  //   }

  //   $(this)
  //     .children("ul")
  //     .prepend(
  //       '<li class="level-2' +
  //         active +
  //         '"><a href="' +
  //         linkUrl +
  //         '">' +
  //         linkText +
  //         "</a></li>"
  //     )
  // })

  // homepage main slider.
  // $(".slideshowWrapper .slideshow").flexslider({
  //   animation: "slide",
  //   directionNav: true,
  //   controlNav: false,
  //   start: function(slider) {
  //     $("body").removeClass("loading")
  //   }
  // })
  // $(".javaSlideshow .miniSlideshow").flexslider({
  //   animation: "slide",
  //   directionNav: true,
  //   controlNav: false,
  //   controlsContainer: ".miniSlideButtonWrapper",
  //   start: function(slider) {
  //     $("body").removeClass("loading")
  //   }
  // })

  // anti-spam reverse honeypot
  // var $input = "<input type='hidden' name='crf_security_field' value='1' />"
  // $("#CommentForm form").append($input)
  // $("#CommentForm").show()

  // menu dropdown for responsive
  $("#menuDropdown").click(function() {
    $("#leftMenu").slideToggle("slow")
    $(this).toggleClass("activeDropdown")
  })

  // // blog lightbox for images
  // $("div.post-body a:has(>img)").fancybox({
  //   helpers: {
  //     title: {
  //       type: "float"
  //     }
  //   }
  // })
  // // video link
  // $("a.mainVideo").fancybox()

  // Function for animating the FAQs
  $questions = $("h3.faq_question a")
  $answers = $("div.faq_answer")
  $answers.hide()

  $questions.click(function() {
    if (
      $(this)
        .parent()
        .next("div.faq_answer")
        .is(":hidden")
    ) {
      $answers.hide()
      $(this)
        .parent()
        .next("div.faq_answer")
        .slideDown("fast")
    } else {
      $(this)
        .parent()
        .next("div.faq_answer")
        .slideUp()
    }
    return false
  })

  // i've never done that before.
  //$('.neverDoneBefore .imagesHolderNDB').cycle({
  //        fx:'fade',
  //		timeout: 10000,
  //        next: '.arrowRight',
  //        prev: '.arrowLeft'
  //	});

  // What's New For Me This Summer
  // $("#newAgeGroup1,#newAgeGroup2,#newAgeGroup3").hide()
  // $("div.whatsNewHeader ul li a").click(function() {
  //   $("div.whatsNewHeader ul li a").removeClass("active")
  //   $(this).addClass("active")

  //   $(
  //     "div#" +
  //       $(this)
  //         .parent()
  //         .attr("class") +
  //       " div.whatsNewSlidesow"
  //   ).cycle(0)
  //   $("div.whatsNewSlideWrapper").hide()
  //   $(
  //     "div#" +
  //       $(this)
  //         .parent()
  //         .attr("class")
  //   ).fadeIn(1000)
  //   return false
  // })

  //$('.whatsNewSlidesow').cycle({
  //		fx: 'scrollHorz',
  //		pager:  $(this).find('.whatsNewPager'),
  //		timeout: 3000
  //		//prev: $("a.arrowLeft"),
  //		//next: $("a.arrowRight")
  //		//easing: 'easeInOutCirc'
  //	});
})
