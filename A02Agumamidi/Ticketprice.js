// function multiplyBy(){
// 	var myInput1= document.getElementById("ff").value;
// 	var myInput2= document.getElementById("gg").value;

// 	var ticketprice=70;
// 	var cokeprice=40;
// 	var wer=parseFloat((myInput1*ticketprice)+(myInput2*cokeprice));
// 	document.getElementById("fc")=var wer;
	
// }
  //   $(document).ready(function () {
  //         //  var ticketprice=70;
		// //	var cokeprice=40;
  //           var n1 = parseInt($('#ff').val());
  //           var n2 = parseInt($('#ck').val());
  //           var r = ((n1*70) +(cokeprice *40));
         
  //           $("#show").onclick(function()
  //           {
  //           	alert(r);
  //           }
  //           };
  //         //  alert("sum of 2 No= " + r);


  function addNumbers()
                {
                        var val1 = parseInt(document.getElementById("value1").value);
                        var val2 = parseInt(document.getElementById("value2").value);
                        var ansD = document.getElementById("answer");
                        ansD.value = ((val1*70) + (val2*40));
                }