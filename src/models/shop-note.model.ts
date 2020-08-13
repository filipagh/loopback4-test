import {Entity, model, property} from '@loopback/repository';

@model()
export class ShopNote extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<ShopNote>) {
    super(data);
  }
}

export interface ShopNoteRelations {
  // describe navigational properties here
}

export type ShopNoteWithRelations = ShopNote & ShopNoteRelations;
