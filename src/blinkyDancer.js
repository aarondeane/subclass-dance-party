var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="clippyDancer"><img src="style/giphy.gif" BORDER: "0"></img></span>');
  makeDancer.call(this, ... arguments);
  };

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype.oldStep = function () {
    makeDancer.prototype.step.call(this); 
  }

  makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step 
    this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };

makeBlinkyDancer.prototype.lineUp = function(){};