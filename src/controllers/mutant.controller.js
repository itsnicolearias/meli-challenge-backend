import MutantService from "../services/mutants.service.js";

class MutantController{

    async getDna(req, res){
        try {
            const result = await MutantService.getDnas()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
        
    }
    async createDna(req, res, next){
        try {
            const result = await MutantService.createDna(req.body)
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }

    }
    async getStats(req, res, next){
        try {
            const result = await MutantService.getStats()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }

    }
}

export default MutantController;