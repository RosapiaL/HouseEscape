<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="primolivello.css">
    <title>Document</title>
</head>
<body>
<div class="bg" onmousemove="moveTorch(event)"></div>
    <div class="torch" >
      <img src="./img/casa_quattro.png" usemap="#interruttore">
      <map name="interruttore">
        <area shape="rect" alt="parte 1 immagine" coords="93,238,127,282" href="./login.php" title="interruttore">
</map>
    </div>
</div>
    <script>
        function moveTorch(event){
            var torch = document.getElementsByClassName("torch")[0];
            torch.style.clipPath = `circle(100px at ${event.offsetX}px ${event.offsetY}px)`;
        }
        </script>
    </div>    
    </div>
    
</body>
</html>
