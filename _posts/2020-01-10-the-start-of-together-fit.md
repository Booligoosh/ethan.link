---
title: 'The start of together.fit'
image: '/img/posts/the-start-of-together-fit/cover.png'
---

Hi everyone! This is the first post on my personal blog (I've done lots of blogging before at [Code The Web][ctw], but not here).

A few days ago, I started working on a new project &mdash; [together.fit][tf]. In this post, I'll tell you a little bit the idea for together.fit, and what to expect soon! This post will also help keep me accountable 😛

## Introduction
I came up with the idea of together.fit when I was thinking about the [Nike Training App][ntc].

[Sergio Mattei][sergio] of [Makerlog][ml] had gotten me to sign up to it a while back so we could add each other as "friends". I thought this social element was really cool, but I didn't want to use Nike's workouts. This meant that I basically never touched the app, and couldn't share workout activity other than the Nike app workouts.

I thought it would be really cool if there was a fitness app where it was all about the social aspect — you could share workouts in an app-agnostic way, meaning you could do the workouts in another app, or not use an app at all, and you'd still be able to log them. I had a look and I couldn't really find anything already out there. The closest I could find was [Strava][strava], but that was focused on running, cycling, etc.

So, I started writing down a quick plan of what this app might look like! I also started brainstorming names, and found that the domain [together.fit][tf] was available! It didn't even require premium registration, just $4.99 for an awesome domain 😮

I was originally going to go with group.fit, but that cost $4363, even though it was available. But I've decided that I like together.fit better anyway!

## The idea
So, together.fit will be a mobile app where you can publicly log your workouts, and other people can react and comment to keep you motivated!

I'll share this screenshot of my progress so far on the main screen of the app to give you a better idea:

![The together.fit feed screen][feed]

I think that together.fit will help keep people motivated for a number of reasons:

### The four pillars of motivation with together.fit

1. **The carrot:** You get positive social feedback and validation when you complete a workout! This helps make it a strong habit because you get almost-immediate mental rewards, as well as the long-term rewards of being fit.
2. **The stick:** You're held accountable because your friends and other members can see when you haven't exercised. I might even add feed items in the future like "X hasn't exercised in a week, click here to remind them".
3. **The herd mentality:** When you open up together.fit and see all your friends and other platform members busy exercising, this will motivate you to exercise as well!
4. **The social activity:** It makes fitness more of a fun and social activity, rather than an isolated thing that you do alone. You'll feel like you're on this journey with a fun and supportive community instead of on your own.

## Pricing plans

I plan to make the base features of together.fit free, so everyone can enjoy a path to better fitness, and so that we have a wonderful and active community.

I'm not going to make the free plan one of those "annoying lack of features to make people upgrade" plans, it will give lots of value in its own right.

#### Free plan ($0/month)
- Unlimited logging of workouts
- React to workouts
- Comment on workouts
- Save workout templates so you can log your workouts quickly if you have certain routines
- Get access to the [together.fit Telegram channel][tg]

#### Premium plan ($4/month)
- Everything from the free plan
- Let other platform members "nudge" you to remind you to exercise
- Create "challenges" between you and other platform members (I'll flesh out this concept more later)
- Dark mode
- Change the app's theme color
- See a GitHub-contributions-like graph of how many exercises you did on each day of the year
- Track your streak (unlike Makerlog, I streaks won't be a core part of the platform to begin with. I might change this later, and if I do, I'll move it to the free plan)
- Get notification reminders to do a workout
- Integrate with Apple Health, Google Fit, Fitbit, Garmin, etc.

As you can see, I want to make sure that both plans deliver a lot of value. So the free features are really great, but so are the paid ones!

> #### Gym owner plan (??/user/month)
> I was talking with [Sébastien Vercammen][seb], and he introduced me to the concept of [boutique gyms][boutique]. Basically, these gyms have a smaller pool of members, and are more about fostering a positive community where everyone knows each other and helps each other stay motivated and fit.
>
> I think the together.fit model would be a really great way of keeping these communities in contact outside of the gym. So in the future, I will look at making a plan for gym owners, where they can get their users onto the platform, and they can interact in a special "group feed" for that gym only, separate from the main feed. I'll also add some other features for gym owners. This gives me the option to expand into B2B, even though most of this product is B2C.

### Friends vs. global feed
Originally, I was planning to make it so that you had to friend-request people to add them to your feed. This way it would be mainly your friends cheering you on. However, I had a great conversation with [Sergio][sergio] of [Makerlog][ml], and as someone who operates a similar product in a different market, he talked me out of it.

So for now, I'm going to make it a global feed. This means that you'll see workouts from everyone on the platform. This is to help together.fit grow in the beginning. Once lots of people are using it, I'll probably add the ability to make your account private, and to view a feed from people you're following instead of everyone.

But in the beginning, using a friend/follow model will silo the community too much. I was imagining it as an awesome feed of all your friends cheering you on, but in reality it would be more like the two friends you managed to rope into using the app with you posting once every few weeks. So I think that one big public space for all users makes the most sense to begin with.

## The timeline

Here's a rough estimate of what I plan to have done by when!

### January

- Get an MVP web frontend and backend done with free features ready for beta use

### February
- Keep working on beta
- Find online beginner-intermediate fitness communities and invite them to try the beta for free, develop and improve with their suggestions
- Get together.fit on the iOS and Android app stores (I can generate these from my web code using [Capacitor][cap], the assets / submission will the the main part)
- Iron out bugs
- Start working on premium features

### March
- Finish ironing out bugs
- Get all premium features done
- Build landing page

### April
- Build payment flow with Stripe
- Build onboarding

### May
- Start promoting finished product around the internet to see how people respond and test copy, payment, etc.
- Print out flyers and sneakily leave at gyms? (if I'm feeling gutsy 😂)
- Reach out to a few small fitness influencers (sorry I used that word haha) and see if they're interested in trying out my product

### June
- Launch on Product Hunt and Hacker News (this should NOT be the climax!)

### July and after
- I can't really plan this far ahead, depends how things go
- Keeping working on together.fit
- Keep looking for ways to promote it
- *Potentially* spend a little bit of money on ads to see if the conversion rate and $ earned per site visit makes it an effective thing to do. I think this will help get it outside my bubble

## Conclusion
So anyway, that's my plan for together.fit! I'd love to hear what you think of it!

If you're interested in using together.fit, please join the [Telegram group][tg]. Here you'll be able to meet the together.fit community before it's even launched, provide feedback on the development of the app, and get early access as soon as it's ready!

[Reply to this article on Twitter][discuss]

[tf]: https://together.fit
[app]: https://app.together.fit
[ctw]: https://codetheweb.blog
[ntc]: https://apps.apple.com/au/app/nike-training-club/id301521403
[sergio]: https://sergiomattei.com
[ml]: https://getmakerlog.com
[strava]: https://strava.com
[tg]: https://t.me/TogetherDotFit
[seb]: https://twitter.com/sebvercammen
[boutique]: https://blog.lifefitness.com/boutique-gyms-part-I-what-they-are-and-why-they-are-gaining-steam
[discuss]: https://twitter.com/Booligoosh/status/1215514081794256896


[feed]: /img/posts/the-start-of-together-fit/feed.png