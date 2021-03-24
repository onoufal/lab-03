'use strict';

let horns = [];
let templateID = '#photo-template';


$(function () {

  const ajaxSettings = {
    method: 'get',
    datatype: 'json'
  };

  $.ajax('./data/page-2.json', ajaxSettings)
    .then(data => {
      data.forEach(element => {
        horns.push(new Horn(element));
      });
      render();
    });



});


console.log(horns);







function Horn(object) {
  for (let key in object) {
    this[key] = object[key];
  }
}


Horn.prototype.render = function () {
  let template = $(templateID).html();
  // console.log(template);
  let html = Mustache.render(template, this);
  return html;
}

function render() {
  horns.forEach(element => {
    console.log('Hello');
    $('#horns').append(element.render());
  });
}

