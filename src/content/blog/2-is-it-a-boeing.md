---
title: "Building isItABoeing?"
description: "A web application that tells users if they're traveling on a Boeing aircraft (for now)"
publishDate: 2025-07-20T00:00:00Z
updatedDate: 2025-07-20T00:00:00Z
tags: ["Projects", "Vibe Coding"]
draft: false
heroImage: "/images/is-it-a-boeing.png"
---

# Introduction

The recent horrific airline accidents have been quite concerning for me personally. I've looked extensively into the root cause analysis. Perhaps I'm biased, but I've concluded that airlines might not be the primary culprit for these accidents. The incidents could also be a case of manufacturer defects, which have been in the news for the past few years. 

While booking flights recently, I had the idea of checking whether the flight I'd be taking would be a Boeing or Airbus. This gave birth to **isItABoeing?** — an application that tells you what aircraft you're flying on and whether it's a Boeing or not. 


## Why build it? 

I'm confident that this information can be found on other websites and it would probably be more comprehensive as well. But I still wanted to build it. Why? Three simple reasons: 

1. I wanted to create a simple website that does just one thing but does it well — specifically, tell users reliably what aircraft they'll be flying on.
2. I wanted to hone my newfound "skill" of vibe-coding. I wanted to test the capabilities of these AI coding tools further. Could they build an application like this with simple prompting, or would I have to keep prompting because they couldn't get it right the first time?
3. Honestly, I had free time and really got motivated about this project! :) 


## Was it challenging? 

Initially, when I conceived the idea, I thought there would be APIs I could leverage to simply give users answers very quickly. But to my surprise, there weren't many good free APIs available. The free APIs that existed were rate-limited and often had unreliable data. 

This made me consider scraping some well-known flight information websites. But from my experience with web scraping, I've learned two things:
- It's rather slow for real-time scenarios
- It's harder to manage when the website changes its UI or layout

To tackle these issues, I decided to do things differently. I observed a few things about airlines and the flight industry: 

- There are a finite number of active flights in the world at any given time
- New flights aren't added very often — the data could probably be updated once per month
- I could roll out the first version with just a few airlines and expand over time based on usage, onboarding other airlines gradually 

I then focused on having an LLM write a script that would scrape all the major airlines of India and America, get all their flight numbers, and then look up each flight's aircraft information. The script would then add that information to a local JSON file for fast lookup during search queries. 

This way, I ended up building my own database that could grow over time and remove inconsistencies. I now had "control" over the data points. This problem was the most challenging for me. It required understanding the airline industry somewhat and designing a system that, while having a tradeoff of eventual consistency, opens up avenues for extensive customization in the long run. I was quite happy with this approach! 

After building my own accurate database, I simply vibe-coded the UI layer using popular UI frameworks and implemented a feedback and tracking system using **Supabase** and **PostHog** respectively.


## The outcome

All in all, it took me about 4-5 hours to build, enhance the UI, and deploy on Vercel. That might seem like a lot, especially with vibe-coding, but the first draft was built in under 2 hours. I just took more time to refine the product until I was satisfied with it. 

You can check it out here -- [isitaboeing?](https://isitaboeing.vercel.app/)

This experience motivates me to build more things in my free time and I'm constantly trying to look for ideas. So personally, I'd call it a big success. 

Thanks.

---

*I'll try to read more and share everything I learn through this blog! Keep an eye out for more updates on my LinkedIn.*