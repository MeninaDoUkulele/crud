// Crud_JavaScript - 2019/1;
// Luana Gabriele de Sousa Costa;

var app = new function() {

  this.el = document.getElementById('nomes');

  this.nomes = ['Luana', 'Hiuri', 'Davi', 'Henrique', 'Renan', 'Héricles', 'Julio', 'Alan'];

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'name';

    if (data) {
      if (data > 1) {
        name = 'nomes';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No' + name;
    }
  };

  this.FetchAll = function() {
    var data = '';

    if (this.nomes.length > 0) {
      for (i = 0; i < this.nomes.length; i++) {
        data += '<tr>';
        data += '<td>' + this.nomes[i] + '</td>';
        data += '<td><button onclick="app.Editar(' + i + ')">Editar</button></td>';
        data += '<td><button onclick="app.Deletar(' + i + ')">Deletar</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.nomes.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-name');
    //Pega o valor;
    var name = el.value;

    if (name) {
      // Adiciona o novo valor;
      this.nomes.push(name.trim());
      // Reseta o valor;
      el.value = '';
      // Mostra a nova lista;
      this.FetchAll();
    }
  };

  this.Editar = function (item) {
    var el = document.getElementById('edit-name');
    // Mostra o valor na célula;
    el.value = this.nomes[item];
    // Mostra as células;
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Pega o valor
      var name = el.value;

      if (name) {
        // Edita o valor;
        self.nomes.splice(item, 1, name.trim());
        // Mostra a nova lista;
        self.FetchAll();
        // Esconde células;
        CloseInput();
      }
    }
  };

  this.Deletar = function (item) {
    // Deleta;
    this.nomes.splice(item, 1);
    //  Mostra a nova lista;
    this.FetchAll();
  };

}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
