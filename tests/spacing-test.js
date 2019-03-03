const fullRequireRule = require('../lib/rules/full-require');
const notAllowRule = require('../lib/rules/not-allow');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester()
ruleTester.run('comment', fullRequireRule, {
  valid: [
    "require('lodash/isEmpty')",
    {
        code: "require('lodash/isObject')",
        options: ['lodash']
    },
    {
        code: "require('lodash/fp/isObject')",
        options: ['lodash/*']
    }
  ],
  invalid: [
    {
      code: "require('lodash')",
      options: ['lodash'],
      errors: [{
        message: 'Avoid using full require for "lodash".',
        type: 'CallExpression'
      }]
    },
    {
        code: "require('lodash/isFunction')",
        options: ['lodash/*'],
        errors: [{
          message: 'Avoid using full require for "lodash/isFunction".',
          type: 'CallExpression'
        }]
    },
    {
        code: "require('lodash/fp/isFunction')",
        options: ['lodash/fp/*'],
        errors: [{
          message: 'Avoid using full require for "lodash/fp/isFunction".',
          type: 'CallExpression'
        }]
    },
    {
        code: "require('lodash/fp/isFunction')",
        options: ['lodash/**'],
        errors: [{
          message: 'Avoid using full require for "lodash/fp/isFunction".',
          type: 'CallExpression'
        }]
    },
    {
        code: "require('@baidu/san-dux')",
        options: ['@baidu/san-dux'],
        errors: [{
          message: 'Avoid using full require for "@baidu/san-dux".',
          type: 'CallExpression'
        }]
      }
  ]
})

ruleTester.run('comment', notAllowRule, {
    valid: [
      "require('lodash/isEmpty')",
      {
          code: "require('lodash/isObject')",
          options: ['lodash']
      },
      {
          code: "require('lodash/fp/isObject')",
          options: ['lodash/*']
      }
    ],
    invalid: [
      {
        code: "require('lodash').isObject",
        options: ['lodash'],
        errors: [{
          message: 'Avoid require: "lodash".',
          type: 'CallExpression'
        }]
      },
      {
          code: "require('lodash/isFunction')",
          options: ['lodash/*'],
          errors: [{
            message: 'Avoid require: "lodash/isFunction".',
            type: 'CallExpression'
          }]
      },
      {
          code: "require('lodash/fp/isFunction')",
          options: ['lodash/fp/*'],
          errors: [{
            message: 'Avoid require: "lodash/fp/isFunction".',
            type: 'CallExpression'
          }]
      },
      {
          code: "require('lodash/fp/isFunction')",
          options: ['lodash/**'],
          errors: [{
            message: 'Avoid require: "lodash/fp/isFunction".',
            type: 'CallExpression'
          }]
      },
      {
          code: "require('@baidu/san-dux')",
          options: ['@baidu/san-dux'],
          errors: [{
            message: 'Avoid require: "@baidu/san-dux".',
            type: 'CallExpression'
          }]
        }
    ]
  })
