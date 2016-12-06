
// FLIP

$(".card").flip({
	axis: 'x',
	trigger: 'hover'
});

// Producthunt

$(document).ready(function () {
	if(window.location.href.indexOf("producthunt") > -1) {
		$('.producthunt').hide();
		$('.producthunt2').show();
		$('#one .buttons').addClass('kitty');
		$(".badge").css("background-color", "#da552f");
		console.log('xxxxx xxxxxxxxxxxxxxx xxxxx\nxxxx x xxxxxxxxxxxxx x xxxx\nxxx xxxx           xxxx xxx\nxx  xxxxxxxxxxxxxxxxxxx  xx\nxx  xxxx xxxxxxxxx xxxx  xx Happy Hunting!!!!\nxx  xxx x xxxxxxx x xxx  xx\nxx  xxxxxxxxxxxxxxxxxxx  xx Product Hunters!!!\nxxx  xxx  xxxxxxx  xxx  xxx\nxxxx  xxx         xxx  xxxx\nxxxxxx  xxxxxxxxxxx  xxxxxx\nxxxxxxxxxxxxxxxxxxxxxxxxxxx\n');
	}
});
