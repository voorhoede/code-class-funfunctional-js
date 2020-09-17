What this code class is about
    What functional programming is
    How it applies to JS
    Look at functional JS libraries
Introduction (What?)
    Functional programming is a way & style of writing code
    Write logic using re-usable bits of code
    Programming with functions
Why?
    Improve re-usability, by abstracting: broader abstractions that are not domain specific
    Improve readability, by leaving out: pointfree
    Ease refactoring, by centralizing side effects
    Ease testing, with pure functions
How?
    FP does not depend on specific language features, but some make it easier
    Use mathematical terms, don't need to remember them but might stumble upon them
    The FP tools
        Functions as values
            Major one is ability to use functions as values, which is possible in JS
            Higher order functions
                Functions that return functions
            Partial application
                presetting some arguments
            Currying
                converting a function that takes multiple arguments into a sequence of functions
            Composition
                Combine multiple functions into one functions
                Compose & pipe
        What makes a function pure?
            What is a function? Relationship between a set of inputs and outputs
            Given the same arguments, it will return the same value
            Pure functions are cacheable
            No side effects, doesn't affect anything outside
            Side effects are not bad, they are needed, but hard to test
        Immutability
            less for your brain to track
            prevents unintentional side effects
            preserves state
        Category theory
            A broad concept, there are categories with rules
            We contain something in a 'type' that we expect to behave a certain way
            For example in JS we have arrays that have a map method to transform it's content
Exercises
    Exercise 1
        Beginning of
            https://composed.adamgiese.com/
    Exercise 2
        Create lambda wrapper for 'api scripts'
    Exercise 3
        Maybe monad
Conclusion
    The scale of FP 0% <> 100%
    1-liners (lodash) - Ramda - Sanctuary - Folktale
        Dealing with arrays
            Array.map, Array.filter, Array.reduce
            Array.flat, Array.some, Array.every, Array.slice, Array.concat
        The extremes
            0: quick and dirty, good for one-off scripts
            100: not useful, not output/effect/side-effect
        Where to be on this scale depends on the project and the people you work with
        Frontend tends to be more left because you don't want libraries
    JS is adding more FP style support
        https://github.com/tc39/proposal-pipeline-operator
        https://github.com/tc39/proposal-partial-application
