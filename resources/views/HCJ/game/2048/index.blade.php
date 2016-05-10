<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>2048</title>

    <link rel="stylesheet" type="text/css" href="/p_HCJ/game/2048/style.css">

    <script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.0/jquery.min.js"></script>
    <script src="/p_HCJ/game/2048/support.js"></script>
    <script src="/p_HCJ/game/2048/showanimation.js"></script>
    <script src="/p_HCJ/game/2048/main.js"></script>
</head>
<body>
<header>
    <h1>2048</h1>
    <a href="javascript:newgame();" id="a_newgame">New Game</a>
    <div>score:<span id="sp_score">0</span></div>
</header>

<div id="grid-container">
    <div class="grid-ceil" id="grid-ceil-0-0"></div>
    <div class="grid-ceil" id="grid-ceil-0-1"></div>
    <div class="grid-ceil" id="grid-ceil-0-2"></div>
    <div class="grid-ceil" id="grid-ceil-0-3"></div>

    <div class="grid-ceil" id="grid-ceil-1-0"></div>
    <div class="grid-ceil" id="grid-ceil-1-1"></div>
    <div class="grid-ceil" id="grid-ceil-1-2"></div>
    <div class="grid-ceil" id="grid-ceil-1-3"></div>

    <div class="grid-ceil" id="grid-ceil-2-0"></div>
    <div class="grid-ceil" id="grid-ceil-2-1"></div>
    <div class="grid-ceil" id="grid-ceil-2-2"></div>
    <div class="grid-ceil" id="grid-ceil-2-3"></div>

    <div class="grid-ceil" id="grid-ceil-3-0"></div>
    <div class="grid-ceil" id="grid-ceil-3-1"></div>
    <div class="grid-ceil" id="grid-ceil-3-2"></div>
    <div class="grid-ceil" id="grid-ceil-3-3"></div>
</div>
</body>
</html>