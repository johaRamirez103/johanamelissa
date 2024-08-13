function calcular()
{
    let nombre=(document.getElementById('edad1').value);
    let edad=parseInt(document.getElementById('edad1').value);

    var genero = document.querySelector('input[name="sexo"]:checked').value;
    let aumento;
    let deporte;
    aumento=edad+10;

    if(genero=="masculino")
    {
        alert("Excelente Caballero, Su edad aumentada es: "+aumento);
    }
    else{
    
    alert("Excelente Señoritas, Su edad aumentada es "+aumento);
    }
}