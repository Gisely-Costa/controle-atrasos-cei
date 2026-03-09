        document.getElementById('formAtraso').addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const btn = document.getElementById('btnEnviar');
            btn.innerText = 'Salvando no sistema...';
            btn.style.backgroundColor = '#999';
            btn.disabled = true;

            const formData = new FormData(this);

            const urlScript = 'https://script.google.com/macros/s/AKfycbxKC7Zz9OrRkVTxoWvIPAt0g-b9A-wcRMzLcuhv0PMP0uytpzsMN6tatuW2zc_GvEAH/exec'; 

            fetch(urlScript, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).then(() => {
                
                document.getElementById('formAtraso').style.display = 'none';
                document.getElementById('telaSucesso').style.display = 'block';
                document.getElementById('formAtraso').reset();
            }).catch(error => {
                alert('Erro de conexão. Tente novamente.');
            }).finally(() => {
                btn.innerText = 'Registrar Atraso';
                btn.style.backgroundColor = 'var(--azul-principal)';
                btn.disabled = false;
            });
        });

        function voltarFormulario() {
            document.getElementById('telaSucesso').style.display = 'none';
            document.getElementById('formAtraso').style.display = 'block';
        }
    