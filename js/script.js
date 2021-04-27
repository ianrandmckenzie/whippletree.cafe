// JavaScript Document
$(window).resize(function(){
	if ($(window).width() <= 750){	
		$('#navitem').removeClass('col-xs-offset-1');
	}
	if ($(window).width() > 750){	
		$('#navitem').addClass('col-xs-offset-1');
	}	
	if ($(window).width() <= 750){	
		$('#navitem2').removeClass('col-xs-offset-1');
	}
	if ($(window).width() > 750){	
		$('#navitem2').addClass('col-xs-offset-1');
	}		
});


    var angle = 0;
    setInterval(function(){
        angle+=3;
        $("#soo").rotate(angle);
    },50);