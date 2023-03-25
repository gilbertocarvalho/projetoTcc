 package edu.curso.Livraria;

import org.springframework.context.annotation.Bean;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import  org.springframework.security.crypto.password.NoOpPasswordEncoder;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{


         @Autowired
         UserDetailsService userdetailsservice;

         @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception{
          
  

                                auth.userDetailsService(userdetailsservice)

                                 .passwordEncoder( getPasswordEncoder());


                        //       ;
                                    
                         //    auth.inMemoryAuthentication()
                             //    .withUser("user").password("{noop}password").roles("USER")
                             //    . and()
                             //    .withUser("admin").password("{noop}password").roles("USER","ADMIN");

      }


@Bean
public PasswordEncoder getPasswordEncoder(){

       return NoOpPasswordEncoder.getInstance(); 
}


     @Override
    protected void configure(HttpSecurity http) throws Exception{

              http

                          .httpBasic()
                         .and()
                       .authorizeRequests()
                        .antMatchers(HttpMethod.GET, "/Pets/Clientes/*").hasAuthority("USER")
                        .antMatchers(HttpMethod.POST, "/Pets/Veterinario/add/*").hasAuthority("USER")
                        .antMatchers(HttpMethod.POST, "/Cliente/adicionar/*").hasAuthority("USER")
                         .antMatchers(HttpMethod.GET, "/Cliente/Pesquisar/*").hasAuthority("USER")

                     //     .antMatchers(HttpMethod.POST, "/Pets/Clientes/add").hasRole("USER")
                      .and()
                      .csrf().disable()
 
                      .formLogin().disable();
                         }

  }