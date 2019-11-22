import { Injectable, NgZone } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
// import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
// import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    usuarioPendienteDeConfirmación: Usuario;

  constructor(
      public http: HttpClient,
      private router: Router,
      private zone: NgZone
  ) {
   }



    crearUsuario(usuario: Usuario) {

        const url = URL_SERVICIOS + '/usuario';
        console.log(url);
        return this.http.post(url, usuario)
            .pipe(
                map( (resp: any) =>{
                    this.usuarioPendienteDeConfirmación =  resp.usuario;
                    return resp.usuario
                } )
            );
    }

    checkEmailNotTaken(email: string) {
        const url = URL_SERVICIOS + '/usuario/verificaEmailDisponible/' + email;
        return this.http.get(url)
            .pipe(
                map((resp: any) =>  resp.total <= 0)
            );
    }

    reenviarEmail(usuario: Usuario) {
        console.log('entrams en serviio');
        console.log(usuario);
        const url = URL_SERVICIOS + '/usuario/reenviar_email';
        console.log(url);
        return this.http.post(url,usuario)
            .pipe(
                map( (resp: any) => {
                    console.log(this.router)
                    this.router.navigate(['/login']);
                    return resp;
                    
                   
                }),
                catchError(err => {
                    if (err.status === 409) {
                       
                        console.log(err)
                        this.router.navigate(['/login']);
                        // Swal.fire(, , 'success');
                        Swal.fire({
                            icon: 'success',
                            title: 'Inicie Sesión',
                            text: err.error.mensaje,
                            confirmButtonText:'Iniciar Sesión',
                        })
                        return throwError(err);
                    }
                })
            );
    }


    // MANEJO DE ERRORES

//     manejarError(error: HttpErrorResponse) {
//         if (error.status === 400) {
//             console.log(this.zone);
//             this.zone.run(() => this.router.navigate(['/login']));
//         }
//         console.log(error);
//         return throwError(error);
//         // throw error;

//     }
}
