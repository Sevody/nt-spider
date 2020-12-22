require('dotenv').config({
    path: `.${process.env.NODE_ENV}.env`,
});

let envs = process.env;
let value;

const calculateValue = () => {
    value = {
        db: {
            host: envs.DB_HOST,
            port: envs.DB_PORT,
            username: envs.DB_USERNAME,
            password: envs.DB_PASSWORD,
            database: envs.DB_DATABASE,
        },
        rssHost: envs.RSS_HOST,
        loggerLevel: envs.LOGGER_LEVEL || 'info',
        noLogfiles: envs.NO_LOGFILES,
    };
};
calculateValue();

module.exports = {
    set: (env) => {
        envs = Object.assign(process.env, env);
        calculateValue();
    },
    get value() {
        return value;
    },
};
