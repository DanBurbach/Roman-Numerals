'use strict';

import { Roman } from './roman';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("form#romanization").submit(function(event) {
    event.preventDefault();

    var arabicNumbers = parseInt($("input#numericalInput").val());

    let roman = new Roman();
    if (arabicNumbers >= 1 && arabicNumbers <= 3999) {
      var result = roman.romanize(arabicNumbers);
      $("#result").text(result);
    } else {
      $("#result").text("Romans only used numbers from 1 to 3,999. Please enter a number in that range.");
    }
  });
});
