import { EnumConfif } from './enumConfig/enumConfig';
import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const pgConfig = registerAs(EnumConfif.DATABASE, () => {
  return {
    dialect: <Dialect>process.env.SQL_DIALECT || 'postgres',
    logging: process.env.SQL_LOGGING === 'true' ? true : false,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
    synchronize: true,
  };
});
