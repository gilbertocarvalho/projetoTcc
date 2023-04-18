

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
public class AutorController{


 @Autowired
 AutorRepository autorRepository;



@CrossOrigin
@RequestMapping(value="/Autor/adicionar",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody Autor autor){




 autorRepository.save(autor);





return "autor"   +    autor.getNome()   + " foi cadastrado";
        
}

       @CrossOrigin
         @RequestMapping(value="/Autor/listar",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<Autor>> Listar(){

                          


                             List<Autor> listadeautor= new ArrayList<Autor>(); 


                       

                        	listadeautor = autorRepository.findAll ();  
 
                        	  
                                            
                        

                       
                       
                       
                       
                       
                  

                           System.out.println("autor foi pesquisado");
                          
                              return ResponseEntity.ok(listadeautor);
                            		  

	}



}