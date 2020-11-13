src
  │   app.js          # App 入口
  └───api             # Express route controllers for all the endpoints of the app
  └───config          # 环境变量和配置相关
  └───jobs            # 对于 agenda.js 的任务调度定义
  └───loaders         # 将启动过程拆分为模块
  └───models          # 数据库模型
  └───services        # 所有的业务逻辑应该在这里
  └───subscribers     # 异步任务的事件处理程序
  └───types           # 对于 Typescript 的类型声明文件（d.ts）

  REF: https://softwareontheroad.com/ideal-nodejs-project-structure/