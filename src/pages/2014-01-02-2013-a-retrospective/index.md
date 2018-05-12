---
title: "2013 - A retrospective"
date: 2014-01-02T14:18:58+01:00
---

These types of posts are a little bit cliche but I felt, given the fast moving pace of our industry and how it can continually feel like you don't know enough, its important to reflect on how far you've come from time to time, and I suppose a new year brings that sentiment to the surface easier than other times.

This past year (and the latter part of 2012) has involved some of the biggest changes in my life since I moved away from home to Leeds University in 2004; New job, new home, and new challenges. I'd like this post to capture what I feel like I've learned, where I've improved and aspirations for 2014.

<!--more-->

## Agile &amp; Lean
The past year exposed me to a full on agile workflow for the first time. There was quite a learning curve, admittedly, especially getting involved with the requirements gathering at the start of a project. It also took me a little while to adjust to the idea that we could involve design alongside a regular development sprint. Whilst I could fully understand the merits of not doing upfront design, I struggled initially with the practicalities of how that fits into the process ( Kirsten has wrote some [excellent](http://www.uvd.co.uk/blog/designing-for-user-stories/ 'Designing for user stories') [articles]((http://www.uvd.co.uk/blog/stop-doing-upfront-design-its-a-waste-of-time/ 'Stop doing upfront design its a waste of time') on just how we do that).

My interest towards the latter part of the year has been in trying to improve the integration of a design workflow into our general agile process. We've had quite a bit of success in pulling user stories into the design workflow one sprint ahead of the development cycle, and working incredibly tightly with the development team and the client to ensure we get a cross pollination of ideas and buy-in from all parties prior to development starting on that user story.

One area that I know I could improve is in advocating and facilitating the involvement of more users in this workflow. Having read the rather excellent ['Just enough research'](http://www.abookapart.com/products/just-enough-research) over the holidays I'm keen to explore introducing some end user research into our design process this year.

##Frontend Tooling and Workflow

Last year exposed me to quite a few new technologies and processes that have pretty much changed the way I work.

### Vagrant

[Vagrant](http://www.vagrantup.com/) is a utility that allows you to share portable development environments that you can spin up as Virtual Machines. Whilst its not something I've had much of an active input in curating its certainly an interesting way of managing and switching your development environments, and especially helps keep your host machine free of clutter. I will be keeping an eye on [Docker](https://www.docker.io/) this year as it seems to be gaining quite a bit of popularity.

### Grunt
Quite frankly one of the best tools in a frontend arsenal at the moment. I started off using it to watch and compile changes to sass files and since then I've used it for everything from image optimisation, live reload, running javascript tests and building out minified and concatenated js/css resources. I even had a go a creating my own plugin to build and serve a pattern library from static assets ( [Pattern Knit](https://github.com/ryanhyslop/grunt-pattern-knit) ) - which admittedly needs some improvements but have found it works quite well on some recent projects. I still think I'm not making the most of Grunt currently, so I'm looking to try and write a few more tasks this year, and will be keeping an eye on [Gulp.js](http://gulpjs.com/) which seems to be gaining some traction as an alternative to Grunt.

### Yeoman
I took a bit of a dive into Yeoman this year with the Angular generator. I didn't have a particularly great experience with it as we unfortunately started using it just as it hit the 1.0 release and there were some issues with the Angular generator. I'd really like to get more involved with it for a new project and perhaps invest time in learning more about developing generators for it ( and for grunt ) so we can make it work better for us in the future.

### Bower

Admittedly I struggled with the concept of bower at the start. I felt that, for most of the projects I'd worked on, simply committing whatever 3rd party libraries the project depended on was sufficient. I still think that for your typical web site development bower may be a bit much, but it really comes into its own when developing a web application. Alongside Grunt, Bower has made deploying a recent project so much more reliable.
It facilitates a modularity in your build system and repositories, most web apps are built with a collection of individual, dependant modules and bower makes managing this incredibly easy.

### Behaviour Driven Development

A new concept to me at the start of the year. The principle being that the acceptance criteria for a feature is written in human readable language - using [Gerkin](http://docs.behat.org/guides/1.gherkin.html) - forged from user stories, and using a tool, in our case Behat, write tests that validate the application is doing what it needs to to support those user stories. It requires quite an investment in time and approach to get working currently, and that approach can change from project to project. In a rapidly changing project we've found these tests can provide a bigger return on investment than our regular unit tests as at least we know the feature is still working, which ultimately is the most important thing.

Related to this a personal milestone last year was actually doing a in house talk on this very subject [Full Stack Behaviour Driven Development: From Backend to Frontend](http://www.youtube.com/watch?v=DeXGZQkGqpA).

I'm currently keeping an eye on the [Cucumber.js](https://github.com/cucumber/cucumber-js) project with the hope that it will reach point where it could potentially play a part in our future BDD workflow.

### Robohydra
[Robohydra](http://robohydra.org/) is a fantastic little tool thats worth a mention, it essentially allows you to configure it to return mock data or static files back from URLs. This is immensely helpful for quick debugging a live site with local assets or to develop a client and mock the backend responses. [This post](http://robsquir.es/blog/2013/03/06/bdd-tips-mocking-an-api/ "BDD tips mocking an api") by Rob gives a great insight into how we've used it in the past. I've found it especially useful used in conjunction with [Postman REST client](https://chrome.google.com/webstore/detail/postman-rest-client) to test your frontend without needing the backend to be available to support it.

## Javascript &amp; Frameworks

Circa late 2011 my javascript skills had been limited to UI behaviours and relied quite heavily on jQuery. This past year has seen me dive deeper into javascript itself gaining a much better understanding of the language and software design principles in general. Whilst I don't aspire to be a software developer, I've felt like I really want to push my javascript development as far as I can take it, simply because I enjoy it.

This past year has seen me gain some practical experience developing apps with [Backbone.js](http://backbonejs.org/) and [Angular.js](http://angularjs.org/) and testing them with [Mocha](http://visionmedia.github.io/mocha/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/) and [Karma](http://karma-runner.github.io/0.10/index.html). Whilst the merits of each of these is beyond the scope of this article, I feel like I've been fortunate to gain exposure to some best in class tools that have given me a well rounded skill set when approaching development for web applications.

This year I want to invest more time in learning more about changes coming in ES6 and the impact they will have. I'd also like to spend a bit more time understanding javascript design patterns and general architecture best practices to allow me to make better informed decisions when developing. There are some interesting changes in the javascript MVC world thats worth keeping a breast of, as outlined in [this post](http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/).

### Ultimately&hellip;
my take away from the past year is that whilst I feel I've learned a lot I don't feel like I've expressed that learning in any other way than my day to day work activities. With that in mind, I'm aspiring that 2014 be the year that I start experimenting more and documenting more, starting with this rather laboured post itself.
