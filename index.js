module.exports = function consoletodiv(id) {
    const log = document.querySelector('#' + id);
    ['log','debug','info','warn','error'].forEach(function (verb) {
        console[verb] = (function (method, verb, log) {
            return function () {
                method.apply(console, arguments);
                const msg = document.createElement('div');
                msg.classList.add(verb);
                msg.textContent = verb + ': ' + Array.prototype.slice.call(arguments).join(' ');
                log.appendChild(msg);
            };
        })(console[verb], verb, log);
    });

    console.log = function (message) {
        if (typeof message == 'object') {
            //log.style
            log.innerHTML += '<code style="    background: #f4f4f4;\n' +
                '    border-left: 3px solid grey;\n' +
                '    color: #666;\n' +
                '    page-break-inside: avoid;\n' +
                '    font-family: monospace;\n' +
                '    font-size: 15px;\n' +
                '    line-height: 1.6;\n' +
                '    margin-bottom: 1.6em;\n' +
                '    max-width: 100%;\n' +
                '    overflow: auto;\n' +
                '    display: block;\n' +
                '    word-wrap: break-word;"> Object: ' + (JSON && JSON.stringify ? JSON.stringify(message) : message) + '</code>' + '<br />';
        } else {
            log.innerHTML += message + '<br />';
        }
    }
};
