import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  ubicanosForm!: FormGroup;
  mensajeConfirmacion: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ubicanosForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mensaje: ['', Validators.required]
    });

}

onSubmit(): void {
  if (this.ubicanosForm.valid) {
    const { nombre, apellido, email, telefono, mensaje } = this.ubicanosForm.value;

    console.log('Datos del formulario:', this.ubicanosForm.value);

    this.mensajeConfirmacion = `Hola ${nombre} ${apellido}, su mensaje ha sido enviado correctamente.`;

    this.ubicanosForm.reset();
    
  } else {
    console.log('Formulario inválido');
  }
}
}

