$(document).ready(function() {
  var total = 0;
  var preview = "";
  // 0 = just cleared, 1 = add, 2 = subtract, 3 = multiply, 4 = divide
  var operation = 0;

  // Round to two decimal places
  function roundNumber(value) {
    return Number(Math.round(value + 'e' + 2) + 'e-' + 2);
  }

  $("#add").on("click", function() {
    if (operation == 0 && total === 0)
      total = Number(preview);
    else if (operation == 1) {
      total = total + Number(preview);
    } else if (operation == 2) {
      total = total - Number(preview);
    } else if (operation == 3) {
      total = total * Number(preview);
    } else if (operation == 4) {
      total = total / Number(preview);
    }
    operation = 1;
    $("#result").text(roundNumber(total));
    preview = "";
  });

  $("#subtract").on("click", function() {
    if (operation == 0 && total === 0)
      total = Number(preview);
    else if (operation == 1) {
      total = total + Number(preview);
    } else if (operation == 2) {
      total = total - Number(preview);
    } else if (operation == 3) {
      total = total * Number(preview);
    } else if (operation == 4) {
      total = total / Number(preview);
    }
    operation = 2;
    $("#result").text(roundNumber(total));
    preview = "";
  });

  $("#multiply").on("click", function() {
    if (operation == 0 && total === 0)
      total = Number(preview);
    else if (operation == 1) {
      total = total + Number(preview);
    } else if (operation == 2) {
      total = total - Number(preview);
    } else if (operation == 3) {
      total = total * Number(preview);
    } else if (operation == 4) {
      total = total / Number(preview);
    }
    operation = 3;
    $("#result").text(roundNumber(total));
    preview = "";
  });

  $("#divide").on("click", function() {
    if (operation == 0 && total === 0)
      total = Number(preview);
    else if (operation == 1) {
      total = total + Number(preview);
    } else if (operation == 2) {
      total = total - Number(preview);
    } else if (operation == 3) {
      total = total * Number(preview);
    } else if (operation == 4) {
      total = total / Number(preview);
    }
    operation = 4;
    $("#result").text(roundNumber(total));
    preview = "";
  });

  $("#zero").on("click", function() {
    preview = preview.concat("0");
    $("#result").text(preview);
  });

  $("#decimal").on("click", function() {
    if (preview.indexOf(".") === -1 && preview.length < 16) {
      preview = preview.concat(".");
      $("#result").text(preview);
    }
  });

  $("#one").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("1");
    $("#result").text(preview);
  });

  $("#two").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("2");
    $("#result").text(preview);
  });

  $("#three").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("3");
    $("#result").text(preview);
  });

  $("#four").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("4");
    $("#result").text(preview);
  });

  $("#five").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("5");
    $("#result").text(preview);
  });

  $("#six").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("6");
    $("#result").text(preview);
  });

  $("#seven").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("7");
    $("#result").text(preview);
  });

  $("#eight").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("8");
    $("#result").text(preview);
  });

  $("#nine").on("click", function() {
    if (preview.length < 16)
      preview = preview.concat("9");
    $("#result").text(preview);
  });

  $("#AC").on("click", function() {
    total = 0;
    preview = "";
    operation = 0;
    $("#result").text(total);
  });

  $("#CE").on("click", function() {
    preview = "";
    $("#result").text(preview);
  });

  $("#equals").on("click", function() {
    if (operation == 1) {
      total = total + Number(preview);
    } else if (operation == 2) {
      total = total - Number(preview);
    } else if (operation == 3) {
      total = total * Number(preview);
    } else if (operation == 4) {
      total = total / Number(preview);
    }
    $("#result").text(roundNumber(total));
    preview = "";
    operation = 0;
  });

});