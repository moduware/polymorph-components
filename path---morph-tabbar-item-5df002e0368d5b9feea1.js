webpackJsonp([51016193799559],{429:function(n,a){n.exports={data:{postBySlug:{html:'<p><a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a> <a href="https://www.webcomponents.org/element/PolymerElements/paper-progress"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on webcomponents.org"></a></p>\n<p>Tab bar item that morphs for current mobile OS.</p>\n<p><code class="language-text">morph-tabbar-item</code> component changes its appearance automatically based on whether the platform or device is IOS or Android.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<!---\n\n```\n<custom-element-demo>\n  <template>\n    <script src="../webcomponentsjs/webcomponents-lite.js"></script>\n    <link rel="import" href="../morph-shared-colors/morph-shared-colors.html">\n    <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">\n    <link rel="import" href="morph-tabbar-item.html">\n    <custom-style>\n      <style is="custom-style">\n        morph-tabbar-item {\n          --color: gray;\n          --selected-label-color-android: gray;\n          --selected-label-color-ios: #bd2d40;\n        }\n      </style>\n    </custom-style>\n    <next-code-block></next-code-block>\n  </template>\n</custom-element-demo>\n```\n\n-->\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Ios morph-tabbar-item demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon_selected.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>second-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon_selected.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Ios morph-tabbar-item with label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon_selected.svg<span class="token punctuation">"</span></span>  <span class="token attr-name">has-label</span><span class="token punctuation">></span></span>Favorite\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>second-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon_selected.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span> <span class="token attr-name">has-label</span><span class="token punctuation">></span></span>Favorite\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Android morph-tabbar-item with label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon_selected.svg<span class="token punctuation">"</span></span>  <span class="token attr-name">has-label</span><span class="token punctuation">></span></span>Heart\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>second-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img/icon_selected.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span> <span class="token attr-name">has-label</span><span class="token punctuation">></span></span>Heart\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>\n<p>Here is a quick demo of the morph-tabbar-item element.</p>\n<p align="center">\n<img src="/images/tabbar-item-ios-demo.png" alt="IOS morph-tabbar-item demo"/>\n</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Ios morph-tabbar-item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon_selected.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>second-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon_selected.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p align="center">\n<img src="/images/tabbar-item-android-demo.png" alt="Android morph-tabbar-item demo"/>\n</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo-snippet</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Android morph-tabbar-item with label demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon_selected.svg<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>second-item<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/icon_selected.svg<span class="token punctuation">"</span></span> <span class="token attr-name">label</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo-snippet</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n</li>\n</ul>\n<h2 id="attributes"><a href="#attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Attributes</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Custom Attribute</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n<th align="center">Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left"><strong><code class="language-text">platform</code></strong></td>\n<td align="center">String</td>\n<td align="center">Name of the platform, get assigned\n<br>\n automatically by the morph element.</td>\n<td align="center">Either \n<strong><code class="language-text">andorid</code></strong>\n or \n<strong><code class="language-text">ios</code></strong></td>\n</tr>\n<tr>\n<td align="left"><strong><code class="language-text">name</code></strong>\n \n<br>\n \n<code class="language-text">required</code></td>\n<td align="center">String</td>\n<td align="center">Parent element uses the name attribute\n<br>\n to be able to manipulate the items.</td>\n<td align="center"><strong><code class="language-text">false</code></strong></td>\n</tr>\n<tr>\n<td align="left"><strong><code class="language-text">has-label</code></strong></td>\n<td align="center">Boolean</td>\n<td align="center">To have a tabbar item with label assign it to \n<strong><code class="language-text">true</code></strong>\n.</td>\n<td align="center"><strong><code class="language-text">false</code></strong></td>\n</tr>\n<tr>\n<td align="left"><strong><code class="language-text">not-selected-image</code></strong></td>\n<td align="center">String</td>\n<td align="center">Image source for not selected state of the item.</td>\n<td align="center"><strong><code class="language-text">null</code></strong></td>\n</tr>\n<tr>\n<td align="left"><strong><code class="language-text">selected-image</code></strong></td>\n<td align="center">String</td>\n<td align="center">Image source for selected state of the item.</td>\n<td align="center"><strong><code class="language-text">not-selected-image</code></strong></td>\n</tr>\n<tr>\n<td align="left"><strong><code class="language-text">selected</code></strong></td>\n<td align="center">Boolean</td>\n<td align="center">If  \n<strong><code class="language-text">true</code></strong>\n, item is the selected one.</td>\n<td align="center"><strong><code class="language-text">false</code></strong></td>\n</tr>\n</tbody>\n</table>\n<p>Note: When using <code class="language-text">has-label</code> on the <code class="language-text">morph-tabbar-item</code>, it is important to put <code class="language-text">label</code> on the parent <code class="language-text">morph-tabbar</code> to have proper alignment and/or spacing for the text/label</p>\n<h2 id="styling"><a href="#styling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styling</h2>\n<ul>\n<li>For Android platform</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--color</code></td>\n<td>Color of the tabbar item</td>\n<td>#fff</td>\n</tr>\n<tr>\n<td><code class="language-text">--ripple-color</code></td>\n<td>Color of the ripple effect on the item</td>\n<td><code class="language-text">var(--color)</code></td>\n</tr>\n<tr>\n<td><code class="language-text">--ripple-color-selected</code></td>\n<td>Ripple effect color of selected item</td>\n<td>#fff</td>\n</tr>\n<tr>\n<td><code class="language-text">--selected-label-color-android</code></td>\n<td>Label text color of the selected item</td>\n<td>#fff</td>\n</tr>\n</tbody>\n</table>\n<p>-For IOS platform;</p>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--color</code></td>\n<td>Color of the tabbar item</td>\n<td>#8e8e93</td>\n</tr>\n<tr>\n<td><code class="language-text">--selected-label-color-ios</code></td>\n<td>Label text color of the selected item</td>\n<td>#007aff</td>\n</tr>\n</tbody>\n</table>\n<h2 id="further-help"><a href="#further-help" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further help</h2>\n<p>For more information on how to install and run test please go here - <a href="https://github.com/moduware/polymorph-components/blob/master/INFO.md">Polymorph elements getting started</a></p>',timeToRead:4,excerpt:"  Tab bar item that morphs for current mobile OS.  component changes its appearance automatically based on whether the platform or device is…",frontmatter:{title:"morph-tabbar-item",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"Polymorph Components",entries:[{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_button.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-button"},frontmatter:{title:"morph-button"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_pages.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-pages"},frontmatter:{title:"morph-pages"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_overlay.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-overlay"},frontmatter:{title:"morph-overlay"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-view"},frontmatter:{title:"morph-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_swipeout.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-swipeout"},frontmatter:{title:"morph-swipeout"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_ripple.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-ripple"},frontmatter:{title:"morph-ripple"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar"},frontmatter:{title:"morph-tabbar"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar-item"},frontmatter:{title:"morph-tabbar-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view"},frontmatter:{title:"morph-list-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-item"},frontmatter:{title:"morph-list-view-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_title.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-title"},frontmatter:{title:"morph-list-view-title"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_divider.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-divider"},frontmatter:{title:"morph-list-view-divider"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_sidebar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-sidebar"},frontmatter:{title:"morph-sidebar"}}}}]}]}},pathContext:{slug:"/morph-tabbar-item"}}}});
//# sourceMappingURL=path---morph-tabbar-item-5df002e0368d5b9feea1.js.map