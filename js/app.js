'use strict'

const animals = [];
const options = [];

$(function () {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('./data/page-1.json', ajaxSettings)
    .then(data => {
      data.objects.forEach(objects => {
        const animal = new Animal(objects.image_url, objects.title, objects.description, objects.keyword, objects.horns);

        $('#photo-template').append(`<h2>${objects.title}</h2><img src='${objects.image_url}' alt='${objects.description}'><p>${objects.description}</p>`)
      });



      animals.forEach(elem => {
        if (!options.includes(elem.keyword)) {
          options.push(elem.keyword)
        }
      })

      addToSelect();
    })

  $('select').on('change', function () {
    $('#photo-template').empty();
    animals.forEach(elem => {
      console.log(elem);
      if ($('select').val() === elem.keyword) {
        $('#photo-template').append(`<h2>${elem.title}</h2><img src='${elem.image_url}' alt='${elem.description}'><p>${elem.description}</p>`);
        $('main').append('#photo-template');
      }
    })

  })
})




function Animal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  animals.push(this);
}


function addToSelect() {
  options.forEach(elem => {
    $('select').append(`<option>${elem}</option>`);
  })
}
