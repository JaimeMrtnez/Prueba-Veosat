<?php
$errors         = array();  
$data 			= array(); 		

	if (empty($_POST['fini']))
		$errors['fini'] = 'Escoge una fecha';
	if (empty($_POST['ffin']))
		$errors['ffin'] = 'Escoge una fecha';
// return  ===========================================================

	if ( ! empty($errors)) {
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		$data['success'] = true;
		$data['message'] = 'Hecho!';
	}
	echo json_encode($data);