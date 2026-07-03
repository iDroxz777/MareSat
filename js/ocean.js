const routeForm = document.getElementById('routeForm');
const routeStatus = document.getElementById('routeStatus');
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');

function mostrarStatus(mensagem, tipo) {
    routeStatus.textContent = mensagem;
    routeStatus.className = 'route-status ' + tipo;
}

routeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const origem = originInput.value.trim();
    const destino = destinationInput.value.trim();

    if (!origem || !destino) {
        mostrarStatus('Preencha origem e destino para calcular a rota.', 'error');
        return;
    }

    // Dados simulados para o protótipo da Global Solution.
    const dados = {
        corrente: (Math.random() * 3 + 1).toFixed(1),
        direcaoCorrente: ['NO > SE', 'NE > SW', 'SO > NE', 'SE > NO'][Math.floor(Math.random() * 4)],
        vento: (Math.random() * 20 + 5).toFixed(1),
        direcaoVento: ['NE > SW', 'NO > SE', 'SO > NE', 'SE > NO'][Math.floor(Math.random() * 4)],
        onda: (Math.random() * 3 + 0.5).toFixed(1),
        periodo: (Math.random() * 8 + 4).toFixed(0),
        economia: (Math.random() * 20 + 15).toFixed(0),
        co2: (Math.random() * 500 + 100).toFixed(0)
    };

    document.getElementById('val-corrente').textContent = dados.corrente + ' nós';
    document.getElementById('dir-corrente').textContent = dados.direcaoCorrente;
    document.getElementById('val-vento').textContent = dados.vento + ' nós';
    document.getElementById('dir-vento').textContent = dados.direcaoVento;
    document.getElementById('val-onda').textContent = dados.onda + ' m';
    document.getElementById('val-periodo').textContent = dados.periodo + ' s';
    document.getElementById('val-economia').textContent = dados.economia + '%';
    document.getElementById('val-co2').textContent = dados.co2 + ' kg';

    mostrarStatus('Rota simulada de ' + origem + ' até ' + destino + ' calculada com sucesso.', 'success');
});

document.querySelectorAll('.quick-routes button').forEach(function (button) {
    button.addEventListener('click', function () {
        originInput.value = button.dataset.origin;
        destinationInput.value = button.dataset.destination;
        routeForm.requestSubmit();
    });
});
