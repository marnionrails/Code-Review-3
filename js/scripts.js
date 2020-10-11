//Business Logic
function neighbor(numberInput) {
  let number = [];
  for (let i=0; i<= numberInput; i++) {
    number.push(`${i}`);
    if ((number[i]).match("3")) {
      number[i] = "Won't you be my neighbor?";
    } else if ((number[i]).match("2")) {
      number[i] = "Boop";
    } else if (number[i].match("1")) {
      number[i] = ("Beep");
    } else {
      number[i];
    }
  }
  return number;
};

//User Interface Logic
$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();
    const user_num = $("input#number").val();
    let result = neighbor(user_num);
    $("#output").text(result);
    $("#output").show();

  });
});