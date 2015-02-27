function RomanNumerals() {
}

RomanNumerals.prototype.convert = function (n) {
	var converted = '';
	
	/*if (n <= 3){
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
	}*/
	while(n / 10 >= 1) {
		converted = this.addX(converted);
		n -= 10;
	}
	if(n - 9 == 0) {
		converted = this.addI(converted);
		converted = this.addX(converted);
		n -= 9;
	}

	while(n / 5 >= 1) {
		converted = this.addV(converted);
		n -= 5;
	}
	if(n - 4 == 0) {
		converted = this.addI(converted);
		converted = this.addV(converted);
		n -= 4;
	}

	while(n >= 1) {
		converted = this.addI(converted);
		n -= 1;
	}
	return converted;
};

RomanNumerals.prototype.addX = function (partialText) {
	return partialText += 'X';
};

RomanNumerals.prototype.addV = function (partialText) {
	return partialText += 'V';
};

RomanNumerals.prototype.addI = function (partialText) {
	return partialText += 'I';
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