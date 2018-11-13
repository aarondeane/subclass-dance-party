var makeCatDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="catDancer"></span>');
  makeDancer.call(this, ... arguments);
  };

  makeCatDancer.prototype = Object.create(makeDancer.prototype);
  makeCatDancer.prototype.constructor = makeCatDancer;

  makeCatDancer.prototype.oldStep = function () {
    makeDancer.prototype.step.call(this); 
  }

  makeCatDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step 
    this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};

makeCatDancer.prototype.lineUp = function(){};