document.getElementById('formAtraso').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const btn = document.getElementById('btnEnviar');
    btn.innerText = 'Salvando no sistema...';
    btn.style.backgroundColor = '#999';
    btn.disabled = true;

    // O FormData vai capturar apenas o campo de "Nome" agora, já que os outros sumiram do HTML.
    const formData = new FormData(this);

    // URL original do seu Google Apps Script
    const urlScript = 'https://script.google.com/macros/s/AKfycbzumX3myJFn3eO3M0eeEjtYHbcC-Jylbn6Kokbo1QBh925GdZK-C2S8y_eLLGZ2bogX/exec';

    fetch(urlScript, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        // Sucesso: Troca a tela
        document.getElementById('formAtraso').style.display = 'none';
        document.getElementById('telaSucesso').style.display = 'block';
        document.getElementById('formAtraso').reset();
    }).catch(error => {
        alert('Erro de conexão. Tente novamente.');
    }).finally(() => {
        // Libera o botão novamente
        btn.innerText = 'Registrar Atraso';
        btn.style.backgroundColor = 'var(--azul-principal)';
        btn.disabled = false;
    });
});

function voltarFormulario() {
    document.getElementById('telaSucesso').style.display = 'none';
    document.getElementById('formAtraso').style.display = 'block';
}
