export default {
  apps: [
    {
      name: 'app1',
      script: '../bin/www.js',
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
// xem pm2 Nodejs de biet them chi tiet
