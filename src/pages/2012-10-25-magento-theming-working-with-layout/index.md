---
title: "Magento Theming: Working With Layout"
date: 2012-10-25T22:08:58+01:00
---

Any frontend developer who's taken a passive interest or a curious look into Magento theming will remember the moment when they recoiled and thought; "Honestly, wtf".

It's in our nature as developers to dive into things, at least initially. If something catches our interest we want to see straight away how it works, so rather than reading around a subject, perhaps doing a tutorial first, we rip off the mask and see the god awful monster staring back at us. We scream, it screams and we all run away, and for some people thats enough Magento for them.

There's no denying the theming engine in Magento takes patience to learn and can be frustrating in places, notably due to a lack of documentation and the blind ineffectively leading the blind.

<em>This post wont teach you how to theme in magento but will detail some general concepts and tips to do some common things that should ease your pain.</em>
<!--more-->
<h2>Layouts</h2>
The layout part of Magento theming is generally the one that catches most people out, since its quite unique to Magento. If you're still struggling to grasp the relationship between the layout xml files and the templates the best 'non-technical' description I can give, is that your Template files ( the .phtml ) provide a placeholder ( $this->getChildHtml(''); ) for your layout blocks to insert themselves into. You can then order your blocks, remove some in your layout xml documents. Why is this better than editing the .phtml files? Enter local.xml
<h2>local.xml</h2>
If you've done any level Magento development and not used local.xml in your theme, prepare to kick yourself.

Some outdated tutorials and forum posts, and indeed the template layer, encourage you to copy the files you want to change over from the base theme into your local theme. Gotta change something in catalog.xml? Easy, just copy that to <em>/mytheme/default/layout/</em> right? Well you could, it would work, but overriding hundreds of lines of core code just to change 1 line is overkill, not to mention if an upgrade changes catalog.xml a bit then things are gonna break, hard.

I won't pander too much as most themers will be aware of this file but essentially it lets you add layout handles that effect modules throughout the site. Need to remove the newsletter module signup from across the site? Rather than edit newsletter.xml. Just add the following to the local.xml:
{% highlight html %}
    <default>
    <remove name="left.newsletter" />
</default>
{% endhighlight %}
We can control so much with local.xml it should most likely be the <em>only</em> file in your themes layout/ folder, so then, what can we do?
<h2>Referencing and Moving</h2>
If there is something you need to amend, first find its handle in its module's xml file. For example the Product view uses catalog.xml and its 'handle' is catalog_product_view. Create the relevant nodes in your local.xml
{% highlight html %}
    <catalog_product_view>
    <!-- Now we can override stuff from the catalog.xml, 1 line, 2 lines or everything if needed --> 
</catalog_product_view>
{% endhighlight %}
Once you've specified the handle you need to open a reference to the area you want to influence, the reference is the 'name' of the parent node. So still using catalog.xml and the catalog_product_view as an example:
{% highlight html %}
    <block type="catalog/product_view" name="product.info" template="catalog/product/view.phtml">
    ....
    <block type="catalog/product_view_description" name="product.description" as="description" template="catalog/product/view/description.phtml">
    ....
    </block>
    {% endhighlight %}
In this case if we wanted to effect "product.description" we'd open up a reference to its parent "product.info" :
{% highlight html %}
    <catalog_product_view>
    <reference name="product.info">
        <!-- we can now effect anything inside this reference -->
    </reference>
</catalog_product_view>
{% endhighlight %}
More often than not you'll be calling a higher level reference such as "content", "left" or "right".

One of the most common things you'll need to do is either remove elements or move them around, so lets look at the best way of doing that.
<h3>"Definately wont be needing that"</h3>
If you absolutely do not need something in your templates you can call remove on it.
{% highlight html %}
    <catalog_product_view>
    <reference name="product.info">
        <remove name="product.description" />
    </reference>
</catalog_product_view>
{% endhighlight %}
This means its completely removed from the theme, we can't use it anywhere else, which in this case is possibly a bad idea, what if we just wanted to put it somewhere else?
<h3>"I wanna put that over there"</h3>
Say you don't want the breadcrumbs rendering where they do normally, you want to put them in another reference you've styled differently, you've created the reference now you want to stick the breadcrumbs in there:
{% highlight html %}
    <default>
    <reference name="root">
        <action method="unsetChild"><name>breadcrumbs</name></action>
    </reference>
    <reference name="masthead.sub">
         <action method="insert"><child>breadcrumbs</child></action>
     </reference>
</default>
{% endhighlight %}
These sort of things are really handy as they stop you touching the template files which is always a good thing if you can get away with it.
<h3>"But I need to put that somewhere that doesn't have  a reference".</h3>
Why not create a new reference? I've found myself having to do this for things like "masthead" where theres an area between the normal header and the main page and I want to inject banners or other content to it. A lot of documentation tells you to add them to page.xml, but you can add them in your local.xml in the root reference:
{% highlight html %}
    <default>
    <reference name="root">
        <block type="core/text_list" name="masthead" as="masthead" translate="label">
             <label>Masthead</label>
         </block>
     </reference>
</default>
{% endhighlight %}
For those that may not know the default handle effects every page on the site, and the root reference is, well its the very top reference. You can do other cool things here like set the default template for every page, within your local.xml
<h3>"Hey, everything has a 3 columns by default, most my pages are two column left"</h3>
{% highlight html %}
    <default>
    <reference name="root">
        <action method="setTemplate"><template>page/2column-left.phtml</template></action>
    </reference>
</default>
{% endhighlight %}
Boom! Everything will now be 2 column left unless overridden somewhere else, you can leave page.xml in the base theme.
<h2>Other Little Tricks</h2>
In Magento sometimes the little things can be the most frustrating, here are a couple of problems I've run into with some snippets to save the pain.
<h3>"The product grid is showing 3 items per row, dammit I need 4!"</h3>
This little nugget will help you here, I keep coming back to it so its actually good I have it published somewhere:
{% highlight html %}
    <reference name="product_list">
     <action method="setColumnCount"><count>4</count></action>
</reference>
{% endhighlight %}
<h3>"If only I could wrap that block in another div and set a class on it"</h3>
Before you go reaching to override that template file just to wrap the block in a container for styling purposes, have a little consideration for this snippet. It'll wrap your target block (myblock) in a div element and you can set a class on it:
{% highlight html %}
    <block type="page/html_wrapper" name="myblock.wrapper">
    <action method="setElementClass"><value>my-wrapper-classname</value></action>
    <block type="page/html" name="myblock"/> <!-- add your block in here -->
</block>
{% endhighlight %}
<h3>"I can't stands no more"</h3>
We'll leave it there then, I hope the above helps someone as I've had to learn some of these lessons the hard way over the years, I'll try and continue to put out stuff that will help beginner magento themers get it right the easy way in the future.

Its important to note that we do poke fun at Magento for being difficult, but in reality its a massively complicated and immensely powerful platform, and in the right hands you can do amazing things, very quickly. You just need to train those hands.

Futher Reading : <a href="http://magebase.com/magento-tutorials/demystifying-magentos-layout-xml-part-1/">http://magebase.com/magento-tutorials/demystifying-magentos-layout-xml-part-1/</a>
