let ModuleCommonCreator = {};

ModuleCommonCreator.createHandler = function (node, eventName, func, flag) {
    if (window.addEventListener) {
        node.addEventListener(eventName, func, flag);
    } else if (window.attachEvent) {
        node.attachEvent('on' + node, eventName);
    }
};


ModuleCommonCreator.createHandler(window, 'load', func, false);

function func() {
    document.write('Hello world');
}
