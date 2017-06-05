$(document).ready(function() {
  $('#gList').submit(function(event) {

    var blanks = ["#item1", "#item2", "#item3", "#item4", "#item5"];
    var sortedItems = [];
    blanks.sort(function(blank) {
      return sortedItems.toUpperCase();
    });

    sortedItems.forEach(function(sortedItem) {
      var userInput = $("input#" + sortedItem).val();
      $("." + blank).text(userInput);
    });

    $("#grocerylist").show();

    event.preventDefault();
  });
});
