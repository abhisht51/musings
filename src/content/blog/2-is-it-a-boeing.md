---
title: "Building isItABoeing?"
description: "A web application which tells user if they are traveling on a Boeing (for now)"
publishDate: 2025-07-20T00:00:00Z
updatedDate: 2025-07-20T00:00:00Z
tags: ["Projects", "Vibe Coding"]
draft: false
heroImage: "/images/is-it-a-boeing.png"
---

# Introduction

The recent horrific airlines accidents have been quite concerning for me personally. I have looked a lot into the root cause analysis. Perhaps I'm biased but I have concluded that airlines might not be primary culprit for accidents. The accidents could also be a case of Manufacturer's Defect which has been in the news for the last few years. 

While booking flights recently, I just had the idea of checking if the flight I'll be flying on would be a Boeing or Airbus. This birthed the idea of **isItABoeing?** -- An application which answers which flight I'm flying on and if it's a Boeing or not. 


## Why build it? 

I am confident that this information can be fetched looked up on other websites which would probably also be more informational about the flight the user looks up info for. But I still wanted to build it. Why? Simple 3 reasons 

1. I wanted to have a simple website which does just one thing but does it well. Specifically tell user's reliably what aircraft they'll be flying on? 
2. I wanted to hone my new found "skill" of vibe-coding. I wanted to test the capabilities of these coding tools more. Could they build an application like these with simple prompting ? or did I have to do keep on prompting because it couldn't do it right they first time? 
3. Honestly, I had free time in hand and I really got motivated about this :) 


## Was it challenging? 

Initially when I conceived the idea, I thought there would be APIs I could leverage and simply give the users the answers very quickly. But to my surprise, there weren't many good APIs that were free. There were free rate-limited APIs with limited and at times un-reliable data. 

This made me decide that I should perhaps scrape some famous flight information website. But in my experience with web-scraping I have learned two things. 
- It's rather slow for real time scenario 
- It's harder to manage if the website changes it's UI or layout

So to tackle the above, I decided to do things differently. I observed few things about airlines and flight world such as 

- There are a finite number of active flights in this world at this time. 
- New flights are not added very often but perhaps that data could be update once per month or something. 
- Currently, I can roll out the first version with just few airlines and expand overtime based on usage onboard other airlines. 

I then focussed on making LLM write a script where it would scrape all the major airlines of India and America. Then get all the flight numbers of these airlines and then look up all those flight's aircraft's information. Having done that, the script would add that information to a local directory JSON for fast lookup during search query. 

This way, I ended up building my own database and overtime this could get bigger and remove inconsistencies. I have "control" over the datapoints. This problem statement for me was the most challenging. It required me to understand airline industry a bit and also design system in a way which although has a tradeoff of eventual consistency, opens up avenues for lot of customisation for me in the long run. I was quite happy with it! 

Post this activity of building my own accurate database, I just simply vibe-coding the UI layer with famous UI frameworks and a feedback and tracking system using **Supabase** and **PostHog**


## The outcome

All in all it took me about 4-5 hours to build, enhance the UI and deploy on vercel. That might seem like a lot specially with vibe-coding but the first draft version of it was built in under 2 hours. I just took more time to refine the product until my brain was satisfied. 

You can check it out here -- [isitaboeing?](https://isitaboeing.vercel.app/) 

Thanks.

---

*I will try to read more and share everything I learn through this blog more! Keep a watch for more updates on my LinkedIn*