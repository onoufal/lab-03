'use strict'


$(function () {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };


  $.ajax('./data/page-1.json', ajaxSettings)
    .then(data => {
      data.animals.forEach(animal => {
        $('#photo-template').append(`<h2>${animal.title}</h2>`);
      });
    })






})
