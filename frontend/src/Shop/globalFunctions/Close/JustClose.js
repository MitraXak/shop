const JustClose = function(close)
{
    let login = document.querySelector(`.${close}`);
        login.classList.remove(`${close}`);
}
module.exports = {JustClose};