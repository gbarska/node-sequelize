'use strict'

const Sequelize = require('sequelize');
const UserModel = require('../models/user');

const sequelize = new Sequelize('mydb', 'gbarska', 'xphack', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
});

const ValidationContract = require('../validators/fluent-validator');

exports.get = () => {
    return   User.findAll();        
}

// exports.getBySlug = (slug) => {
//    return Product
//     .findOne({
//         slug: slug, 
//         active: true
//     },'title description price slug tags');
// }

// exports.getById = (id) => {
//     return Product
//     .findById(id);
// }

// exports.getByTag = (tag) => {
//     return Product
//     .find({
//         tags: tag, 
//         active: true
//     },'title description price slug tags');
// }

exports.create = (data) => {
 return User.create({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    username: data.username,
    password: data.password,
});
}

// exports.update = (id,data) => {
//     Product
//     .findByIdAndUpdate(id,
//         {
//           $set: {
//               title: data.title,
//               description: data.description,
//               price: data.price,
//               slug: data.slug
//           }  
//         });
// }

// exports.delete = (id) => {
//     return Product
//     .findByIdAndRemove(id);
// }