// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require jquery_nested_form
//= require turbolinks
//= require bootstrap-sprockets
//= require_self
require('babel-polyfill');

document.addEventListener('turbolinks:load', () => {
  window.Project = window.Project || require('./main').default();
  window.Project.init();

  const page = document.location.pathname
  ga('set', 'page', page);

  // Sending the pageview no longer requires passing the page
  // value since it's now stored on the tracker object.
  ga('send', 'pageview');
});
