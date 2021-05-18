---
title: "Markdown Syntax Guide"
description: "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
---

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# Heading H1

## Heading H2

### Heading H3

#### Heading H4

##### Heading H5

###### Heading H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Code block with backticks

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

---

Hugo has `figure` shortcode built-in, so you can easily add figure captions or hyperlink rel attributes to images. Documentations can be found here:

https://gohugo.io/content-management/shortcodes/#figure

This theme has 3 CSS classes made for figure elements:

- `big`: images will break the width limit of main content area.
- `left`: images will float to the left.
- `right`: images will float to the right.

If a figure has no class set, the image will behave just like a normal markdown image: `![]()`.

Here are some examples; please be aware that these styles only take effect when the page width is over 1300px.

{{< figure src="https://via.placeholder.com/1600x800" alt="image" caption="figure-normal (without any classes)" >}}

Pellentesque posuere sem nec nunc varius, id hendrerit arcu consequat. Maecenas commodo, sapien ut gravida porttitor, dolor risus facilisis enim, eget pharetra nibh nisl porttitor sapien. Proin finibus elementum ligula sit amet hendrerit. Praesent et erat sodales ante accumsan pharetra non eu nulla. Sed vehicula consequat lorem, a fermentum ante faucibus quis. Aliquam erat volutpat. In vitae tincidunt dui. Proin sit amet ligula sodales, elementum tortor et, venenatis sem. Maecenas non nisl erat. Curabitur nec velit eros. Ut cursus lacus nisi, non pretium libero euismod et. Fusce luctus in nisi quis sollicitudin. Aenean nec blandit ligula. Duis ac felis lorem. Proin tellus tellus, dictum nec tempus sit amet, venenatis ac felis. Sed in pharetra nulla, non mollis sem.

{{< figure src="https://via.placeholder.com/1600x800" alt="image" caption="figure-big" >}}

Suspendisse fringilla malesuada massa, in malesuada orci lacinia a. Praesent dapibus faucibus nisl, id volutpat elit bibendum eu. Nulla vitae laoreet nibh, eu hendrerit lacus. Donec lacinia auctor ligula, vel interdum ipsum malesuada vitae. Donec placerat a justo eu gravida. Aenean ultricies imperdiet convallis. Pellentesque accumsan non ex sed euismod. Proin bibendum lectus nec enim faucibus feugiat. Donec hendrerit nisi viverra ornare luctus. Nullam non viverra nisl. Nam vel tellus et tortor elementum volutpat sit amet et erat. Aliquam a libero quis libero porta consectetur. Etiam aliquam felis vel nulla mattis finibus. Mauris laoreet lacus arcu, sed rhoncus odio condimentum sed. Aenean in dui rutrum elit faucibus faucibus nec fringilla augue. Fusce non ornare mauris.

{{< figure src="https://via.placeholder.com/400x280" alt="image" caption="figure-left" >}}

In a libero varius, luctus ligula et, bibendum tortor. Sed sit amet dui malesuada, mattis justo id, ultricies enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam sollicitudin cursus feugiat. Vivamus suscipit ipsum eget lobortis sollicitudin. Fusce vehicula neque tellus. Integer eu posuere quam, id laoreet tortor. Mauris sit amet turpis urna. Donec venenatis tempor dolor, nec laoreet orci aliquet et. Sed condimentum elit eu tristique aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc luctus ipsum sit amet nisl maximus pellentesque.

{{< figure src="https://via.placeholder.com/400x280" alt="image" caption="figure-right" >}}

Pellentesque eu consequat nunc. Vivamus eu eros ut nulla dapibus molestie in id tortor. Cras viverra ligula erat, tincidunt hendrerit diam blandit nec. Cras id urna vel dolor dictum mattis. Vestibulum congue erat ac eros molestie accumsan. Maecenas lorem nibh, maximus vel justo eget, facilisis egestas lectus. Mauris eu est ut odio blandit consequat id feugiat eros. Fusce id suscipit mi, et lacinia lectus. Mauris a arcu placerat dolor iaculis feugiat nec non mi. Ut porttitor elit tortor, eget tempus velit mollis eu. Aliquam sem nulla, dictum cursus mauris ac, semper ullamcorper leo.

Donec nec tincidunt est. Sed id metus in erat fringilla mattis at id turpis. Aliquam tempor vehicula faucibus. Phasellus consequat aliquam odio. Morbi a ex vitae sapien porta auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet nulla arcu. Praesent ut tortor purus. Praesent id eros diam. Pellentesque vitae dolor at nibh ultrices accumsan eu id urna. Aliquam finibus interdum orci in varius. Pellentesque a enim condimentum, condimentum felis id, vehicula augue. Vivamus cursus commodo eros nec lacinia.

---

Hugo ships with several [Built-in Shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes) for rich content, along with a [Privacy Config](https://gohugo.io/about/hugo-and-gdpr/) and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.

## YouTube Privacy Enhanced Shortcode

{{< youtube ZJthWmvUzzc >}}

<br>

---

## Twitter Simple Shortcode

{{< twitter_simple 1085870671291310081 >}}

<br>

---

## Vimeo Simple Shortcode

{{< vimeo_simple 48912912 >}}

---

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::
