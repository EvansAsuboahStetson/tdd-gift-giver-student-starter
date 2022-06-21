const {BadRequestError,NotFoundError,ExpressError} = require("../utils/error")

class GiftExchange {
  constructor() {}

  static pairs(names) {
    if (names.length % 2 != 0) {
      throw new BadRequestError("names can't be odd.")
    }

    var bigarray = [];
    var array = [];

    while (bigarray.length < names.length / 2) {
      var first = names[Math.floor(Math.random() * names.length)];
      var second = names[Math.floor(Math.random() * names.length)];
      while (
        array.includes(first) ||
        array.includes(second) ||
        first == second
      ) {
        first = names[Math.floor(Math.random() * names.length)];
        second = names[Math.floor(Math.random() * names.length)];
      }
      array.push(first);
      array.push(second);
      bigarray.push([first, second]);
    }

    return bigarray;
    }
    
    static traditional(names)
    {
        var bigArray = []
        var pronoun_book=[]
        var first_pronoun = names[Math.floor(Math.random() * names.length)];
        var first_value = first_pronoun
        
        
        while (bigArray.length < names.length-1)
        {
            var second_pronoun = names[Math.floor(Math.random() * names.length)];

            while (second_pronoun === first_pronoun || pronoun_book.includes(second_pronoun))
            {
                second_pronoun = names[Math.floor(Math.random() * names.length)];
            }
            pronoun_book.push(first_pronoun)

            

            bigArray.push(`${first_pronoun} is giving a gift to ${second_pronoun}`)

            first_pronoun = second_pronoun
        }
        bigArray.push(`${first_pronoun} is giving a gift to ${first_value}`)

        return bigArray
    }
}

module.exports = GiftExchange;
