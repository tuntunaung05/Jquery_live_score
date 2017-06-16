<?php
if($_GET['username'])
{
	$username=$_GET['username'];	
	$json = file_get_contents('leaderboard.json');		// load the file
	$json_arr = json_decode( $json, true );             //Decode the JSON data into a PHP array.
	
	for($i=0;$i<sizeof($json_arr['leaderboard']);$i++)
	{
		if($json_arr['leaderboard'][$i]['username']==$username)
		{
			$json_arr['leaderboard'][$i]['score']=$json_arr['leaderboard'][$i]['score']+5;
			echo $i."_".$json_arr['leaderboard'][$i]['score'];
		}
	}
	$updated_data=json_encode($json_arr);                           //Encode the array back into a JSON string.
	file_put_contents('leaderboard.json', $updated_data,LOCK_EX);   //Save the file. the LOCK_EX flag to prevent anyone else writing to the file at the same time
	
}



?>