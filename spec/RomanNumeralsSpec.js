describe("RomanNumerals", function() {  
  var fizzBuzz;

  beforeEach(function() {    
    romanNumerals = new RomanNumerals();
  });

  it("should return I when 1 is passed", function(){
    expect(romanNumerals.convert(1)).toEqual('I');
  });

  it("should return II when 2 is passed", function(){
    expect(romanNumerals.convert(2)).toEqual ('II');
  });

  it("should return III when 3 is passed", function(){
    expect(romanNumerals.convert(3)).toEqual('III');
  });

  it("should return IV when 4 is passed", function(){
    expect(romanNumerals.convert(4)).toEqual('IV');
  });

  it("should return V when 5 is passed", function(){

    expect(romanNumerals.convert(5)).toEqual('V');
  });
  /*
  it("should return number 1", function() {    
    expect(fizzBuzz.number(2)).toEqual(2);
  });
*/
/*
  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });
*/
/*
  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });
*/
/*
  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
*/
});
