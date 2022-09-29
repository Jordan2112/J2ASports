import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Usuario extends Model {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  CorreoElectronico: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  Contrasena: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
