import { databaseConfig } from './config/configuration';
import { SequelizeConfigService } from './config/sequelize.config.service';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { TodoModule } from './todo/todo.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TodoModule,
  ],
})
export class AppModule {}
