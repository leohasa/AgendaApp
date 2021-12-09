import { Component, Input, OnInit } from '@angular/core';
import { Publicacion } from '../../model/publicacion';
import { Puntuacion } from '../../model/puntuacion';
import { PuntuacionService } from '../../service/puntuacion.service';
import { SharehtmlService } from '../../service/sharehtml.service';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {

  @Input() publicacion: any;
  publicacionP: Publicacion;
  puntuacion: Puntuacion;
  constructor(private shareService: SharehtmlService, private service: PuntuacionService) {
    this.publicacion = new Puntuacion();
  }

  ngOnInit(): void {
    this.publicacionP = this.publicacion;
  }
  disminuir() {
    this.changePuntuacion(this.publicacionP, false);
  }
  aumentar() {
    this.changePuntuacion(this.publicacionP, true);
  }
  changePuntuacion(publicacion: Publicacion, aumento: Boolean) {

    let username = localStorage.getItem("username") ?? "";


    this.service.existPuntuacionByUserAndPublicacion(username, this.publicacionP.id)
      .subscribe(element => {


        if (element) {

          this.service.getPuntuacionByUserAndPublicacion(username, this.publicacionP.id)
            .subscribe(puntos => {
              var puntRegister = +puntos.punto;

              if( aumento){
                  if(puntRegister < 1){

                    puntRegister += 1;
                    puntos.punto = ""+puntRegister
                    this.confirmChange(puntos,publicacion,aumento);

                  }
              }else{
                if(puntRegister > -1){

                  puntRegister -= 1;
                  puntos.punto = ""+puntRegister
                  this.confirmChange(puntos,publicacion,aumento);

                }
              }

            });

        } else {
          this.puntuacion = new Puntuacion();
          this.puntuacion.publicacion = this.publicacionP;
          this.puntuacion.punto = (aumento) ? "1" : "-1";
          this.puntuacion.usuario.username = localStorage.getItem("user") ?? "";
          this.service.create(this.puntuacion).
            subscribe(x => {
              this.changeVisual(this.publicacionP, aumento)
            });

        }
      });

  }
  changeVisual(publicacion: Publicacion, aumento: Boolean) {

    var cadena = publicacion.puntuacion;
    var puntuacion: number = +cadena;

    puntuacion = aumento ? ++puntuacion : --puntuacion;


    publicacion.puntuacion = "" + puntuacion;
    this.shareService.aumentar.emit(publicacion);
  }
  confirmChange(puntuacion:Puntuacion, publicacion:Publicacion, aumento:Boolean){

    this.service.edit(puntuacion)
    .subscribe(()=>{
      this.changeVisual(publicacion,aumento);
    });
  }
}
