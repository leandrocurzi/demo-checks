let string = require("string")

class Check{
    static getCheck(id){
        if(!id || id.trim().length == 0) return null;

        return {
            check_id: "12897",
            account_number: string('0123456789').right(5).s
        }
    }
}

module.exports = Check;