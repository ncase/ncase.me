(function(){
        
    var left_white = document.querySelector("#ncase_header > div:nth-child(1)");
	var right_white = document.querySelector("#ncase_header > div:nth-child(2)");
    var fixed_piece = document.querySelector("#ncase_header > div:nth-child(3)");

	window.onscroll = function(){

        if(window.scrollY>35){
            left_white.style.left = 0;
            right_white.style.right = 0;
            fixed_piece.style.display = "none";
        }else{
            var scroll = window.scrollY*1.4;
            if(scroll<0) scroll=0;
            var offset = 0.25 * (150-scroll);
            left_white.style.left = (-offset)+"px";
            right_white.style.right = (-offset)+"px";
            fixed_piece.style.display = "block";
        }

	};

})();