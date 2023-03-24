


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './EstoqueApp';
import App1 from './App1'
import reportWebVitals from './reportWebVitals';
import Livro from './LivroApp'
import Cliente from './ClienteApp'
import Venda from './VendaApp'
import Autor from './AutorApp'

import {Route,Link,BrowserRouter as Router,Routes } from 'react-router-dom'


const routing = ( <Router ><div><h1>  React Router Example</h1>

                                                                           <Link to="/">Controle de Estoque
</Link>
                                                                       <Link to="/Livro">Cadastro de Livro</Link>

                                                                        <Link to="/Cliente">Cadastro de Cliente</Link>
                                                                             <Link to="/Venda">Registro de venda</Link>
                                                                              <Link to="/Autor">Registro de venda</Link>
                                                                      <Routes> 


                                                                    <Route exact path="/" element= {<App/>}/>
                                                                     <Route exact path="/Livro"   element= {<Livro/>}/>
                                                                    <Route path="/Cliente"  element={<Cliente/>}/>
                                                                      <Route path="/Venda" element={<Venda/>}/>
                                                                         <Route path="/Autor" element={<Autor/>}/>
                                                                  </Routes>





</div></Router>

                                   
 )



ReactDOM.render(<React.StrictMode>{routing}</React.StrictMode>,document.getElementById('root')
);


	
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
