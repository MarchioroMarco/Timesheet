import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DipendentiService } from 'src/app/api/core/services/dipendenti.service';

@Component({
  selector: 'app-dettaglio-dipendenti-page',
  templateUrl: './dettaglio-dipendenti-page.component.html',
  styleUrls: ['./dettaglio-dipendenti-page.component.scss']
})
export class DettaglioDipendentiPageComponent implements OnInit {
  public soggetto:any;
  constructor(public routeActive:ActivatedRoute, public dipendente:DipendentiService) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.params.id; //.id è il parametro che voglio all'interno dell'url
    console.log("id", id);
    this.soggetto = this.dipendente.getById(id);
    console.log("sogg", this.soggetto);
  }

}
