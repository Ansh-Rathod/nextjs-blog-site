---
title: "How to get a dominant color from an image in a flutter."
date: "22 septempber 2021"
tags: Flutter
cover_image: "/blog_2/Untitled.png"
---

  <center>__ __ __</center>                  
<br/>

Howdy, so as you've noticed in the blog image the first screen looks boring and not attractive than the second screen not because I designed it that way but you find a match for color in the image and background color of the scaffold and its looks so awesome and you've seen this pattern in many UI designs but how can we generate this kinda color palette dynamically in our app so you find the right blog post lets get started.
<br/>
<br/>

<center>

<img src="https://i.gifer.com/8GGH.gif" alt="Image not found" style="max-width:600px;width:100%;"/>

</center>

<br/>
<br/>

To get color palette from image in flutter its very easy to implement.
you just need to add the following dependencies to your pubspec.yaml file
<br/>
<br/>

<div class="code">

palette_generator: latest-version

</div>
<br/>
A Flutter package to extract prominent colors from an Image, typically used to find colors for a user interface.

[palette_generator | pub.dev](https://pub.dev/packages/palette_generator)

<br/>

#### lets jump on code

<br/>
lets create a class called <code>FetchColorFromImage</code> and define a <code>Future< Color?> getColor(ImageProvider image)</code> color? beacuse if ImageProvider could not load image it will give you an null value.
lets add the following function to getColor future 
<br/>
<br/>

<script src="https://gist.github.com/anshrathod-blog/4002b3a0f38038f4598f3a2d16d008f0.js"></script>
<br/>
paletteGenerator will give you 7 diffrent colors from image. Dominant(The color expresses more intensity among other colors in the picture.), light vibrant, vibrant, dark vibrant, light muted, muted and dark muted.
<br/>
<br/>

<script src="https://gist.github.com/anshrathod-blog/e2ee3b24e1af3096424ae7a5f23cf316.js"></script>
<br/>

We just need Dominant color from image so lets return <code>paletteGenrator.dominantColor!.color</code>
whole get_color_repo.dart
<br/>
<br/>

<script src="https://gist.github.com/anshrathod-blog/6103aac827228cf95b7a6ce182954ef7.js"></script>

### Now lets call it and create a UI

<br/>

you can direct call it from initState or <code>FutureBuilder</code>

<br/>
<script src="https://gist.github.com/anshrathod-blog/7cf66ea0f78f74a32066a16e953c7c72.js"></script>

Thanks for following along i have created an cool app with this package's implemention you should check out [here](https://github.com/Ansh-Rathod/Flutter-Bloc-MovieDB-App)
