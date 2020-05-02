$(document).ready(function() {
    $("input").change(function() {
      if($(this).is(":checked")) {
        window.location.href = '/suwon';
      }
      else {
        window.location.href = '/';
      }
    })
  });