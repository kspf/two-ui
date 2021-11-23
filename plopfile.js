module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    actions: [
      // jest 文件
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.test.ts',
        templateFile: 'plop-template/component/__tests__/test.hbs'
      },
      // 组件文件
      {
        type: 'add',
        path: 'packages/{{name}}/src/components/{{name}}.ts',
        templateFile: 'plop-template/component/src/components/component.hbs'
      },
      // demo 文件
      {
        type: 'add',
        path: 'packages/{{name}}/src/demo/index.vue',
        templateFile: 'plop-template/component/src/demo/index.hbs'
      },
      // 样式文件
      {
        type: 'add',
        path: 'packages/{{name}}/src/style/index.scss',
        templateFile: 'plop-template/component/src/style/index.hbs'
      },
      // 入口文件
      {
        type: 'add',
        path: 'packages/{{name}}/src/index.ts',
        templateFile: 'plop-template/component/src/index.hbs'
      },
      // babel配置文件
      {
        type: 'add',
        path: 'packages/{{name}}/babel.config.json',
        templateFile: 'plop-template/component/babel.config.json'
      },
      // 静态目录文件
      {
        type: 'add',
        path: 'packages/{{name}}/index.html',
        templateFile: 'plop-template/component/index.hbs'
      },
      // 开源协议文件
      {
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'plop-template/component/LICENSE'
      },
      // package.json 
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-template/component/package.hbs'
      },
      // 介绍文档
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-template/component/README.hbs'
      },
      // ts 配置文件
      {
        type: 'add',
        path: 'packages/{{name}}/tsconfig.json',
        templateFile: 'plop-template/component/tsconfig.json'
      }
    ]
  })
}
