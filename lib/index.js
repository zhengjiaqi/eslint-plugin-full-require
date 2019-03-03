 /**
 * @license
 *  MIT
 *
 * @file eslint check for full require.
 * @author zhengjiaqi
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const fullRequireRule = require('./rules/full-require')
const NotAllowRule = require('./rules/not-allow')

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

module.exports = {
  rules: {
    'full-require': fullRequireRule,
    'not-allow': NotAllowRule
  }
}
