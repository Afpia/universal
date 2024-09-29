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
    <form action="/api/posts/47/comments" method="post">
        <input type="text" name="comment">
        <input type="text" name="id">
        <button>отправить</button>
    </form>
</body>

</html>