//detectando resolucion de pantalla para equipos moviles ///

	jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
	$("#subtitle_1").hide();
	$("#subtitle_2").show(1500);
	$("#subtitle_3").hide();
	$("#galery_projects").hide();
	$("#galery_codes").hide();
	$("#projects").click(function(){
		$(".barL").css("background", "#5cb85c");

		$("#subtitle_1").show(1500);
		$("#subtitle_2").hide(1500);
		$("#subtitle_3").hide(1500);
		$("#galery_projects").show(1500); 
		$("#galery_desing").hide(1500);
		$("#galery_codes").hide(1500);
	});
	$("#desings").click(function(){
		$(".barL").css("background", "#D53584");
		$("#galery_projects").hide(1500);
		$("#subtitle_1").hide(1500);
		$("#subtitle_2").show(1500);
		$("#subtitle_3").hide(1500);
		$("#galery_desing").show(1500);
		$("#galery_codes").hide(1500);
	});

$(document).ready(function(){
	$("#codes").click(function(){
		
		$(".barL").css("background", "#695CB8");
		$("#galery_projects").hide(1500);
		$("#galery_desing").hide(1500);
		$("#subtitle_1").hide(1500);
		$("#subtitle_2").hide(1500);
		$("#subtitle_3").show(1500);
		$("#galery_codes").show(1500);
	});
	})

	jQuery(function($){
		$(".img-fluid").click(function(){
			var img_src = $(this).attr("src");
			console.log(img_src);
			var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";

			open_img = appear_image.concat("<img id ='appear_image' src='"+img_src+"' />");
			
			$("body").append(open_img);

		});
	});
	function closeImage(){
		$("#appear_image_div").remove();
		$("#appear_image").remove();

	};

/////////////////////////////	
//elemento 1 portafolio//
	function scan(){
$(window).scroll(function () { 
	var scrollpos = $(window).scrollTop()+100;
		posicionbtn1 =$("#btn1").position();
	    posicionbtn2 =$("#btn2").position();
	    posicionbtn3 =$("#btn3").position();
	    posicionbtn4 =$("#btn4").position();
    console.log(" posicion atualizada top: " + posicionbtn1.top);

})
}

scan();
$( window ).scroll(function() {
	if($(this).scrollTop()+300 > posicionbtn1.top){
			
			$( "#btn1" ).removeClass( "button" ).addClass("button_scroll");	
			//$( "h2" ).css( "background", "red" ).fadeOut( "slow" );
	}else{
		$( "#btn1" ).removeClass( "button_scroll" ).addClass("button");
	}
	});
////////////////////////
//elemento 2  about me//


$( window ).scroll(function() {
	if($(this).scrollTop()+300 > posicionbtn2.top){
			console.log("pase por btn2");
			$( "#btn2" ).removeClass( "button" ).addClass("button_scroll");	
			//$( "h2" ).css( "background", "red" ).fadeOut( "slow" );
	}else{
		$( "#btn2" ).removeClass( "button_scroll" ).addClass("button");
	}
	});
////////////////////////
//elemento 3  experience //


$( window ).scroll(function() {
	if($(this).scrollTop()+300 > posicionbtn3.top){
			
			$( "#btn3" ).removeClass( "button" ).addClass("button_scroll");	
			//$( "h2" ).css( "background", "red" ).fadeOut( "slow" );
	}else{
		$( "#btn3" ).removeClass( "button_scroll" ).addClass("button");
	}
	});
////////////////////////
//elemento 4  education//


$( window ).scroll(function() {
	if($(this).scrollTop()+300 > posicionbtn4.top){
			
			$( "#btn4" ).removeClass( "button" ).addClass("button_scroll");	
			//$( "h2" ).css( "background", "red" ).fadeOut( "slow" );
	}else{
		$( "#btn4" ).removeClass( "button_scroll" ).addClass("button");
	}
	});


///////////////////////////////////////////////////////////////////////
///////////////////////// bar skills //////////////////////////////////
///////////////////////////////////////////////////////////////////////


$(document).ready(function(){	
	responsive();
	$(window).resize(responsive);
function responsive(){
		if ($(window).width() <= 480) {
			$(".barL").hide();
			$(".menu_nav").removeClass( "col-md-6" ).addClass("col-md-12");
			$( ".cont_left" ).removeClass( "col-4" ).addClass("col-md-12");
			$( ".content_edu " ).removeClass( "col-8" ).addClass("col-md-12");
			$( ".content_me " ).removeClass( "col-8" ).addClass("col-md-12");
			$( ".content_exp" ).removeClass( "col-8" ).addClass("col-md-12");
			$( "#exp_id" ).removeClass( "exp" );
			$( ".mark_id" ).removeClass( "mark" );
			
		}else {
			$(".barL").show();
			$( ".content_edu " ).removeClass( "col-md-12" ).addClass("col-8");
			$( ".content_me " ).removeClass( "col-md-12" ).addClass("col-8");
			
			$( ".cont_left" ).removeClass( "col-md-12" ).addClass("col-4 ");
			$( ".content_exp" ).removeClass( "col-md-12" ).addClass("col-8");
			$( "#exp_id" ).addClass( "exp" );
			$( ".mark_id" ).addClass( "mark" );

		}}
	
});



$(function() {
	$('.chart').easyPieChart({    
	});
});
