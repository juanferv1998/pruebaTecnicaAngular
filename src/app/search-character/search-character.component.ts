import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { character } from './character.models';
import { SearchCharacterService } from './search-character.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  formulario: FormGroup;
  dataCharacter: any;

  constructor( private service: SearchCharacterService ) {
    this.formulario = new FormGroup({
      number: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void { }

  onSubmit(){
    this.service.getCharacter(this.formulario.value.number).subscribe(character => {
      this.dataCharacter = character;
    })
  }

}
