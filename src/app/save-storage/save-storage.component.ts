import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-storage',
  templateUrl: './save-storage.component.html',
  styleUrls: ['./save-storage.component.scss']
})
export class SaveStorageComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      texto: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    sessionStorage.setItem('VerficacionGuard', this.formulario.value.texto);
  }

}
