function consoletodiv(id) {
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
}
