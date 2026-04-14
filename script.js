function calcular() {
    const cto = parseFloat(document.getElementById('sinalCto').value);
    const metros = parseFloat(document.getElementById('distancia').value);
    const resultDiv = document.getElementById('resultado');
    const texto = document.getElementById('textoResultado');
    const statusIcon = document.getElementById('statusIcon');

    if (isNaN(cto) || isNaN(metros)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Lógica técnica: Perda do cabo (0.35db/km) + margem de conectores (0.5db)
    const perdaCabo = (metros / 1000) * 0.35;
    const margemConectores = 0.5;
    const sinalFinal = (cto - perdaCabo - margemConectores).toFixed(2);

    resultDiv.classList.remove('hidden');

    // Regra de negócio de Telecom: Sinal ideal entre -15dBm e -25dBm
    if (sinalFinal >= -25) {
        statusIcon.innerHTML = '<i class="fas fa-check-circle" style="color: #2ecc71; font-size: 3rem;"></i>';
        texto.innerHTML = `<strong>Sinal Estimado: ${sinalFinal} dBm</strong><br>Status: Viável para instalação.`;
        resultDiv.style.borderColor = "#2ecc71";
    } else {
        statusIcon.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: #e74c3c; font-size: 3rem;"></i>';
        texto.innerHTML = `<strong>Sinal Estimado: ${sinalFinal} dBm</strong><br>Status: Risco de instabilidade.`;
        resultDiv.style.borderColor = "#e74c3c";
    }
}
