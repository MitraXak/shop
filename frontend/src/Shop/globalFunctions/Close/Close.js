const Close = function(close, show){
    let login = document.querySelector(`.${close}`);
        login.classList.remove(`${close}`);
        login.classList.add(`${show}`);
}

module.exports = {Close};