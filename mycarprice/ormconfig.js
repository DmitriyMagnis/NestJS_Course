var dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      synchronize: true,
      entities: ['**/*.entity.ts'],
    });
  case 'production':
    break;
  default:
    throw new Error('Unknown NODE_ENV: ' + process.env.NODE_ENV);
}

module.exports = dbConfig;
