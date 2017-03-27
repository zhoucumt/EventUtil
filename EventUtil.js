class EventUtil {
    readyEvent(fn) {
        if (!fn) {
           fn = document;
        }
        let oldonload = window.onload;
        if (typeof window.onload !== 'function') {
            window.onload = fn;
        }
        else {
            window.onload = function () {
                oldonload();
                fn();
            };
        }
    }

    addEvent(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + type, function () {
                handler.call(element);
            });
        }
        else {
            element['on' + type] = handler;
        }
    }
}