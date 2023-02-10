import { Injectable } from '@nestjs/common';
import { Todo } from './../todo/model/todo.model';
import { EnumConfif } from './enumConfig/enumConfig';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, port, host, username, password, database },
    } = this.configService.get(EnumConfif.DATABASE);
    return {
      dialect,
      logging,
      port,
      host,
      username,
      password,
      database,
      models: [Todo],
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
