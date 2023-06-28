<?php
  $nome = "Maria Eduarda Pereira";
  $idade = 35;
  $animais_de_estimação = array("Juá", "Oriosvaldo");
  function subtrair($a, $b) {
    $resultado = $a - $b;
    return $resultado;
  }
?>
<html>
 <head>
  <title>Página do <?= $nome ?></title>
 </head>
 <body>
  <h1>Página pessoal do <?= $nome ?></h1>
    Oi eu sou o <?= $nome ?>, tenho <?= $idade ?> anos e essa     é minha lista de
    animais:
  <ul>
  <?php foreach($animais_de_estimação as $animal) { ?>
    <li><?= $animal ?></li>
    <?php } ?>
  </ul>
Obrigado por me visitar hoje, dia: <?= date("d/m/Y") ?><br/>
Caso tenha curiosidade, 1 - 1 = <?= subtrair(1, 1) ?>

 </body>
</html>