import path from 'path'
// 将CommonJS模块转换为ES6
import commonjs from 'rollup-plugin-commonjs'
// 在node_模块中查找并绑定第三方依赖项
import resolve from '@rollup/plugin-node-resolve'
// 将json 文件转换为ES6 模块
import json from '@rollup/plugin-json'
// rollup babel插件
import { babel } from '@rollup/plugin-babel'
// 加别名
// import alias from '@rollup/plugin-alias';
// 吃力css文件
import postCss from 'rollup-plugin-postcss'

// 获取入口文件
const input = process.env.INPUT_FILE

// 当前执行命令的路径
const root = process.cwd()
// 获取每个包的package.json 文件
const pkg = require(path.resolve(root, 'package.json'))

// 需要打包的文件的后缀
const extensions = ['.ts', '.tsx', '.scss']

// 排除的文件
const external = ['vue', 'vue-router', /@two-ui/]

// 出口文件
const output = [
  {
    file: path.join(root, pkg.module),
    format: 'es'
  }
]

// 打包配置对象
const Config = {
  input,
  output,
  external,
  plugins: [
    resolve({
      preferBuiltins: false,
      mainFields: ['module', 'main'],
      extensions
    }),
    postCss({
      // 是否提取到.css文件中
      extract: true,
      // 处理的扩展名
      extensions: [
        '.css',
        '.scss'
      ],
      onImport () {
        console.log(arguments)
      }
      // 最小化css 就是压缩css
      // minimize: !!isPro()
    }),
    babel({
      babelHelpers: 'bundled',
      extensions,
      exclude: [
        '*.config.js',
        'packages/**/node_modules/*.d.ts',
        'node_modules/*.d.ts',
        '**/dist/**/*',
        '**/demo/*',
        '**/__tests__/**/*'
      ]
    }),
    commonjs(),
    json()
  ]
}

export default Config
