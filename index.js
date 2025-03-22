const surge = require('surge')
const core = require('@actions/core')
const os = require('os')
// import * as exec from '@actions/exec'

async function run() {
  try {
    // 域名参数
    const domain = core.getInput('domain')
    // 构建产物路径
    const project = core.getInput('root')

    if (!domain || !project) {
      throw new Error('缺少参数!')
    }

    if (!process.env.SURGE_TOKEN) {
      throw new Error('环境变量 SURGE_TOKEN 没有设置!')
    }
    // 环境变量直接在 env.SURGE_TOKEN 里设置等同于 process.env.SURGE_TOKEN
    // 此处不再额外执行
    // process.env.SURGE_TOKEN = core.getInput('token')
    core.exportVariable('SURGE_TOKEN', process.env.SURGE_TOKEN)

    surge({ default: 'publish' })([project, domain])

    core.info(`Deployment done!${os.EOL}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
