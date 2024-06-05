import { isMutant } from "../helpers/isMutant.js";
import { Dna } from "../models/dna.model.js"

class MutantService {
    async getDnas () {
    try {
        const results = await Dna.findAll({ where: { isMutant: true }})
        return results;
    } catch (error) {
        throw error;
    }
}

async createDna(body) {
    try {
        let message
        const mutant = isMutant(body.dna)
        if (mutant){
            body.isMutant = true;
            message = '200 ok'

        } else {
            body.isMutant = false;
            message = '403 forbbiden'
        }
        console.log(body)
        const result = await Dna.create(body)
        return {result, message};
    } catch (error) {
        throw error;
    }
}

async getStats() {
    try {
        
    } catch (error) {
        throw error;
    }
}
}

export default new  MutantService();
