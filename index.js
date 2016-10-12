function Robot(){
}

Robot.prototype.alarm = function(){
  console.log('Danger, Danger!');
}

Robot.new = function(){
  var F = function(){};
  F.prototype = new this();
  return new F();
}

var robby = Robot.new();
robby.alarm();
