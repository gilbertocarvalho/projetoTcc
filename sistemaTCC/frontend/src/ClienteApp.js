

import axios from "axios";

import React from "react";











class Cliente extends React.Component{

state = {
                 
                 cliente : {

                                               


                                               nome : "",

                                              cpf : "",
                                               
                                            Email:"",

                                          Telefone:"",

                  },

                 


             lista:  []
};

inputChange(campo ,novotexto){

console.log(novotexto)

const novostate ={...this.state};

novostate.cliente[campo] = novotexto;

this.setState(novostate);
}



Adicionar1(){

      const apiURL = 'http://192.168.18.6:8080/Cliente/adicionar';

         fetch(apiURL, { 
                     method : 'POST' ,
                     headers : {
                                   Accept : 'text/plain',
                                  'Content-Type' :'application/json'
                   },
                   body : JSON.stringify(this.state.cliente)}).then(
                     (response)=>{
                       console.log(response);
                      

}
              );
alert("Cliente foi cadastrado");

document.getElementById('textnome').value='';

document.getElementById('textcpf').value='';
}




  render(){




   return  (<div>
                                         <form>
                                                     <div className="form-group">
                                                        <h2>Meu Perfil</h2><br/><br/>
                                                      <h3> informações pessoais</h3>
                                                      <label>NOME:</label>
                                            <input type="text"  className="form-control"  id="textnome" value={this.state.cliente.nome} placeholder="digite o nome" onChange={(novotexto) => {this.inputChange("nome",novotexto.target.value)}}/><br/>
                                                      <label>CPF:</label>
                                            <input type="text"  className="form-control"  id="textcpf" value={this.state.cliente.cpf} placeholder="digite o cpf" onChange={(novotexto) => {this.inputChange("cpf",novotexto.target.value)}}/><br/>
                                                 <label>Email:</label>
                                            <input type="text"  className="form-control"  id="textemail" value={this.state.cliente.email} placeholder="digite o email" onChange={(novotexto) => {this.inputChange("email",novotexto.target.value)}}/><br/>
                <label>Telefone:</label>
                                            <input type="text"  className="form-control"  id="texttelefone" value={this.state.cliente.telefone} placeholder="digite o email" onChange={(novotexto) => {this.inputChange("telefone",novotexto.target.value)}}/><br/>


                                          <input type="button" className="btn btn-primary" value="adicionar" onClick={() =>this.Adicionar1()}/ >
                        //                 {this.BotaoPesquisar()}

                   //                           <div>{this.listadevinhos()}</div>
                                       
                                                  </div>
                                       </form>
</div>)  ;
}
  



AlterarMedicos(){

             const novostate = {...this.state};

           novostate.lista[0].nome = "paulo";
           this.setState(novostate);

}

BotaoPesquisar(){
     
       return(<input type='button'   className="btn btn-primary"  value='Pesquisar' id='borao' onClick={ () =>{this.cliente()}}/>);


}

listadevinhos(){


              const listavinho = [];

            for(let i=0;i < this.state.lista.length;i++)
{

                 listavinho.push (<tr key={i}>
                                     

                                             <td>{this.state.lista[i].id}</td><td>{this.state.lista[i].nome}</td>            <td>{this.state.lista[i].safra}</td>    <td>{this.state.lista[i].preco}</td>


                                                        </tr> );
     

}

  return(<div>
                           <table className="table table-stripped">
                             <thead>
                                          <th>Id</th> <th>Nome</th> <th>Data da Safra</th><th>Tipo da Uva</th>
                             </thead>

                          <tbody>
                      {listavinho}
                            </tbody>
                             </table>
  </div>);



}

vinho(){
                                  



              const url = "http://192.168.18.6:8080/Vinho/pesquisar/" + document.getElementById('textnome').value ;

           axios.get(url,{responseType : 'json',}).then(

              (response)=> {  


                  const novostate = {...this.state};
                  
                 novostate.lista = response.data;

                this.setState(novostate);                   
                console.log(response.data)
              }

           );
 
            console.log("vinho Adicionados pesquisar acionado"); 

}



}






function Cabecalho(){

      return (<p></p>);

}




function RetornaValor(){

          return (
           <div className="container">
              {Cabecalho()} 
            <Cliente/>
        
            


 

            </div>
          );
          

        }
        
        export default RetornaValor;     