const sequelize        = require('../config/db')
const createPrimoModel  = require('../models/primoModel');
const Primo             = createPrimoModel(sequelize,sequelize.Sequelize.DataTypes);


const primoController = {
    async create(req, res) {
        try {
            const primo  = await Primo.create(req.body);
            
            return res.status(201).json(primo);
        } catch (error) {
            console.error(req);
            return res.status(400).json(
                { error: 'Failed to create the number', details: error.message });
        }
    },

    async listAll(req, res) {
        try {
            const primos = await Primo.findAll();
            return  res.status(200).json(primos);
        } catch (error) {
            console.error(error);
            return res.status(500).json(
                { message: 'Error retrieving numbers', error });
        }
    },

    async findById(req, res) {
        try {
            const primo = await Primo.findByPk(req.params.id);
            if (primo) {
                return res.status(200).json(primo);
            } else {
                return res.status(404).json(
                    { message: 'number not found' });
            }
        } catch (error) {
            return res.status(500).json(
                { message: 'Error retrieving number', error });
        }
    },

    
    async update(req, res) {
        try {
            const updatedPrimo = await Primo.update(req.body, {
                where: { id: req.params.id },
            });
            if (updatedPrimo[0]) {
                return res.status(200).json(
                    { message: 'Number updated successfully' });
            } else {
                return res.status(404).json(
                    { message: 'Number not found' });
            }
        } catch (error) {
            return res.status(500).json(
                 { message: 'Error updating number', error });
        }
    },

   async delete(req, res) {
        try {
            const deletedPrimo = await Primo.destroy({ where: { id: req.params.id } });
            if (deletedPrimo) {
                res.status(204).json({ message: 'Number deleted successfully' });
            } else {
                res.status(404).json({ message: 'Number not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting number', error });
        }
    }

};

module.exports = primoController;