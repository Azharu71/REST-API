<?php

$dbh = new PDO('mysql:host=localhost;dbname=db_spp_bellaaz;', 'root', '');
$db = $dbh->prepare('SELECT * FROM siswa');
$db->execute();
$siswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($siswa);
echo $data;
