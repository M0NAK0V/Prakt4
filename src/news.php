<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<title>Новости!</title>
		<link rel="shortcut icon" href="media/favicon.png">
		<link rel="stylesheet" href="css/news.css">
		<script src="js/default.js"></script>
		<script src="js/news.js"></script>
	</head>
	<body>
		<nav class="panel" id="her">
			<?php
				require_once "news/nav.php";
			?>
		</nav>
		<section class="center_colum">
			<?php
				require_once "news/section.php";
			?>
		</section>
	</body>
</html>