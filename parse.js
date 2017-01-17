$(document).ready(function(){
    var request = new XMLHttpRequest();
    request.open("GET", "MBB.scores", false);
    request.send(null);
    var returnValue = request.responseText;
    console.log(returnValue);

    var array = returnValue.replace(/\n/g, ",").split(",");

    var count = 0;
    var i;
    for(i = 0; i < array.length; i += 5){
    	count++;
    	if(i%2 == 0)
    		$("#timeline").append("<div class = \"datecontainer shadow\"><div style = \"border-width: 0\"><div class = \"date\">" + array[i] + ", " +  array[i+1] + "</div><div class = \"icon\"><img src = \"images/basketball.png\" height = \"30px\" width = \"30px\"></div><div class = \"description\">UNC beat Dook University " + array[4] + " with a final score of " + array[i+2] + "-" + array[i+3] + "</div></div><div class = \"arrowright\"></div></div>");
    	else
			$("#timeline").append("<div class = \"datecontainerright shadow\"><div class = \"arrowleft\"></div><div style = \"border-width: 0\"><div class = \"date\">" + array[i] + ", " +  array[i+1] + "</div><div class = \"iconright\"><img src = \"images/basketball.png\" height = \"30px\" width = \"30px\"></div><div class = \"description\">UNC beat Dook University " + array[4] + " with a final score of " + array[i+2] + "-" + array[i+3] + "</div></div></div>");

    	var offset = (array[i+1]-1920);

    	switch(array[i].split(" ")[0]){
    		case "January":
    			offset += 0;
    		break;
    		case "February":
    			offset += 1;
    		break;
    		case "March":
    			offset += 2;
    		break;
    		case "April":
    			offset += 3;
    		break;
    		case "May":
    			offset += 4;
    		break;
    		case "June":
    			offset += 5;
    		break;
    		case "July":
    			offset += 6;
    		break;
    		case "August":
    			offset += 7;
    		break;
    		case "September":
    			offset += 8;
    		break;
    		case "October":
    			offset += 9;
    		break;
    		case "November":
    			offset += 10;
    		break;
    		case "December":
    			offset += 11;
    		break;
    	}

    	offset *= 150;
    	offset+= screen.height + 100;

    	$("#timeline div:last-child").css({
	        top: offset
    	});

    	var offset2 = offset + 42;

    	$("#timeline").append("<div class = \"wincircle\"></div>");

    	$("#timeline div:last-child").css({
	        top: offset2
    	});
    }

    $("#title").html("<h1>" + count + " REASONS</h1><br><h2>TO GO TO HELL DUKE!</h2>");

    // for(var x = 0; x < 300; x++)
    // 	$("#line").append("<div class = \"wincircle\"></div>");

    $("#line").height($(document).height() - $(window).height());
    var offset3 = $(window).height() + 100;
    $("#line").css({
	    top: offset3
    });

    return returnValue;
});