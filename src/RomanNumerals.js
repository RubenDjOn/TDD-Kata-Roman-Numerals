function RomanNumerals() {
}

RomanNumerals.prototype.convert = function (n) {
	var converted = '';
	
	if (n <= 3){
		converted = Array(n+1).join('I');
	}
	else if (n==4){ 
		converted = 'IV';
	}
	else if(n==5){
		converted = 'V';
	}
	else if(n>5&&n<9){
		converted = 'V' + Array(n-4).join('I');
	}
	else if(n==9){
		converted = 'IX';
	}

	else if (n == 10) {
		converted = 'X';
	}

	
	return converted;
};

/*
FizzBuzz.prototype.number = function(n) {
 	return 1;
};
*/
/*
Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};*/