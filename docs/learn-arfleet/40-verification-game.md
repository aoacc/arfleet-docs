# Verification Game

In [Replica Encryption](/docs/learn-arfleet/replica-encryption), we described how RSA is used to make Sybil attacks pretending to store several copies of a replica economically infeasible.

This section describes game theoretical properties of the verification challenge process for one replica.

One of the concerns with such a simple verification mechanism might be:

<blockquote>
  <i>If I store 20 TB with a provider, and all they need to do is every 1-2 hours send a challenge involving a small 4 KB chunk, won't we know for a long time if they removed a lot of my data?</i>
<blockquote>
</blockquote>
  <i>How can I know this from such small challenge sizes?</i>
</blockquote>

## Why it works

Consider the following hypothetical scenario.

Put yourself in the shoes of the provider that is storing 20 TB of data and tries to cheat by removing, let's say, half of it, to free up space.

How would you guess which half to remove?

The chances of you guessing correctly are 50%. You are 50% likely to not be caught immediately on the 1st challenge, 25% likely that you get lucky two challenges in a row, 12.5% likely to not be caught within the first three challenges, and so on. The chances of you getting caught are increasing exponentially, because the small chunk randomly selected for verification would eventually very quickly end up inside the large half that you deleted.

What if you want to remove 1/4 instead of a half? Here's how the probabilities would look over multiple challenges:

| Number of Challenges | Probability of Not Getting Caught | Probability of Getting Caught |
|----------------------|-----------------------------------|-------------------------------|
| 1                    | 75%                               | 25%                           |
| 2                    | 56.25%                            | 43.75%                        |
| 3                    | 42.1875%                          | 57.8125%                      |
| 4                    | 31.640625%                        | 68.359375%                    |
| ...                  | ...                               | ...                           |
| 20                   | 0.317124%                         | 99.682876%                    |

The general formula for the probability of not getting caught after n challenges, when a fraction f of data has been removed, is:

$$ P(\text{not caught}) = (1-f)^n $$

For our example where 1/4 of the data was removed (f = 0.25):

$$ P(\text{not caught}) = (1-0.25)^n = 0.75^n $$

## Conclusion

Since the challenge chunks are random each time, the probability of getting caught increases rapidly with each additional challenge. This verification game ensures that providers have a strong incentive to maintain all of the data they've agreed to store. Even removing a small fraction of the data becomes extremely risky over multiple challenges, as the chances of being caught approach certainty, and the punishment is the provider's collateral being slashed.

This system effectively deters providers from attempting to cheat by removing portions of the stored data, as the economic consequences of being caught would likely outweigh any potential gains from freeing up storage space.
