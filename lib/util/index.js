 /**
 * @license
 *  MIT
 *
 * @file util.
 * @author zhengjiaqi
 */

exports.handleRequire = function handleRequire (context, node, message) {
    var minimatch = require("minimatch")
    return function (requireName) {
        // 过滤文件
        if (
            node.callee.name === 'require' &&
            node.arguments &&
            node.arguments[0] &&
            minimatch(node.arguments[0].value || '', requireName)
        ) {
            // 抛出报错信息
            context.report({
                node, 
                message,
                data: {
                    module: node.arguments[0].value
                }
            });
            return true;
        }        
        return false
    }
}