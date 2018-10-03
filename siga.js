$(document).ready(function() {

    $('.container').hide();
    $("#home").show();
    $("#ancora").hide();
    $('.btn').click(function(){
        var target = "#" + $(this).data("target");
        $(".container").not(target).hide();
        $(target).show();
        $("#ancora").show();
        if($("#home").is(":visible"))
        	$("#ancora").hide();
    });
    
	
    var cap =$(".carousel-caption");
    $('#Extra').click(function(){
    	
    	$(cap).hide();
    	});
    	
    $('#Academica').click(function(){
    	
    	
    			$(cap).show();
    });	
    
    
  
    document.getElementById("Extra").addEventListener("click", function(){
        document.getElementById("um").src = "src/cruz.png";
        document.getElementById("dois").src="src/conducao.png";
        document.getElementById("tres").src="src/navileme.png";
       
    });
    
    document.getElementById("Academica").addEventListener("click", function(){
        document.getElementById("um").src = "src/IUL.jpg";
        document.getElementById("dois").src="http://www.portointeractivecenter.org/ping/wp-content/themes/ping-wp/images/FCUP.png";
        document.getElementById("tres").src="src/almeida.jpg";
        
    });
	
});