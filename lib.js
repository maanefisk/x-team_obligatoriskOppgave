
// Skjekker alle sammen
function allchecked(assert) {
    return checklength(assert) &&
    checkdots(assert) &&
    checkyear(assert) &&
    checkmonth(assert) &&
    checkday(assert);
  }
  
  // skjekker lengden
  function checklength(assert) {
    var str = textbox.value;
    if (str.length == 10) {
      return true;
    }
    }
  
    // skjekker punktum
  function checkdots(assert) {
    var str = textbox.value;
    var dotdot = str.substring(2,3) + str.substring(5,6);
    if (dotdot = "..") {
      return true;
    }
    }
  
    // skjekker året
  function checkyear(assert) {
  var str = textbox.value;
  var year = str.substring(6,10);
  console.log(year);
  if (year.length === 4 && year >= '0000' && year <= '9999') {
    return true;
  }
  }
  
  // skjekker måneden
  function checkmonth(assert) {
    var mon = textbox.value;
    var month = mon.substring(3,5);
    console.log(month);
    if (month.length === 2 && month >= '01' && month <= '12') {
      return true;
    }
    }
    
    // skjekker dagsdatoen
    function checkday(assert) {
      var da = textbox.value;
      var day = da.substring(0,2);
      console.log(day);
      if (day.length === 2 && day >= '01' && day <= '28') {
        return true;
      }
      }