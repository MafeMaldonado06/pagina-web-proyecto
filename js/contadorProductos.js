function calcular(){
    const produ1 = 2000;
    const produ2 = 2500;
    const produ3 = 3000;
    const produ4 = 4000;
    const produ5 = 2500;
    try {
        var a = parseFloat(document.getElementById("valor1").value) || 0;
        b = parseFloat(document.getElementById("valor2").value) || 0;
        c = parseFloat(document.getElementById("valor3").value) || 0;
        d = parseFloat(document.getElementById("valor4").value) || 0;
        e = parseFloat(document.getElementById("valor5").value) || 0;

        var totalp = produ1 * a;
        var totalp1 = produ2 * b;
        var totalp2= produ3 * c;
        var total3 = produ4 * d;
        var totalp4 = produ5 * e;
        var totalcantidad = totalp + totalp1 + totalp2 + total3 + totalp4;

        document.getElementById("total").value = totalcantidad;
        
    } catch (e) {}
}