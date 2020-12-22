const cron = require('cron');
const genshinn = require('./jobs/genshinn');
const logger = require('./utils/logger');

const { CronJob } = cron;

/*
* * * * * *
| | | | | |
| | | | | day of week
| | | | month
| | | day of month
| | hour
| minute
second ( optional )
*/

const job = new CronJob(
  '1 * * * * *',
  (() => {
    logger.info('You will see this message every minute');
    genshinn.run();
  }),
);

// genshinn.run();

job.start();
