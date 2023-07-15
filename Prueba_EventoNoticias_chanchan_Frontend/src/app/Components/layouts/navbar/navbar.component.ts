import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  eventos:String = "" ;
  noticias:String = "" ; 

  constructor(private route:Router) { }
  ngOnInit(): void {
    
    let user = JSON.parse(String(localStorage.getItem("User")))
    console.log(user);
    if (user == null) {
      this.eventos = "/eventos";  
      this.noticias = "/newslist";
  
    }

    else if (user.type == "Administrador") {
      this.eventos = "/eventos";  
      this.noticias = "/newslist";

    }

  }
  
}
