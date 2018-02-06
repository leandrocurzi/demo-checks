let string = require("string")

class Check{
     /**
     * Generic handler for all GET requests in this service
     * @param {*} query = {
     *      type: String,
     *      param: Object
     * } 
     */
    static get(query){
        let result = {status: false, resp: null};
        
        switch(query.type){
            case "GET_BY_ID": 
                result.resp = this.getById(query.param);
                result.status = true;
            break;

            case "GET_BY_ACCOUNT_NUMBER":
                result.resp = this.getByAccountNumber(query.param);
                result.status = true;
            break;
        }

        return result;
    }

    static getById(id){
        return {check_id: "12897", account_number: string('0123456789').right(5).s};
    }

    static getByAccountNumber(accountNumber){
        return {check_id: "547897", account_number: string('0123456789').left(5).s};
    }
}

module.exports = Check;