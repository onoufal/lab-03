'use strict';

let horns = [];
let templateID = '#photo-template';


$(function () {

  const ajaxSettings = {
    method: 'get',
    datatype: 'json'
  };

  function getData(pageNumber) {
    $.ajax(`./data/page-${pageNumber}.json`, ajaxSettings)
      .then(data => {
        data.forEach(element => {
          horns.push(new Horn(element));
        });
        render();
      });
  }

  $('#one').on('click', function () {
    $('#horns').empty();
    addTemplate();
    getData(1);


  });

  $('#two').on('click', function () {
    $('#horns').empty();
    addTemplate();
    getData(2);


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


function addTemplate() {
  console.log('OSAMA');
  $('#horns').append(
    `
      <template id="photo-template" type="x-tmpl-mustache">
        <h2>{{ title }}</h2>
        <img src="{{image_url}}" alt="">
          <p>{{ description }}</p>
      </template>
    `
  );
}