
 /**
 * @license
 *  MIT
 *
 * @file full require rule.
 * @author zhengjiaqi
 */
var handleRequire = require('../util').handleRequire;

module.exports = {
    meta: {
        docs: {
            description: 'eslint check for full require',
            category: 'Stylistic Issues',
            recommended: false,
            url: ''
        }
    },
    create: function(context) {
        return {
            CallExpression: function(node) {
                context.options.some(handleRequire(context, node, 'Avoid using full require for "{{ module }}".'))                
            }
        };
    }
};