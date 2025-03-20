"use strict";

const subHeadingBox = document.querySelector('.sub-heading-box')

const subHeadingBoxObserver = new IntersectionObserver(function(entries){
  const entry = entries[0];

  console.log(entry);

  if(entry.isIntersecting) subHeadingBox.classList.remove('hidden');
  else subHeadingBox.classList.add('hidden');

}, {root: null, threshold: 1})


subHeadingBoxObserver.observe(subHeadingBox);
