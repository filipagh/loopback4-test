import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysqlDB',
  connector: 'mysql',
  url: '',
  host: '127.0.0.1',
  port: 3306,
  user: 'lb',
  password: 'lb',
  database: 'lb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysqlDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysqlDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}