let baseUrl5 = "https://loteriascaixa-api.herokuapp.com/api/lotomania/latest"
/**/
/**/
function exibirResultadoLotomania() {
    resultado = document.getElementById('exibirResultado')
    let acumulado = 'Não'
    axios.get(baseUrl5)
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response);

            let tab =
                `
          <thead>
          <tr>
              <th scope="col">concurso</th>
              <th scope="col">data</th>
              <th scope="col">Dezenas sorteadas</th>
              <th scope="col">Acumulou?</th>
              <th scope="col"></th>
          </tr>
      </thead>
      `;

            if (response.data.acumulou) {
                acumulado = 'Sim'
            }
            tab +=
                `
          <tr onclick="preencherFormulario(this)">
              <td>${response.data.concurso}</td>
              <td>${response.data.data}</td>
              <td>${response.data.dezenas}</td>
              <td>${acumulado}</td>
              <td></td>
          </tr>
          `;

            let tab2 =
                `
    <thead>
    <tr>
        <th scope="col">Premiações</th>
        <th scope="col">Ganhadores</th>
        <th scope="col">Prêmio</th>
        <th scope="col"></th>
        <th scope="col"></th>
    </tr>
</thead>
`;

            tab2 +=
                `
    <tr onclick="preencherFormulario(this)">
        <td scope="row">${response.data.premiacoes[0].descricao}</td>
        <td>${response.data.premiacoes[0].ganhadores}</td>
        <td>${response.data.premiacoes[0].valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        <td></td>
        <td></td>
    </tr>    
    <tr onclick="preencherFormulario(this)">
    <td scope="row">${response.data.premiacoes[1].descricao}</td>
    <td>${response.data.premiacoes[1].ganhadores}</td>
    <td>${response.data.premiacoes[1].valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td></td>
    <td></td>
</tr>
<tr onclick="preencherFormulario(this)">
<td scope="row">${response.data.premiacoes[2].descricao}</td>
<td>${response.data.premiacoes[2].ganhadores}</td>
<td>${response.data.premiacoes[2].valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
<td></td>
<td></td>
</tr>
    `;
    let tab3=
    `
<thead>
<tr>
  <th scope="col" colspan="5" style="text-align:center">Próximo concurso</th>

</tr>
</thead>
`;
    let tab4=
                `
          <thead>
          <tr>
              <th scope="col">Concurso</th>
              <th scope="col">Data</th>
              <th scope="col">Prêmio</th>
              <th scope="col"></th>
              <th scope="col"></th>
          </tr>
      </thead>
      `;

            if (response.data.acumulou) {
                acumulado = 'Sim'
            }
            tab4 +=
                `
          <tr onclick="preencherFormulario(this)">
              <td>${response.data.proximoConcurso}</td>
              <td>${response.data.dataProximoConcurso}</td>
              <td>${response.data.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              <td></td>
              <td></td>
          </tr>
          `;
            
            document.getElementById("bodytabelaLotomania").innerHTML = tab;
            document.getElementById("bodytabelaLotomania").innerHTML += tab2;
            document.getElementById("bodytabelaLotomania").innerHTML += tab3;
            document.getElementById("bodytabelaLotomania").innerHTML += tab4;
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })
        .finally(function () {
            // sempre será executado
        });
}
