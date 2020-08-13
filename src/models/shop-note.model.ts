import {Entity, model, property, hasMany} from '@loopback/repository';
import {Item} from './item.model';

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

  @hasMany(() => Item)
  items: Item[];

  constructor(data?: Partial<ShopNote>) {
    super(data);
  }
}

export interface ShopNoteRelations {
  // describe navigational properties here
}

export type ShopNoteWithRelations = ShopNote & ShopNoteRelations;
