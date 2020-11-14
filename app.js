const cron = require('cron');
const genshinn = require('./jobs/genshinn');

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
    console.log('You will see this message every minute');
    genshinn();
  }),
);

job.start();
