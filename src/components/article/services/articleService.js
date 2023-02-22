let { Article } = require("../../../models");

class articles {
    async getArticlesByCompany(companyId){
        try {
            return await Article.findAll({ where: { company_id: companyId}});
        } catch (error) {
            console.log(error);
        }
    }

    async createArticle(obj){
        try {
            return await Article.create(obj);
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, obj){
        try {
            return await Article.update({ ...obj }, { where: { id: id } });
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id){
        try {
            return await Article.destroy({ where: { id: id }, force: true });
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = new articles();