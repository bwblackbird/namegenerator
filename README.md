# Customizeable Fictional Name Generator
I made this program for myself, a fiction writer, to be able to generate names from my invented languages for my fantasy and sci-fi novels. This program takes a CSV file with fictional words or syllables, the order those words or syllables are typically found in a name for a given fictional language, and what they mean. It then displays 10 randomly generated names with their respective meanings. 

Use here:

https://bwblackbird.github.io/namegenerator/

## How to Use
**1. Create a CSV file (https://www.wikihow.com/Create-a-CSV-File) *with a header* having 3 columns in this order: "Word", "Order", "Meaning".**

*The "Word" column is for the fictional 'word' or syllable.*

*The "Order" column is for the order that word goes in. **IMPORTANT:** there are 3 acceptable inputs: "front", "end", and "either". Anything else will not work. "front" is for words that exclusively belong at the beginning of a name, "end" is for words that exclusively belong at the end of a name, and "either" is for words that can be placed at the beginning, end, or MIDDLE of a name in the case of names that have more than 3 words in them.*

*The "Meaning" column is for the meaning of the word.*

**2. Add as many rows as you want.**

*I personally recommend at least 10 rows (not including the header) if you want to generate names with 2 words per name. A good rule of thumb is to make sure you have at least 5 words that can go in the beginning of a name (so their order would be "front" or "either") and at least 5 that can go at the end of a name (order would be "end" or "either"). For 3 or more words per name, aim for at least 15 rows with the same amount for front and end but with at least 5 additional words with the order "either". Likewise, for names with more words per name (max this generator allows is 8), the more rows of words you have, the less likely it is you will be getting names with repeated words.*

* e.g. for word "ay" that means "moon" and can go at the beginning, end, or middle of a name, and "shen" meaning 'scribe' that ONLY goes at the end of the name, your CSV file would look like this:
<blockquote>
  Word,Order,Meaning <br>
  ay,either,moon <br>
  shen,end,scribe
</blockquote>

**3. Upload your CSV file to the site.**
   
**4. Select how many words you want in each name.**

*The accepted range for this generator is 2-8.*

**5. Hit the generate button and enjoy your generated names!**

## Future Plans

In the future I would love to add features for customizability.

The only concrete idea I have at the moment is to add the ability for the user to select one or more meanings they'd like a name to have, and generate names where at least 1 word in every name has one of those meaning.
