class custom_err {
    constructor(err_code, err_msg) {
        this.type = "err";
        this.data = {
            code:err_code,
            msg:err_msg
        };
    };
};
class status_request {
    constructor() {
        this.type = "status_request";
    };
};
class data_request {
    constructor(database, key, data_keys) {
        this.type = "data_request";
        this.data = {
            dir:database,
            location:{
                key:key,
                data_keys:data_keys
            }
        };
    };
};
exports.custom_err = custom_err;
exports.data_stream = data_request;
exports.status_stream = status_request;