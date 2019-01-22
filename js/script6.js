"use strict";

(function() {
  let imgs = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  let currPos = 0;

  console.log(getSlideInfo());
  getNextSlide();
  console.log(getSlideInfo());
  getPrevSlide();
  console.log(getSlideInfo());
  insertSlide({image: 'test.jpg', alt: 'Test'}, 2);
  getSlide(2);
  console.log(getSlideInfo());
  removeSlide(2);
  console.log(getSlideInfo());

  function getNextSlide() {
    if (currPos < imgs.length - 1) {
      return ++currPos;
    } else {
      return currPos;
    }
  }

  function getPrevSlide() {
    if (currPos > 0) {
      return --currPos;
    } else {
      return currPos;
    }
  }

  function getSlide(slideNumber) {
    if (slideNumber > 0 && slideNumber <= imgs.length - 1) {
      currPos = slideNumber - 1;
    }

    return currPos;
  }

  function getSlideInfo() {
    return imgs[currPos];
  }

  function insertSlide(slide, position) {
    if (position > 0) {
      imgs.splice(position - 1, 0, slide);

      if (position - 1 <= currPos) {
        ++currPos;
      }
    }
  }

  function removeSlide(position) {
    if (position > 0) {
      imgs.splice(position - 1, 1);
    }
  }
}());