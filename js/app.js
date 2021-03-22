'use strict'


$(function () {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };


  $.ajax('./data/page-1.json', ajaxSettings)
    .then(data => {
      data.animals.forEach(animal => {
        $('main').append(`<div><h2>${animal.title}</h2><img src="${animal.image_url}" alt=""><p>${animal.description}</p></div>`);
        $('select').append(`<option>${animal.keyword}</option>`)
      });

      // $('option').click()




    })






})
