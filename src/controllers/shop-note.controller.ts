import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ShopNote} from '../models';
import {ShopNoteRepository} from '../repositories';

export class ShopNoteController {
  constructor(
    @repository(ShopNoteRepository)
    public shopNoteRepository : ShopNoteRepository,
  ) {}

  @post('/shopNote', {
    responses: {
      '200': {
        description: 'ShopNote model instance',
        content: {'application/json': {schema: getModelSchemaRef(ShopNote)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShopNote, {
            title: 'NewShopNote',
            exclude: ['id'],
          }),
        },
      },
    })
    shopNote: Omit<ShopNote, 'id'>,
  ): Promise<ShopNote> {
    return this.shopNoteRepository.create(shopNote);
  }

  @get('/shopNote/count', {
    responses: {
      '200': {
        description: 'ShopNote model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ShopNote) where?: Where<ShopNote>,
  ): Promise<Count> {
    return this.shopNoteRepository.count(where);
  }

  @get('/shopNote', {
    responses: {
      '200': {
        description: 'Array of ShopNote model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ShopNote, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ShopNote) filter?: Filter<ShopNote>,
  ): Promise<ShopNote[]> {
    return this.shopNoteRepository.find(filter);
  }

  @patch('/shopNote', {
    responses: {
      '200': {
        description: 'ShopNote PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShopNote, {partial: true}),
        },
      },
    })
    shopNote: ShopNote,
    @param.where(ShopNote) where?: Where<ShopNote>,
  ): Promise<Count> {
    return this.shopNoteRepository.updateAll(shopNote, where);
  }

  @get('/shopNote/{id}', {
    responses: {
      '200': {
        description: 'ShopNote model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ShopNote, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ShopNote, {exclude: 'where'}) filter?: FilterExcludingWhere<ShopNote>
  ): Promise<ShopNote> {
    return this.shopNoteRepository.findById(id, filter);
  }

  @patch('/shopNote/{id}', {
    responses: {
      '204': {
        description: 'ShopNote PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShopNote, {partial: true}),
        },
      },
    })
    shopNote: ShopNote,
  ): Promise<void> {
    await this.shopNoteRepository.updateById(id, shopNote);
  }

  @put('/shopNote/{id}', {
    responses: {
      '204': {
        description: 'ShopNote PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() shopNote: ShopNote,
  ): Promise<void> {
    await this.shopNoteRepository.replaceById(id, shopNote);
  }

  @del('/shopNote/{id}', {
    responses: {
      '204': {
        description: 'ShopNote DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.shopNoteRepository.deleteById(id);
  }
}
