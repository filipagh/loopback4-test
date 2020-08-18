import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Item,
  ShopNote,
} from '../models';
import {ItemRepository} from '../repositories';

export class ItemShopNoteController {
  constructor(
    @repository(ItemRepository)
    public itemRepository: ItemRepository,
  ) { }

  // @get('/items/{id}/shop-note', {
  //   responses: {
  //     '200': {
  //       description: 'ShopNote belonging to Item',
  //       content: {
  //         'application/json': {
  //           schema: {type: 'array', items: getModelSchemaRef(ShopNote)},
  //         },
  //       },
  //     },
  //   },
  // })
  // async getShopNote(
  //   @param.path.number('id') id: typeof Item.prototype.id,
  // ): Promise<ShopNote> {
  //   return this.itemRepository.shopNote(id);
  // }
}
