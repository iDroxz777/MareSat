document.getElementById('calculateRoute').addEventListener('click', function () {
    const origem = document.getElementById('origin').value;
    const destino = document.getElementById('destination').value;

    if (!origem || !destino) {
        alert('Preencha origem e destino!');
        return;
    }

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
});