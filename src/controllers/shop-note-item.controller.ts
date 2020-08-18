import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  ShopNote,
  Item,
} from '../models';
import {ShopNoteRepository} from '../repositories';

export class ShopNoteItemController {
  constructor(
    @repository(ShopNoteRepository) protected shopNoteRepository: ShopNoteRepository,
  ) { }

  @get('/shop-notes/{id}/items', {
    responses: {
      '200': {
        description: 'Array of ShopNote has many Item',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Item)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Item>,
  ): Promise<Item[]> {
    return this.shopNoteRepository.items(id).find(filter);
  }

  @post('/shop-notes/{id}/items', {
    responses: {
      '200': {
        description: 'ShopNote model instance',
        content: {'application/json': {schema: getModelSchemaRef(Item)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ShopNote.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Item, {
            title: 'NewItemInShopNote',
            exclude: ['id', "shopNoteId"],
          }),
        },
      },
    }) item: Omit<Item, 'id'>,
  ): Promise<Item> {
    return this.shopNoteRepository.items(id).create(item);
  }

  // @patch('/shop-notes/{id}/items', {
  //   responses: {
  //     '200': {
  //       description: 'ShopNote.Item PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async patch(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Item, {partial: true}),
  //       },
  //     },
  //   })
  //   item: Partial<Item>,
  //   @param.query.object('where', getWhereSchemaFor(Item)) where?: Where<Item>,
  // ): Promise<Count> {
  //   return this.shopNoteRepository.items(id).patch(item, where);
  // }

  @del('/shop-notes/{id}/items', {
    responses: {
      '200': {
        description: 'ShopNote.Item DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Item)) where?: Where<Item>,
  ): Promise<Count> {
    return this.shopNoteRepository.items(id).delete(where);
  }
}
