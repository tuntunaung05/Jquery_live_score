

var selected_username=''; // to store the last clicked username;
$(document).ready(function() {
	setInterval( function () {
		$.get( "data.php", function( data ) {        
            if(data) {
            $(".container").html(data);
			
			var tableRow = $("td").filter(function() {
			return $(this).text() == selected_username;
			}).closest("tr");
			
			tableRow.css("background-color", "#F7FE2E");
			
			$(".container tr").click( function() { 
				 $(".container tr").css("background-color", "#FFFFFF");
                 $(this).css("background-color", "#F7FE2E");
				                
				 var username=$(this).find("td:first").html(); 
				 selected_username=username;
				 $(".container1").html(username+"<br><input type='button' name='add' value='Give 5 Points' onclick='give_5_points(\""+username+"\");'/>");
                });
            }
        });	
	}, 1000 );
				
		$(".container1").text('Click a player to select.');
    }); 
	
	
    
	

	
function give_5_points(username)
{
	if(username)
	{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
			var username=$(this).find("td:first").html();
			var responseText=xmlhttp.responseText;
			var responseArr=responseText.split('_');
			
            document.getElementById(responseArr[0]).innerHTML = responseArr[1];
        }
    };
    xmlhttp.open("GET", "give_5_points.php?username=" +username, true);
    xmlhttp.send();
	}
}



