var Calc = []; //This Array Stores the input of the User.
var Mistake = 0;
$(document).ready(function()
{
	$(".Button").click(function()
	{
		if(Mistake == 1)
		{
		    $(".D_Button").empty();
		    Mistake = 0;
		    console.log("check");
		}

		var input = $(this).html();		//Responsible for Display.
		$(".D_Button").append(input);
		Calc.push(input);
		if(Calc.length > 15)
		{
			Calc = [];
			$(".D_Button").empty();
			$(".D_Button").append("Enter Smaller Numbers");
			Mistake = 1;
		}
	});

	$(".C_Button").click(function() //Responsible for "Clear" Button.
	{
		$(".D_Button").empty();
		Calc = [];

	});

	$(".E_Button").click(function() //Responsible for "Equals" Button.
	{  	
		$(".D_Button").empty();
		var f_num = "";
		var s_num = "";

		for(var i=0; i < Calc.length; i++)
		{   
			if(Calc[i] == "+" || Calc[i] == "-" || Calc[i] == "/" || Calc[i] == "x")
			{	
				var operation = Calc[i];
				for(var j = i+1 ; j < Calc.length ; j++)
				{
					s_num = s_num + Calc[j];
					if(Calc[j] == "+" || Calc[j] == "-" || Calc[j] == "/" || Calc[j] == "x")
					{
						break;
					}
				}
				break;
			}
			else
			{
				f_num = f_num + Calc[i];
			}
		}
		
		switch(operation)
		{
			case '+' : var Ans = add(f_num,s_num);
					   $(".D_Button").append(Ans);
					   break;
			case '-' : var Ans = subtract(f_num,s_num);
					   $(".D_Button").append(Ans);
					   break;
			case '/' : var Ans = division(f_num,s_num);
					   $(".D_Button").append(Ans);
					   break;
			case 'x' : var Ans = multiply(f_num,s_num);
					   console.log(Ans)
					   $(".D_Button").append(Ans);
					   break;
			default :  console.log("Glitch?")
		}
		Mistake = 1;
		Calc = [];
	});

	$(".N_Button").hover(function()
		{
    		$(this).css("background-color", "#ecbf3c");
    	}, 
    	function()
    	{
    		$(this).css("background-color", "#fdcd42");
		});

	$(".Highlight_2").hover(function()
		{
    		$(this).css("background-color", "#ecbf3c");
    	}, 
    	function()
    	{
    		$(this).css("background-color", "#fdc121");
		});

	$(".Highlight_1").hover(function()
		{
    		$(this).css("background-color", "#ecbf3c");
    	}, 
    	function()
    	{
    		$(this).css("background-color", "#fdcd42");
		});
});



var add = function(num1,num2)
{
	return((+num1) + (+num2));
};

var multiply = function(num1,num2)
{
	return((+num1) * (+num2));
};

var subtract = function(num1,num2)
{
	return((+num1) - (+num2));
};

var division = function(num1,num2)
{
	return((+num1) / (+num2));
};


