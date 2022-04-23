<!DOCTYPE html>
<head>
<script language = "JavaScript">
function calculateAnswer() {

	var inputNum1;
	var inputNum2;
	var inputNum3;

	inputNum1 = prompt('Enter the the larger number: ', 0)
	inputNum2 = prompt('Enter the the smaller number: ', 0)
	outputTotal = inputNum1 - inputNum2;
	alert('Answer is: ' + outputTotal);
}
</script>
</head>

<body>
<form name = "myForm">
	<h1><p>Subtracting Numbers</p>
	<p>You will be asked for two numbers</p>
	<p>You will be shown the difference between them</p></h1>
<input type = "button" value="Start" onclick="calculateAnswer();">
</body>
</html>
