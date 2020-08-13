import {Entity, model, property, belongsTo} from '@loopback/repository';
import {ShopNote} from './shop-note.model';

@model()
export class Item extends Entity {
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

  @property({
    type: 'boolean',
    default: false,
  })
  isSolved?: boolean;

  @property({
    type: 'number',
    default: 1,
  })
  count: number;

  @belongsTo(() => ShopNote)
  shopNoteId: number;

  constructor(data?: Partial<Item>) {
    super(data);
  }
}

export interface ItemRelations {
  // describe navigational properties here
}

export type ItemWithRelations = Item & ItemRelations;
