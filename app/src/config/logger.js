const { createLogger, transports, format} = require("winston");
const { combine, timestamp, printf, json, simple, colorize } = format;

const printLogFormat = combine(
    colorize(),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd"
    }),
    // simple()
    printf(({timestamp}) => {
        return `${timestamp} 화이팅`
    })
);

const logger = createLogger({
transports: [new transports.Console({
        level: "info",
        format: printLogFormat,
    })],
});

module.exports = logger;