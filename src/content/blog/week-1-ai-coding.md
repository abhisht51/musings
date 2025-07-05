---
title: "A week with AI coding"
description: "What's it been like using Claude for a week and what does it hold for the future of software engineering!"
publishDate: 2025-07-05T00:00:00Z
updatedDate: 2025-07-05T00:00:00Z
tags: ["AI", "Claude", "Software Engineering"]
draft: false
heroImage: "/images/astro-blog-hero.jpg"
---

# Preface

For a long time, I have had my reservations about using AI tools in my workflows. My personal argument was, "These tools are not reliable and will make me lazier in the long run." 

I feel all that has changed for me in the last two weeks. My friend and I were collaborating on a personal project (we'll share more about it soon) and what my software engineering brain assumed would take around 2-3 weeks to build was built by him in just one afternoon while juggling his day job. It was all "vibe-coded" but I was quite astonished by the final results. 

It all seemed too good to be true so I then ran the codebase personally on my local machine and witnessed the output of the project myself. Prior to this, vibe-coding seemed like a fad to me (I realize I'm getting older and struggling to keep up with technology!). Cursor and Lovable always made me feel like I'll just waste my time and not learn anything but post this event, I decided to give it a shot. As a pilot, I decided I'd pay for Claude Pro for a month and see where it goes.
 
I feel we have all used the free version of ChatGPT, Claude, & Gemini. It's natural to question what could be the value proposition of the Pro version? I told myself that perhaps I might not be using these interfaces to their full potential because of rate-limiting. How would things change if I totally started depending on one of these LLM interfaces for all my search queries. So I paid for it, told myself to increase my usage, and hoped I'd get _some_ value out of it. 

The rest is history. Claude has been the most reliable tool for my workflows. It's slowly becoming my last resort hope when after a full day of work, I'm exhausted but still have to code more. And I feel it's already changing how I fundamentally viewed AI (and vibe-coding) in the past. 

Maybe this doesn't feel very surprising to you, but I have mostly tried to stay away from over-using LLMs for more than basic search queries. 


## Claude

Anthropic's big bet on focusing on Coding Task is truly paying off. I first started using it for general purpose queries and soon was asking it to explain to me Ruby code and refactor it's functionality. Claude 4 Sonnet is quite good at it (We all know that!) 

I asked it to reformat a LaTeX file, refactor its text, and add more information to it (iykyk). What seemed like a 2-3 hour activity which I was procrastinating on was handled by it in just 10-15 minutes of prompting. I was already feeling more productive. More productivity always gives me a kind of high which is hard to describe through text.


## Claude Code
Then came Claude Code into the picture. Disappointed and unwilling to pay for another tool like Cursor so quickly for _vibe-coding_, I decided to use the already included CLI tool by Claude called **Claude Code**. The first thing I did was run it on my personal project. Asked it to explain what the project was doing and to run it on my local machine as the initial prompt. It was able to do it pretty well. 

Then I asked it to build a whole UI around it, have a loading screen, input box and integrate "real-time" notification for the project through UI. This was my exact prompt for it. Claude code is a thinking model with "chain of thought". It understood my requirements from this simple prompt, broke down the task into multiple sub-task. Added a few of its own tasks like "running the project and testing the new code". While it was doing it's thing, I was just staring at the terminal screen and pondering on the following questions:
- "Is this the future of coding really?"
- "What would coding be like in 3-5 years from now?"
- "Coding is truly being democratized right now!"
- "We all can do so much more just by having a good idea because the code part (an infamous friction) of the MVP can be delegated to a tool like this!"

Two hours later, I was prompting it to build The blogging website you're reading this blog on. I always wanted to do something like this using frameworks like Astro. I remember trying to learn Astro once just for this but I never did complete that side-project. And today, I was able to do it all in under an hour and the cherry on top was that it was able to convert my thoughts for the site design into reality without me ever fighting with CSS (I hate it!) while I watched youtube on the side and did some house chores. 

With that being said, I would like to put on my tin-foil hat and share my personal thoughts about AI and coding. 

## I wonder what's next?

Developer jobs won't be going anywhere anytime soon but I feel the way society looks at developers and software engineers might change. Perhaps developers value in the workforce would diminish. These tools are making us quite productive at the moment, but they are also slowly taking away our agency in the workforce. 

This morning, I was watching this [YouTube video](https://www.youtube.com/watch?v=EO3_qN_Ynsk) while having breakfast. Big-tech and small startups have all embraced AI in development workflows from vibe-coding to PR reviews to documentation to deployment (and the list goes on...). What really stood out for me in the talk was how heavily startup founders and tech leaders were banking on AI. From providing Cursor licenses company-wide to openly promoting it's usage for other fellow founders in their circle. Designer, PM, and Business folks seem to be loving this development because it's effortlessly giving them similar outputs with fewer headaches from Tech and Business team ping-pongs. 

Perhaps in the future, PMs will freely be able to change product requirement last minute (in the interest of rapid prototyping) and iterate through their ideas knowing fully well that the developer efforts won't be that much because of AI. Eventually, companies might even start refraining from hiring senior devs or multiple junior devs because AI tool licenses would cost less. And smaller teams might be able to give them similar output as bigger teams on payroll. Maybe designers would quickly be able to convert their Figma mockups to pixel-perfect UI in minutes (it's already happening to some degree) and not even have to bother going to the tech team for approval of their code changes. I realize that sounds a bit farfetched, but given how AI coding is progressing (and the fact that I have my tin-foil hat on), it might just happen sooner than you might think. 

I wonder what would be a good reason for a company to pay inflated salaries to developers in the future. Again, software engineering probably won't go away as a job function in the future, but perhaps it won't be as lucrative as it once was. Coding would be democratized and software engineers' role in the company would be akin to that of a PM—being very clear with the software design and architecture of the product, and those would be handed over to AI to build.

We all love to tell the PMs that the Jira ticket for centering a div would probably take 2-3 story points. That's something which probably wouldn't be possible in the future. These "low hanging fruits" like tasks might not even make it to the sprint grooming calls as they won't be relevant for devs/tech-team. 

The future as a developer seems bleak to me and I would love a counter argument for it. 

### So what now?

Do we give up as software engineers? Should I stop learning the low-level fundamentals of software engineering and start investing my time elsewhere (perhaps in managerial roles) as that would be much more useful in the future? Personally, I don't honestly know what's the right answer. Stepping away from coding and being more managerial in the workforce does seem like an AI proof career as of right now. But dare I say managing people is hard for many, time consuming and at times I feel it just doesn't really give me the satisfaction of building a product. All my life, I have seen myself as a problem solver. I thoroughly enjoy breaking down a complex requirement and delivering a project. Now AIs would replace that to some degree. I can learn to live with that kind of lifestyle but as of right now it doesn't feel like I'd truly enjoy it. 

What I have realised reading and learning more this past week is that we are at some kind of **_Inflection Point_** for software. The next few years are honestly quite exciting for a software engineer. Watch this [Andrej Karpathy video about Software 3.0](https://youtu.be/LCEmiRjPEtQ?si=2D2U96uxzzPubEbp) to understand what I'm trying to say a bit more. 

These kind of revolutions have always propelled society and act as some kind of a chaos ladder. I now look at the disruption of ChatGPT as an opportunity more than a curse for my job. It's like the birth of internet and the dotcom bubble. Or perhaps the Apple Appstore moment in a way. These moments in time truly changed the world and made software engineering what it is today. Before 2008, there were no "App developers," but then Apple's App Store and SDK made it easy for normal people sitting at their homes to build an app and publish it on the App Store. Make money out of it and run it as a business. That marketplace alone became the reason apps like AirBnb became a thing. Those apps became big businesses, and I feel the cycle will continue. 

In one Y-Combinator podcast (I can't seem to find the reference for it), this one VC said everything that exists today in 2025 as an app would have an AI equivalent version for it in the future. Now more than ever, it's easier to be creative and build something that creates impact in society (insert "making the world a better place" slogan from Silicon Valley).

It's like with LLMs, we as developers have been given a blank canvas and a paint brush. The choice is ours on what to do with it.

A few years ago, if I ever came up with an app idea, people would say "something like this already exists..." and more often than not, they were right. Either my 'novel' app ideas were just a 'feature' to an existing application or not really relevant for most users in the world. That's not to say value-generating products aren't still being made, but the market has been saturated for quite a while. AI seems to be a clean slate again for us developers. 

The choice is ours to either embrace it and be at the frontier of the AI revolution or follow the same old routine of just being a good software engineer looking at AI's development as nothing but a fad or a bubble that will one day burst.

I feel even if LLMs don't deliver "SuperIntelligence" in the future, they will still have already fundamentally changed the world. I know they already have, but as Andrej pointed out in his talk, it's important to note that AI is still in its infancy. There is still a lot more to come, and the wisest thing would be to upskill. 

The old ways of coding might soon become obsolete, but the next wave of engineering is honestly just getting started. That gives me hope, and I leave you with that hope too! 

Thanks.

---

*I will try to read more and share everything I learn through this blog more! Keep a watch for more updates on my LinkedIn*