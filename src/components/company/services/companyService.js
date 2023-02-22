let { Company } = require("../../../models");

class Companies {
    async getAll(){
        try {
            return await User.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(obj){
        try {
            delete obj.companies;
            return await Company.create(obj);
        } catch (error) {
            throw new Error(error);
        }
    }

    async getOne(id){
        try {
            return await Company.findByPk(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, obj){
        try {
            return await Company.update({ ...obj }, { where: { id: id } });
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id){
        try {
            return await Company.destroy({ where: { id: id }, force: true });
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = new Companies();