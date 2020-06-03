$(document).ready(function() {
  $('#formOne').submit(function(event) {
    const person1Input = $("input#person1").val();
    const verb1Input = $("input#verb1").val();

    $(".person1").text(person1Input);
    $(".verb1").text(verb1Input);

    $("#story").show();

    event.preventDefault();
  });
});
