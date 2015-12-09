$(function() {
  console.log('page ready, jquery worked');

  $('button').click(function(e){
    console.log('button clicked');
  });

  $(document).on('submit', 'form', function(e) {
    // Form being submitted
    var form = e.currentTarget;
    // Issue an ajax request
    $.ajax({
      url: form.action,
      type: 'POST',
      data: $(form).serialize(), // Serialize the form's fields and values
      success: function() {},
      error: function() {}
    });
    // Prevent the browser from submitting the form
    e.preventDefault();
  });

});
