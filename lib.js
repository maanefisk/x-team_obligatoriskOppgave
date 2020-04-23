



//logger informasjonen på onchange
function loginput() {
console.log(textbox.value);
  }
  

// Skjekker alle sammen
function allchecked(dato) {
    return checklength(dato) &&
    checkdots(dato) &&
    checkyear(dato) &&
    checkmonth(dato) &&
    checkday(dato);
  }
  
  // skjekker lengden
  function checklength(dato) {
    var str = textbox.value;
    if (str.length == 10) {
      return true;
    }
    }
  
    // skjekker punktum
  function checkdots(dato) {
    var str = textbox.value;
    var dotdot = str.substring(2,3) + str.substring(5,6);
    if (dotdot = "..") {
      return true;
    }
    }
  
    // skjekker året
  function checkyear(dato) {
  var str = textbox.value;
  var year = str.substring(6,10);
  console.log(year);
  if (year.length === 4 && year >= '0000' && year <= '9999') {
    return true;
  }
  }
  
  // skjekker måneden
  function checkmonth(dato) {
    var str = textbox.value;
    var month = str.substring(3,5);
    console.log(month);
    if (month.length === 2 && month >= '01' && month <= '12') {
      return true;
    }
  }
  
  // skjekker dagsdatoen
  function checkday(dato) {
    var str = textbox.value;
    var day = str.substring(0,2);
    var month = str.substring(3,5);
    var year = str.substring(6,10);
    var isLeapYear = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
    console.log(day);
    if (day.length === 2 && day >= '01' && day <= '28') {
      return true;
    }
    else if (day == '29' && month == '02'  && isLeapYear == true){
      return true;
    }
    else if(day == ('29') || ('30') && !month =='02'){
      return true;
    }
    else if (day == '31' && (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12'));{
      return true;
    }
    if (day > '31');{
      return false
    }
  }
      //skjekker om det er skuddår
          
      
      
      function checkday(dato) {
          var day = date.substring(0, 2);
          var month = date.substring(3, 5);
   var year = date.substring(6);
   var isFebruary = month == '02';
   var isShortMonth = month == '04' || month ==  '06' || month ==  '09' || month ==  '11';
   var isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
   return day >= '01' && day <= '28'
     || day == '29' && (!isFebruary|| isLeapYear)
     || day == '30' && (!isFebruary)
     || day == '31' && !isFebruary && !isShortMonth;
}