$(document).ready(()=>{
	let images = ["ford.jpg","ma.jpg","djoka.jpg","rashi.jpg","jquery.jpg","bckg1.jpg","bckg2.jpg","rain.jpg","summer.jpg"];
	let x = 0;
	let r, t;
	let slider = $("#slider");
	let slide = $("#slide");
	let tumbs = $("#tumbs");
	let count = $("#count");
				
	slide.append(images.map(item =>'<img src="../Slider_2/img/' + item + '" />'));
	tumbs.html( slide.html() );
				
	$(window).resize(()=> {
		clearTimeout(r);
		r = setTimeout(create, 250);
	});				
				
	tumbs.children("img").click(function(){
	x = $(this).index();
		start();
	});
				
	create();
	start();
				
	function create() {
		slide.children("img").css({
			width: slider.width(),
			height: slider.height(),
		}).click(function(e){
			x = e.pageX > $(window).width()/2 ? x+1 : x-1;
			start();
		});
	}
				
	function start(){
		stop();
		show();
		t = setInterval(()=>{ x++; show() }, 3000);
	}
				
	function stop(){
		clearInterval(t);
	}
				
	function show(){
		if(x < 0 || x == images.length) x = 0;
		slide.animate({
			'left': -100 * x + "%"
		});
					
		count.html((x + 1) + "/" + images.length);
	}
});