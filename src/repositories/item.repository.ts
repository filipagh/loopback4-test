import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Item, ItemRelations, ShopNote} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ShopNoteRepository} from './shop-note.repository';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id,
  ItemRelations
> {

  public readonly shopNote: BelongsToAccessor<ShopNote, typeof Item.prototype.id>;

  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource, @repository.getter('ShopNoteRepository') protected shopNoteRepositoryGetter: Getter<ShopNoteRepository>,
  ) {
    super(Item, dataSource);
    this.shopNote = this.createBelongsToAccessorFor('shopNote', shopNoteRepositoryGetter,);
    this.registerInclusionResolver('shopNote', this.shopNote.inclusionResolver);
  }
}
