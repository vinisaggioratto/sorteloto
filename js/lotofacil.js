let baseUrl1 = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest"
/**/
/**/

function exibirResultadoLotoFacilResumido() {
    resultado = document.getElementById('exibirResultado')
    let acumulado = 'Não'
    axios.get(baseUrl1)
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response);

            let tab =
                `
          <thead>
          <tr>
              <th scope="col">concurso</th>
              <th scope="col">data</th>
              <th scope="col">Acumulou?</th>
            </tr>
      </thead>
      `;

            tab +=
                `
          <tr">
              <td>${response.data.concurso}</td>
              <td>${response.data.data}</td>
              <td>${acumulado}</td>
          </tr>
          `;

            let tab2 =
                `
          <thead>
          <tr>
              <th scope="col" colspan="3">Dezenas sorteadas</th>

          </tr>
      </thead>
      `;

            if (response.data.acumulou) {
                acumulado = 'Sim'
            }
            let array = [];
            let arrayOrigin = response.data.dezenas;
            for (let i = 0; i < arrayOrigin.length; i++) {
                console.log(arrayOrigin[i])
                array += '<span class="configNumberResultados" style="border-color:#930089;">' + arrayOrigin[i] + '</span>'
            }
            tab2 +=
                `
          <tr onclick="preencherFormulario(this)">
              <td colspan="3">${array}</td>
              
          </tr>
          `;

            let tab3 =
                `
<thead>
<tr>
  <th scope="col" colspan="3" style="text-align:center">Próximo concurso</th>

</tr>
</thead>
`;
            let tab4 =
                `
          <thead>
          <tr>
              <th scope="col">Concurso</th>
              <th scope="col">Data</th>
              <th scope="col">Prêmio</th>

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
          </tr>
          `;

            document.getElementById("bodytabelaLotofacil").innerHTML = tab;
            document.getElementById("bodytabelaLotofacil").innerHTML += tab2;
            document.getElementById("bodytabelaLotofacil").innerHTML += tab3;
            document.getElementById("bodytabelaLotofacil").innerHTML += tab4;
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })
        .finally(function () {
            // sempre será executado
        });
}

function exibirResultadoLotoFacil() {

    /**/
    resultado = document.getElementById('exibirResultado')
    let acumulado = 'Não'
    axios.get(baseUrl1)
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
            let tab3 =
                `
<thead>
<tr>
  <th scope="col" colspan="5" style="text-align:center">Próximo concurso</th>

</tr>
</thead>
`;
            let tab4 =
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

            document.getElementById("bodytabelaLotofacil").innerHTML = tab;
            document.getElementById("bodytabelaLotofacil").innerHTML += tab2;
            document.getElementById("bodytabelaLotofacil").innerHTML += tab3;
            document.getElementById("bodytabelaLotofacil").innerHTML += tab4;
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })
        .finally(function () {
            // sempre será executado
        });

}

//export { exibirResultadoMegaSena };