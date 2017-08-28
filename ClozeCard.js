var BasicCard = require("./BasicCard.js");

var ClozeCard = function (text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;
        this.partial = function () {
            if (this.fullText.includes(this.cloze)) {
                return this.fullText.replace(this.cloze, '......');
            }
            else {
                var error = 'Oops: ' + '"' + this.cloze + '"' + ' does not appear in ' + '"' + this.fullText + '"\n'
                return error;
                
            }

        }

    }
    else {
        return new ClozeCard(text, cloze);
        

    }
}

module.exports = ClozeCard;