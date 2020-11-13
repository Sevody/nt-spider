import cron from 'cron';
import baiduTask from './jobs/baidu.js';
import _5chTask from './jobs/5ch.js';

const { CronJob } = cron;
const { crawlBaiduTitle } = baiduTask;
const { crawl5channel } = _5chTask;

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
  '* * * * * *',
  (() => {
    console.log('You will see this message every second');
    crawlBaiduTitle();
  }),
);

// job.start();
crawl5channel();
