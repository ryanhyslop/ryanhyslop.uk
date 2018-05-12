---
title: "Taming the Sheet - Thoughts on modern CSS Authoring"
date: 2012-04-31T19:45:58+01:00
---

One of the biggest challenges once a developer has a grasp of new language is how to implement it effectively and sensibly.

A lot of established languages have design patterns to draw upon, blueprints of code that experienced developers over time have curated as ‘best practice’. These patterns or approaches give newer developers a reference point to see how developing in a certain manner will be more effective.

CSS has always lacked this, as by its very nature it is very flexible and the types of sites it can be applied to vary enormously, never the less browser implementation of more advanced CSS modules has exploded over the past 2 years and our stylesheets are growing as are the complexity of the websites we are building. We. Need. Order!

Fortunately people are stepping back and thinking about how we can tame these unwieldily documents of hashes and dots. In my opinion there are 2 major areas in which, once considered, can dramatically change the way you author CSS, for the better of course.
<h2>1. Build Components, Not Pages.</h2>
The DRY principle is a foundation of software engineering, put simply if you’re writing the same stuff over and over again a voice in your head should be tutting disapprovingly and spurring you into thinking “Surely there’s a better way”, enter OOCSS.

In production we’re historically used to developing pages individually, Ok thats the homepage done now lets look at the product page, our approach to building parts of these pages can generally be reflected in our Stylesheets and Markup

<pre class="language-css">
#home-products li {
    float:left;
    margin-left:10px;
}

#catalog-index .product-list li{
    float:left;
    margin-left:10px;
    border:1px solid #ccc;
}
</pre>

These ( slightly exaggerated ) examples illustrate that we’ve styled up an area of the page based on either; where it is, or its function. The key issue here is, at a top level, these elements may have styles in common with other components, or these components could move within the site layout.

Addressing these issues doesn’t require learning new techniques, syntax or properties, just a slight change in approach. By stepping back from the design and identifying layout and style patterns that can be abstracted into small classes that can be applied to multiple elements.
<pre class="language-css">
.list-inline > li {
    float:left;
    margin-left:10px;
}
</pre>
Here we now have a more generic class that we can apply to anything that needs to be floated left with a margin, and this leads us on nicely to…
<h2>2. Form not Function.</h2>
Theres been quite a bit of discussion lately on the merit of 'semantic classnames' in css, usually with an arrest trial and execution of '.red {}', but that could be the subject of another post entirely. There is a lot to be said however, for decoupling your class names from what it is your styling, and providing a classname that is more appropriate to the output.

A Good example is:
<pre class="language-css">
/*
 .callout
 - A base class to format areas that need to stand out from other content
*/
.callout {
    padding:1em;
    margin-bottom:1em;
    background:black;
    color:white;
}
.callout-important {
    font-size:1.5rem;
    background:red;
}
</pre>
Here we are defining a class that'll style an area of our site that stands out from the rest of the site, calling out, if you will. What this example further illustrates is the idea of establishing a 'base' class, and extending it with variations, we then apply these classes as follows:
<pre class="language-html">
    &lt;div class=&quot;callout callout-important&quot;&gt;
</pre>
A personal favourite example of abstracting shared styles to a root class for sub classes to extend is one Harry Robberts ( @csswizardry ) demo’d on jsfiddle for buttons:
<pre class="language-css">
/* Buttons */
.btn {
    font:inherit; /* Normalise fonts across <;a>;s and form buttons. */
    text-decoration:none; /* Normalise hover behaviour. */
    cursor:pointer; /* Normalise hover behaviour. */
    border:none; /* Normalise border styles (or lack thereof). */
    line-height:1; /* Remove line-height so we can size with padding. */
    display:inline-block; /* Normalise display state. */
    margin:0;
    /* Cosmetics */
    padding:0.5em; /* Set in ems so we can scale buttons up with font-size alone. */
    color:#fff;
    background-color:#ACE;
    border-radius:4px;
    -webkit-transition:0.2s;
    -moz-transition:0.2s;
    transition:0.2s;
}

.btn:hover{
    background-color:#FAB;
}

.btn-sml { font-size:.75em; }
.btn-lrg { font-size:1.5em; }
</pre>
Here we have 1 class, that when applied to either an anchor, input or button element will render the same style. If we need a bigger button, we create a sub class with any additional styles or overrides, and add both classes to the element.

<pre class="language-html">
    &lt;a href=&quot;&quot; class=&quot;btn btn-sml&quot;&gt;Small button&lt;/a&gt;
</pre>
Wizardry indeed.
<h2>Organisation</h2>
A big challenge for yourself, and especially in a team is harmonising your coding preferences and style into a format that works best for everyone. Ultimately the key is to establish a convention and stick to it, I do feel though it slightly naive to stick to an approach you’ve developed yourself without looking at what other people are doing.

In my opinion a landmark publication in this area is Jonathan Snooks‘ SMACSS.

In its own words...

"<em>SMACSS is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. It is an attempt to document a consistent approach to site development when using CSS</em>"

I can’t recommend this book enough for an introduction into really considering how you write and organise your CSS. One of the huge benefits of Jonathans ( or Mr Snook, to give him his full Dr Suess name) approach is that its open to interpretation and it gives you ideas, but maintains a solid but transferable philosophy that advocates a modular coding style.

