

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
public class EditoraController{


 @Autowired
 EditoraRepository editoraRepository;



@CrossOrigin
@RequestMapping(value="/Editora/adicionar",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody Editora editora){




 editoraRepository.save(editora);





return "editora"   +    editora.getNome()   + " foi cadastrado";
        
}

       @CrossOrigin
         @RequestMapping(value="/Editora/listar",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<Editora>> Listar(){

                          


                             List<Editora> listadeeditora= new ArrayList<Editora>(); 


                       

                        	listadeeditora = editoraRepository.findAll ();  
 
                        	  
                                            
                        

                       
                       
                       
                       
                       
                  

                           System.out.println("editora foi pesquisado");
                          
                              return ResponseEntity.ok(listadeeditora);
                            		  

	}



}