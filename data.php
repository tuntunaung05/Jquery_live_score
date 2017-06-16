<?php
require './libs/Smarty.class.php';
$smarty = new Smarty;

$json = file_get_contents('leaderboard.json');	   // load the file
$json_arr = json_decode( $json, true );            //Decode the JSON data into a PHP array.


$score_list='';

for($i=0;$i<sizeof($json_arr['leaderboard']);$i++)
{
	$username=$json_arr['leaderboard'][$i]['username'];
	$score=$json_arr['leaderboard'][$i]['score'];
	
	$smarty->assign('username',$username);
	$smarty->assign('score',$score);
	$smarty->assign('i',$i);
	$smarty->display('score.tpl');
}



?>