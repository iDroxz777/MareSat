const zonas = {
    enseada: {
        area: 'Enseada Clara',
        vento: '9 nós L',
        ondas: '0,8 m',
        seguranca: 'Favorável',
        resumo: 'Enseada Clara: mar mais abrigado e boa atividade de peixes no começo da manhã.',
        horario: '05h30 até 09h00, antes do vento aumentar no período da tarde.',
        mar: 'Ondas de 0,8 m e maré subindo. Cenário favorável para embarcação pequena.',
        nota: 'Recomendação: priorizar a Enseada Clara e retornar antes do vento ganhar força.'
    },
    norte: {
        area: 'Ponta Norte',
        vento: '11 nós NE',
        ondas: '1,0 m',
        seguranca: 'Boa opção',
        resumo: 'Ponta Norte: rota curta e boa visibilidade próxima da faixa costeira.',
        horario: '06h00 até 10h30, com corrente leve para leste.',
        mar: 'Ondas de 1,0 m e condição estável para saída rápida.',
        nota: 'Recomendação: boa alternativa para pesca curta, mantendo distância segura das pedras.'
    },
    banco: {
        area: 'Banco Azul',
        vento: '15 nós SE',
        ondas: '1,3 m',
        seguranca: 'Monitorar',
        resumo: 'Banco Azul: boa chance de pesca, mas o vento muda perto do meio-dia.',
        horario: '07h00 até 11h00, com atenção ao retorno.',
        mar: 'Ondas de 1,3 m. Vale monitorar o vento a cada nova saída.',
        nota: 'Recomendação: usar o Banco Azul somente com rádio ligado e retorno planejado.'
    },
    canal: {
        area: 'Canal Sul',
        vento: '24 nós SO',
        ondas: '1,9 m',
        seguranca: 'Evitar à tarde',
        resumo: 'Canal Sul: área mais aberta e mais sensível a rajadas depois das 14h.',
        horario: 'Somente cedo, de preferência antes das 08h30.',
        mar: 'Ondas de 1,9 m podem dificultar embarcações pequenas.',
        nota: 'Recomendação: evitar o Canal Sul à tarde e escolher uma área mais abrigada.'
    }
};

function selecionarZona(nomeZona) {
    const dados = zonas[nomeZona];

    document.getElementById('panel-area').textContent = dados.area;
    document.getElementById('panel-wind').textContent = dados.vento;
    document.getElementById('panel-wave').textContent = dados.ondas;
    document.getElementById('panel-safe').textContent = dados.seguranca;
    document.getElementById('summary-zone').textContent = dados.resumo;
    document.getElementById('summary-time').textContent = dados.horario;
    document.getElementById('summary-sea').textContent = dados.mar;
    document.getElementById('coastal-note').textContent = dados.nota;

    document.querySelectorAll('.zone-card').forEach((card) => {
        card.classList.toggle('active', card.dataset.zone === nomeZona);
    });

    document.querySelectorAll('.map-zone').forEach((zona) => {
        zona.classList.toggle('active', zona.dataset.zone === nomeZona);
    });
}

document.querySelectorAll('.zone-card').forEach((card) => {
    card.addEventListener('click', () => selecionarZona(card.dataset.zone));
});
