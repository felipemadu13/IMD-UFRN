<?php
/* Isso é um comentário em PHP */
$nome = "Felipe Madureira";
/* Variáveis tem um $ no início, seguindo do seu nome */
$idade = 31;
/* Arrays são criados com o comando array() com uma lista de valores separados pro
vírgula */
$animais_de_estimação = array("Julie", "Julie de Novo", "Julie terceira vez para mostrar que é Array");
/* funções podem ser declaradas facilmente dentro de arquivos PHP assim: */
function subtrair($a, $b) {
/* Operações matemáticas comuns em valores e variáveis seguem o mesmo
padrão da maioria das linguagens como C e Javascript */
$resultado = $a - $b;
return $resultado;
}
?>


<html lang="pt-br">
    <head>
        <title>Página da <?= $nome ?></title>
    </head>
<body>
    <h1>Página pessoal do <?= $nome ?></h1>
    Oi eu sou o <?= $nome ?>, tenho <?= $idade ?> anos e essa é minha lista de
    animais:
    <ul>
        <?php foreach($animais_de_estimação as $animal) { ?>
        <li><?= $animal ?></li>
        <?php } ?>
    </ul>
    <?php date_default_timezone_set('America/Recife');?>
    Obrigado por me visitar hoje, dia: <?= date("d/m/Y") ?><br/>
    
    Caso tenha curiosidade, 1 - 1 = <?= subtrair(1, 1) ?>

 </body>
</html>