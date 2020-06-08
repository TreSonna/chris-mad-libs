/*$(document).ready(function() {
  $('#formOne').submit(function(event) {
    const person1Input = $("input#person1").val();
    const verb1Input = $("input#verb1").val();

    $(".person1").text(person1Input);
    $(".verb1").text(verb1Input);

    $("#story").show();

    event.preventDefault();
  });
});*/


$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let wordTypes = [".person1", ".verb1"];
    let inputWords =[];

    inputWords.push($("input#person1").val());
    inputWords.push($("input#verb1").val());

    // for (var i = 0; i < wordTypes.length; i++){
    // var inputtedWords = (wordTypes[i]);
    inputWords.forEach(function(element, index) {
      $(wordTypes[index]).text(element);
    })


    // inputtedWords.push(inputWords);

    $("#story").show();
  });
});
