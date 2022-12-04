module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      contactNumber: {
        type: Sequelize.INTEGER,
      },
      batch: {
        type: Sequelize.STRING,
      },
      targetYear: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      optionalSubject: {
        type: Sequelize.STRING,
      }
      
    }, {});
    return Student;
};