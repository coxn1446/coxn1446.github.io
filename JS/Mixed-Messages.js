/* This is my first "Portfolio Project." It might be a little clunky.
I've only been coding for a few months now.*/

const madLibGenerator = (noun,adjective,verb) => {
    const randomNumGenerator1 = (Math.floor(Math.random()*4));
    const randomNumGenerator2 = (Math.floor(Math.random()*4));
    const randomNumGenerator3 = (Math.floor(Math.random()*4));
    const nounSentence = [`The ${noun} jumped over the fence.`,`The dog jumped over the ${noun}.`,
`Everyone loves ${noun}.`, `I need ${noun} in my life.`];
    const adjectiveSentence = [`I don't like ${adjective} dogs.`, `I like ${adjective} dogs a little too much.`,
`Have you ever seen a cloud look like a ${adjective} whale?`, `I need my ${adjective} back rubbed.`];
    const verbSentence = [`I better ${verb} over to the post office.`,`Don't mind me, I'm going to go for a ${verb}.`,
`Should I ${verb} this or no?`,`I want you to ${verb} me.`];
   if(typeof noun !== "string" || typeof adjective !== "string" || typeof verb !== "string") {
        result = "Please use strings as all three arguments."} else {
            result = (nounSentence[randomNumGenerator1]+" "+adjectiveSentence[randomNumGenerator2]+" "+verbSentence[randomNumGenerator3]);
        };
        return result;
    };
/* Un-commenting the below should return a mad lib for your enjoyment.
Feel free to change up the words to suit your MadLib needs.

console.log(madLibGenerator("dog","hairy","run"))

*/