<?php
$start = $_POST['q'];
$hash_before = strpos($start, 'xt=urn:btih:', 6); //12
$hash_after = strpos($start, '&', $hash_before + 12); //12
$hash = substr($start, $hash_before + 12, $hash_after - $hash_before - 12);

$page = $_POST['p'];

$tr_before = strpos($start, 'tr=', 6);
$tr_after = strpos($start, 'dn=', $tr_before);

$tr = substr($start, $tr_before + 3, $tr_after - $tr_before - 4);
$qwestion = "SELECT path FROM magnet.file_path WHERE hash_xt='" . $hash . "'and web_page='" . $page . "' and tr='" . $tr . "';";
$mysqli = @new mysqli('localhost', 'root', '123456', 'magnet');
if (mysqli_connect_errno()) {
	echo "Подключение невозможно: " . mysqli_connect_error();
}
$result_set = $mysqli->query($qwestion);
$row = $result_set->fetch_assoc();
print_r($row['path']);
$result_set->close();
$mysqli->close();
?>