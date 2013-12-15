var map1 = {
	textures : new Array(
		"gras1.png"
		,"dirt1.png"
	)
	,positions : new Array(
		new Array(0,0,0)
		,new Array(1,0,0)
		,new Array(2,0,0)
		,new Array(3,0,0)
		,new Array(4,0,0)

		,new Array(0,1,0)
		,new Array(1,1,0)
		,new Array(2,1,1)
		,new Array(3,1,0)
		,new Array(4,1,0)

		,new Array(0,2,0)
		,new Array(1,2,1)
		,new Array(2,2,1)
		,new Array(3,2,0)
		,new Array(4,2,0)

		,new Array(0,3,0)
		,new Array(1,3,0)
		,new Array(2,3,0)
		,new Array(3,3,0)
		,new Array(4,3,0)

		,new Array(0,4,0)
		,new Array(1,4,0)
		,new Array(2,4,0)
		,new Array(3,4,0)
		,new Array(4,4,0)
	)
}

function Map(){
	this.init = function(map, x, y){
		var mapElements = "";

		for( var i=0; i<x; i++ ){
			for( var k=0; k<y; k++ ){
				mapElements += '<img id="m'+i+'_'+k+'" src="" />';
			}
		}

		map.innerHTML = mapElements;
	}

	this.loadSet = function( set ){
		var textures = set.textures;
		var positions = set.positions;
		var countPositions = positions.length;

		for( var i=0; i<countPositions; i++ ){
			var xPos = positions[i][0];
			var yPos = positions[i][1];
			var texture = textures[positions[i][2]];

			document.getElementById("m"+xPos+"_"+yPos).src = texture;
		}
	}
}

var Map = new Map();
Map.init( document.getElementById("map"), 5, 5 );
Map.loadSet( map1 );