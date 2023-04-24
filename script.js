let informacoes = [];

function adicionar() {

  const id = Number(document.getElementById("id").value);
  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;
  const data = document.getElementById("data").value;
  const situacao = document.getElementById("situacao").value;

  if(id == ""){
    alert("Preencha o campo ID !");
  }
  if(descricao == ""){
    alert("Preencha o campo descricao !");
  }
  if(valor == ""){
    alert("Preencha o campo valor !");
  }
  if(data == ""){
    alert("Preencha o campo data !");
  }
  if(categoria == ""){
    alert("Preencha o campo categoria !");
  }
  if(situacao == ""){
    alert("Preencha o campo situacao !");
  }
  else{
    informacoes.push({
      id: id,
      descricao: descricao,
      valor: valor,
      categoria: categoria,
      data: data,
      situacao: situacao,
    });
  }
  montarTabela();
}

function montarTabela() {
  const tabela = document.getElementById("tabela"); // pega a tabela no html pelo id
  tabela.innerHTML = ""; // limpa ou zera toda a tabela

  for (let i = 0; i < informacoes.length; i++) {
    tabela.innerHTML += `
      <tr>
        <td>${informacoes[i].id}</td>
        <td>${informacoes[i].descricao}</td>
        <td>R$${informacoes[i].valor}</td>
        <td>${informacoes[i].categoria}</td>
        <td>${informacoes[i].data}</td>
        <td>${informacoes[i].situacao}</td>
        <td>
          <button onclick="excluir(${i})">Excluir</button>
          <button onclick="editar(${i})">Editar</button>
        </td>
      </tr>
    `;
  }
}

function limpar() {
  Number(document.getElementById("id").value) = "";
  document.getElementById("descricao").value = "";
  Number(document.getElementById("valor").value) = "";
  document.getElementById("categoria").value = "";
  document.getElementById("data").value = "";
  document.getElementById("situacao").value = "";
  informacoes = [];
  montarTabela();
}

function excluir(indice) {
  const desejaExcluir = confirm(`Excluir ID ${informacoes[indice].id}?`);
  if(desejaExcluir){
    informacoes.splice(indice, 1);
    montarTabela();
  }
}

montarTabela();




