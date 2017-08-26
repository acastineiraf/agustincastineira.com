// Make contact me appear
var scroll_pos = 0;

$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 210) {
        $("#contact-subscribe").removeClass('collapsed');
      };
});
