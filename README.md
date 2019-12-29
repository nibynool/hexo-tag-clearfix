# Hexo Tag: Clearfix

## What is it?

A tag interpreter for [Hexo](https://hexo.io) static site generator to add a `{% clearfix %}` template tag to force
content to clear `float` elements.

## Why does it exist?

I use the `float` CSS property to align images in my blog and have had the need to ensure that content from consecutive
paragraphs is positioned after these floated elements.  As I have enforced the exclusion of HTML in my Markdown
validation I have created a tag to enable me to add this functionality.

## Installation

1. Run `npm i @nibynool\hexo-tag-clearfix` in your Hexo directory

## Usage

1. Add `{% clearfix %}` in your post (after floated elements) when you want to force content to appear below the floated
   element.
