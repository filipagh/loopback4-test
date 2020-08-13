import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ShopNote, ShopNoteRelations, Item} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ItemRepository} from './item.repository';

export class ShopNoteRepository extends DefaultCrudRepository<
  ShopNote,
  typeof ShopNote.prototype.id,
  ShopNoteRelations
> {

  public readonly items: HasManyRepositoryFactory<Item, typeof ShopNote.prototype.id>;

  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource, @repository.getter('ItemRepository') protected itemRepositoryGetter: Getter<ItemRepository>,
  ) {
    super(ShopNote, dataSource);
    this.items = this.createHasManyRepositoryFactoryFor('items', itemRepositoryGetter,);
    this.registerInclusionResolver('items', this.items.inclusionResolver);
  }
}
