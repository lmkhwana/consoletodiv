module.exports = function consoletodiv(id) {
    ['log','warn','error'].forEach(function (verb) {
        let log = document.querySelector('#' + id);
        console[verb] = (function (method, verb, log) {
            return function (text) {
                method(text);
                let msg = document.createElement('code');
                msg.classList.add(verb);
                msg.textContent = verb + ': ' + text + '\n';
                log.appendChild(msg);
            };
        })(console[verb].bind(console), verb, log);
    });
};
