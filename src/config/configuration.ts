import { pgConfig } from './postgres.config';
import { EnumConfif } from './enumConfig/enumConfig';
import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs(EnumConfif.DATABASE, () => {
  return {
    pg: { ...pgConfig() },
  };
});
