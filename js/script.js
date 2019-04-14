 function ValidName() {
     if (document.getElementById("name").value == '') output = 'Privalomas laukas';
     else output = '';
     document.getElementById('name2').innerHTML = output;
     return false;
 }

 function ValidMail() {
     var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
     var myMail = document.getElementById('email').value;
     var valid = re.test(myMail);
     if (valid) output = '';
     else output = 'Įvestas neteisingas el. paštas';
     document.getElementById('email2').innerHTML = output;
     return valid;
 }

 function ValidPhone() {
     var re = /^\d+$/;
     var myPhone = document.getElementById('phone').value;
     var valid = re.test(myPhone);
     if (valid) output = '';
     else output = 'Privalomas laukas';
     document.getElementById('phone2').innerHTML = output;
     return valid;
 }

 function ValidText() {
     if (document.getElementById("zinute").value == '') output = 'Privalomas laukas';
     else output = '';
     document.getElementById('zinute2').innerHTML = output;
     return false;

 }

 function checkCheckBoxes() {
     if (document.getElementById("checkbox").checked == false)
         output = 'Privalomas laukas';
     document.getElementById('checkbox2').innerHTML = output;
     return false;
 }
