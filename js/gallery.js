"use strict";

document.addEventListener('DOMContentLoaded', function() {

var photoDivs = document.getElementsByClassName("gallery-image");

var nextButton = document.getElementById("button-next");

var previousButton = document.getElementById("button-previous");

var photoNumber = document.getElementById("stepper");

var nextButtonBottom = document.getElementById("button-next-bottom");

var previousButtonBottom = document.getElementById("button-previous-bottom");

var photoNumberBottom = document.getElementById("stepper-bottom");

var currentPhotoNumber = 0;

photoDivs[currentPhotoNumber].classList.remove('hideThis');

function updateSteppers() {
  photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
  photoNumberBottom.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;
}

updateSteppers();

function navigateGallery(direction) {
  photoDivs[currentPhotoNumber].classList.add("hideThis");
  currentPhotoNumber = currentPhotoNumber + direction;

  if (currentPhotoNumber === photoDivs.length) {
    currentPhotoNumber = 0;
  }

  if (currentPhotoNumber < 0) {
    currentPhotoNumber = photoDivs.length - 1;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThis');
  updateSteppers();
}

nextButton.addEventListener('click', function() {
  navigateGallery(1);
});

previousButton.addEventListener('click', function() {
  navigateGallery(-1);
});

nextButtonBottom.addEventListener('click', function() {
  navigateGallery(1);
});

previousButtonBottom.addEventListener('click', function() {
  navigateGallery(-1);
});
