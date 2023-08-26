<?php 
$data = file_get_contents('https://patterns-logitech-bookstore-foundation.trycloudflare.com/');
$siswa = json_decode($data);
var_dump($siswa);
;
