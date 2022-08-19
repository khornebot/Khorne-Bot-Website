/*
 * Copyright (C) Khorne Bot - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Khorne <radioactiveaj06@gmail.com>, August 2022
 */
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