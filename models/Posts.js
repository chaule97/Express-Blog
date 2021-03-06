const sequelize = require('./db');
const Sequelize = require('sequelize');
const slug = require('slug');

//define Post table in MySQL
const PostSchema = sequelize.define('post', {
    id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    slug: {type: Sequelize.STRING},
    title: {type: Sequelize.STRING, allowNull: false},
    body: {type: Sequelize.STRING, allowNull: false, unique: true},
    date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    hooks: {
        //after create user we will create slug value
        afterCreate: (post, options) => {
                title = post.title
                id = post.id
                post.slug = slug(`${title} ${id}`)
                post.save()
        }
    }
});
//create table if it doesn't exist
sequelize.sync({alter: true});
module.exports = PostSchema;