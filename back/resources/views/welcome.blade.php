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
    <form action="/api/addPost" method="post">
        <input type="text" name="title">
        <input type="text" name="text">
        <input type="text" name="category">
        <input type="text" name="user">

        <button>отправить</button>
    </form>
</body>

</html>