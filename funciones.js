<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de JavaScript</title>
  <meta charset="UTF-8">
</head>
<body>

<script>
  var cadena=prompt('Ingrese una cadena de cinco caracteres que comience y finalice con a','');
  var patron=/^a...a$/;
  if (patron.test(cadena))
    document.write('cadena correcta');
  else
    document.write('cadena incorrecta');
</script>
  
</body>
</html>