$( document ).ready(function() {
  $('.trigger').click(function() {
     $('.modal-wrapper').toggleClass('open');
    $('.square-container').toggleClass('blur');
     return false;
  });
  
  		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});
});