   package edu.curso.Livraria;

import java.util.ArrayList;
import java.util.List;


import java.util.Optional;



import javax.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class EstoqueController{

 @Autowired
 EntradaRepository entradaRepository;

 @Autowired
 SaidaRepository saidaRepository;



@CrossOrigin
@RequestMapping(value="/Estoque/adicionarentrada",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody EntradaEstoque entrada){


entrada.setData(java.time.LocalDate.now());

entrada.setHora(java.time.LocalTime.now());
 entradaRepository.save(entrada);

entradaRepository.realizarentrada(entrada.getQuantidade(),entrada.getLivro().getIsbn());





return "entrada"   +   " foi cadastrado";
        
}

@CrossOrigin
@RequestMapping(value="/Estoque/adicionarsaida",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody SaidaEstoque saida){


saida.setData(java.time.LocalDate.now());
saida.setHora(java.time.LocalTime.now());
 saidaRepository.save(saida);

saidaRepository.realizarentrada(saida.getQuantidade(),saida.getLivro().getIsbn());



return "saida"   +   " foi cadastrada";
        
}


        @CrossOrigin
         @RequestMapping(value="/Estoque/listarentrada",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<EntradaEstoque>> Listar(){

                          

  
 
                        	  
                                            
                        

                       
                       
                       
                       
                       
                  

                           System.out.println("entrada foi pesquisado");
                          
                              return ResponseEntity.ok( entradaRepository.findAll () );
                            		  

	}

      @CrossOrigin
         @RequestMapping(value="/Estoque/listarsaida",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<SaidaEstoque>> ListarSaidas(){

                          

  
 
                        	  
                                            
                        

                       
                       
                       
                       
                       
                  

                           System.out.println("saida foi pesquisado");
                          
                              return ResponseEntity.ok( saidaRepository.findAll () );
                            		  

	}
















} 