Some of my takeaway points from SMACCS are:
<h3>Organisation of your code into:</h3>
<ul>
    <li>Base</li>
    <li>Layout</li>
    <li>Module</li>
    <li>State</li>
    <li>(Theme)</li>
</ul>
This organisation reinforces the idea of the cascade and inheritance in CSS, and indeed the order in which your code should nest.

The base provides your defaults, its styling to *elements* not classes, and will step up if you don't provide any further styling with your modules. Layout houses your modules, it provides the grid, the structure for which the modules will sit.
Your modules are "discrete component[s] of the page", they are developed in a manner so they could be moved within a layout, or reused in varying contexts and still maintain their appearance. Modules can extend one another (as we've previously seen) to provide variance to a widget or component.

Lastly state provides overruling styles, typically to a module, depending on what it should be communicating (eg.loading, success, error).
<h3>Prefixing of your layout rules &amp; namespacing of modules</h3>
Admittedly not something I'd given much thought till until I'd read SMACCS but one of those things that I'm taking for granted now. Our layout classes govern the structure of our site and so we can tell thats the case with our class names we prefix them:
<pre class="language-css">
.l-main {
width:70%;
float:left;
}

.l-sidebar {
width:20%;
float:right;
}

.l-masthead {
/* */
}
</pre>
Immediately when viewing our markup we can see these classes are providing layout rules to our elements:
<pre class="language-html">
    &lt;div class=&quot;l-main&quot;&gt;
        &lt;div class=&quot;callout&quot;&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;l-sidebar&quot;&gt;
        &lt;div class=&quot;callout callout-minor&quot;&gt;&lt;p&gt;by the way..&lt;/p&gt;&lt;/div&gt;
    &lt;/div&gt;
</pre>

The benefit of prefixing your layout rules (and state as we'll see) is that modules, which make up the bulk of your site, can remain prefix less as we can assume if it hasn't got a prefix, its a module. This lets us avoid things like: <em>.m-searchresult</em> or <em>.searchresult-obj</em>

Its just <em>.searchresult.</em>

How do we organise our modules then?
<h3>Namespacing</h3>
Taking our search result for example:
<pre class="language-css">
.searchresult {
 padding:1em;
}

.searchresult-title {
 color:blue;
 margin-bottom:2em;
}

.searchresult-image {
border:2px solid orange;
}
</pre>
Prefixing our modules components with its name is fairly self explanatory in its benefits, it keeps the code organised and we know exactly what it is applied to. Its specific, a bit, too, damn specific!

The huge benefit to these low level selectors is that we can mix and match modules to reuse common design patterns throughout the site. Our search result example, since it has an image, would probably have an image and text inline with one another. This is a common pattern identified in Nicole Sullivan's 'media' object ( <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">more info</a> ), so really we could do something like this:
<pre class="language-css">
.media {
 @extend .clearfix /* SASS inclusion of a clear fix for floated children */
}
.media-img {
 float:left;
 margin-left:10px;
}
.media-content {
 float:left;
}
</pre>
And we could markup our search result as follows:
<pre class="language-html">
&lt;div class=&quot;media searchresult&quot;&gt;
 &lt;div class=&quot;media-img searchresult-img&quot;&gt;
 &lt;img src=&quot;image.jpg&quot; /&gt;&lt;/div&gt;
 &lt;div class=&quot;media-content&quot;&gt;
 &lt;h2 class=&quot;searchresult-heading&quot;&gt;A result!&lt;/h2&gt;
 &lt;p&gt;This is good, we found something&lt;/p&gt;
 &lt;/div&gt;
&lt;/div&gt;
</pre>
Immediate reactions may be that theres a lot of classes for not a lot of styling, but the *massive* point here is it can be reused all over the site for similar design elements, we're coding a pattern first and for most then adding the detail.

Lastly an important lesson from SMACSS and indeed OOCSS approach as a whole is, if it hadn't become obvious already, <strong>low specificity selectors</strong>.

The benefit you gain here is that you avoid having to write long complicated selectors just because one before is overruling it. ID's are the big villains here, and in your general day to day CSS coding you shouldn't be using them.

Indeed this approach comes with a challenge of its own, the order of your rules is now incredibly important. Rather than authoring your stylesheet 'as you go', you have to pay closer attention to the order in which things are defined. In our above search results example, we'd want our .searchresults module to override our .media module if it so chooses, this hierarchy of modules should also be reflected in our markup: <pre class="language-html">&lt;div class=&quot;media searchresult&quot;&gt;</pre> so its quite clear what is extending or overriding what without digging into the stylesheet.

I've waltzed through quite a few things there, the main purpose was to clarify some of my own thoughts but I do hope it has some benefit to others. Its an exciting area, especially since it is just a change in approach, but there are so many benefits, problems and enhancements to discuss in one blog post so hopefully I'll get to those in future updates.

Comments are on and I'd love to hear any thoughts on this subject or specific posts, especially any issues people may have encountered adopting OOCSS.

Further Reading:
<ul>
    <li><a href="http://smacss.com/">SMACSS</a></li>
    <li><a href="http://oocss.org/">OOCSS</a></li>
    <li><a href="http://www.youtube.com/watch?v=R-BX4N8egEc&amp;list=UUMrzZG3q64oQmP_ouYn7yVA&amp;index=1&amp;feature=plcp">Harry Roberts - Big CSS</a></li>
    <li><a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">The Media Object - Nicole Sullivan</a></li>
</ul>
&nbsp;
