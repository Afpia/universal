<?php 
    echo session('errors');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="/api/register" method="post">
        <input type="text" name="nickname">
        <input type="email" name="email">
        <input type="password" name="password">
        <button>отправить</button>
    </form>
</body>

</html>