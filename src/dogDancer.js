var makeDogDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, ... arguments);
  };

  makeDogDancer.prototype = Object.create(makeDancer.prototype);
  makeDogDancer.prototype.constructor = makeDogDancer;

  makeDogDancer.prototype.oldStep = function () {
    makeDancer.prototype.step.call(this); 
  }

  makeDogDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step 
    this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};