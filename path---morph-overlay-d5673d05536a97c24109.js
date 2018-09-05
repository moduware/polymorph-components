webpackJsonp([45507929215728],{428:function(n,t){n.exports={data:{postBySlug:{html:'<p><a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a> <a href="https://www.webcomponents.org/element/PolymerElements/paper-progress"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on webcomponents.org"></a></p>\n<p>Overlay that morphs for current mobile OS</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<!---\n```\n<custom-element-demo>\n  <template>\n    <script src="../webcomponentsjs/webcomponents-lite.js"></script>\n    <link rel="import" href="../morph-shared-colors/morph-shared-colors.html">\n    <link rel="import" href="../morph-shared-styles/morph-shared-styles.html">\n    <link rel="import" href="../morph-button/morph-button.html">\n    <link rel="import" href="morph-overlay.html">\n    <script>\n      //Open and closes Android overlay\n      function openAndroidOverlay() {\n        document.getElementById(\'androidOverlay\').setAttribute("open", true);\n      }\n      function closeAndroidOverlay () {\n        var androidOverlay = document.getElementById(\'androidOverlay\');\n        if (androidOverlay.hasAttribute("open")) {\n          androidOverlay.removeAttribute("open");\n        }\n      }\n    </script>\n    <next-code-block></next-code-block>\n  </template>\n</custom-element-demo>\n```\n-->\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Android morph-overlay interactive demo. Click the button to see overlay.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-overlay</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>androidOverlay<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closeAndroidOverlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-overlay</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-button</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">filled</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openAndroidOverlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Overlay<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>Here is a quick demo of the morph-overlay element</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Android morph-overlay demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-overlay</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>androidOverlay<span class="token punctuation">"</span></span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closeAndroidOverlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-overlay</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-button</span> <span class="token attr-name">filled</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openAndroidOverlay()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Overlay<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p align="center">\n    <img src="/images/overlay-android-demo.gif" alt="morph sidebar demo image">\n  </p>\n<h2 id="attributes"><a href="#attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Attributes</h2>\n<table>\n<thead>\n<tr>\n<th align="center">Custom Attribute</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n<th align="center">Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><strong><code class="language-text">platform</code></strong></td>\n<td align="center">String</td>\n<td align="center">Name of the platform, get assigned\n<br>\n automatically by the morph element.</td>\n<td align="center">Either \n<strong><code class="language-text">andorid</code></strong>\n or \n<strong><code class="language-text">ios</code></strong></td>\n</tr>\n<tr>\n<td align="center"><strong><code class="language-text">open</code></strong></td>\n<td align="center">Boolean</td>\n<td align="center">Shows the state of the element,\n<br>\n if it is open or not.</td>\n<td align="center"><strong><code class="language-text">false</code></strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="styling"><a href="#styling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styling</h2>\n<p>-For Android platform;</p>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--android-background-color</code></td>\n<td>Background color of overlay</td>\n<td>rgba(0,0,0,0.2)</td>\n</tr>\n</tbody>\n</table>\n<p>-For IOS platform;</p>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--ios-background-color</code></td>\n<td>Background color of overlay</td>\n<td>rgba(0,0,0,0)</td>\n</tr>\n</tbody>\n</table>\n<h2 id="further-help"><a href="#further-help" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further help</h2>\n<p>For more information on how to install and run test please go here - <a href="https://github.com/moduware/polymorph-components/blob/master/INFO.md">Polymorph elements getting started</a></p>',timeToRead:2,excerpt:"  Overlay that morphs for current mobile OS Getting Started For the information about how to clone the desired repository, running the local…",frontmatter:{title:"morph-overlay",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"Polymorph Components",entries:[{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_button.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-button"},frontmatter:{title:"morph-button"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_pages.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-pages"},frontmatter:{title:"morph-pages"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_overlay.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-overlay"},frontmatter:{title:"morph-overlay"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-view"},frontmatter:{title:"morph-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_swipeout.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-swipeout"},frontmatter:{title:"morph-swipeout"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_ripple.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-ripple"},frontmatter:{title:"morph-ripple"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar"},frontmatter:{title:"morph-tabbar"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar-item"},frontmatter:{title:"morph-tabbar-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view"},frontmatter:{title:"morph-list-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-item"},frontmatter:{title:"morph-list-view-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_title.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-title"},frontmatter:{title:"morph-list-view-title"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_divider.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-divider"},frontmatter:{title:"morph-list-view-divider"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_sidebar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-sidebar"},frontmatter:{title:"morph-sidebar"}}}}]}]}},pathContext:{slug:"/morph-overlay"}}}});
//# sourceMappingURL=path---morph-overlay-d5673d05536a97c24109.js.map