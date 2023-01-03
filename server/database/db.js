const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "student_mysql",
      user: "root",
      password: "password",
      database: "studentDB",
      socketPath: '/var/run/mysqld/mysqld.sock'
    }
  };
  module.exports = config;