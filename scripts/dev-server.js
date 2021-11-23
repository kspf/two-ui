const { execSync } = require('child_process')
const inquirer = require('inquirer')
const lerna = require('lerna')
const path = require('path')
const fs = require('fs')

const Map = []
const packageNames = () => {
  let output
  try {
    output = execSync('npx lerna list --json')
  } catch (error) {
    console.info('无packages')
    process.exit(0)
  }
  const packages = JSON.parse(output.toString())
  return packages.map(project => {
    Map.push(project)
    return project.name
  })
}
inquirer
  .prompt([
    {
      type: 'list',
      message: '请选择要启动开发模式的项目:',
      name: 'name',
      choices: packageNames()
    }
  ])
  .then(package => {
    lerna(`run serve --scope ${package.name}`)
  })
