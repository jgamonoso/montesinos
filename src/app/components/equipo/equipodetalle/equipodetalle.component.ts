import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-managerdetalle',
  templateUrl: './equipodetalle.component.html',
  styles: []
})
export class EquipodetalleComponent implements OnInit {

  manager: any = {};
  proximasTemporadas: any[] = [];
  valueAbr: any[] = [];

  constructor( private activatedRoute: ActivatedRoute, public _manager: ManagerService ) {

  }

  ngOnInit() {
    this.activatedRoute.params
        .map( params => params['id'] ) // estoy asignando el valor del parametro id a params
        .subscribe( id => {

          this._manager.getManager( id ) // devuelve el manager
              .map((resp: any) => resp)
              .subscribe( manager => {
                debugger;
                this.manager = manager;
                console.log( this.manager );
              });



          // this._manager.getEquipoNba( 1 ) //devuelve el equiponba
          //     .map( params => params['abrev'] )
          //     .subscribe( abreviado => {
          //       console.log( abreviado );
          //     });

        });

        this._manager.getProximasTemporadas()
            .map((resp: any) => resp)
            .subscribe( temporadas  => {
              this.proximasTemporadas = temporadas;
              console.log( this.proximasTemporadas );
            });
  }

  // obtenerEquipoNba( idx: number){
  //
  //   this._manager.getEquipoNba( idx ) //devuelve el equiponba
  //       .map( params => params['abrev'] )
  //       .subscribe( abreviado => {
  //         console.log( abreviado );
  //       });
  // }



}
