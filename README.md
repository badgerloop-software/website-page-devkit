# Badgerloop Website Development

### Non-Git (Just want to learn / play around)

Find the button that says *Clone or download*  
and click *Download ZIP*. Unzip the folder and begin editing [index.html](index.html)  
between `<!-- YOUR CONTENT BEGIN -->` and `<!-- YOUR CONTENT END -->`.  

It's that simple!

### Git (Want to know how to publish my work to GitHub)

**WARNING: You will need a GitHub account and to be a part of the  
badgerloop-software GitHub organization first, contact Vaughn Kottler  
for help**

Make a new folder somewhere (i.e. called `website-template`), open a terminal or **Git Bash**  
window here and run the following commands:  
```
git init
git remote add origin https://github.com/badgerloop-software/website-page-devkit.git
git fetch
git pull origin master
```  
Depending on which page you're working on, you'll need to checkout a different branch from here.  
Examples:  
```
git checkout main
git checkout contact
git checkout pod
git checkout media
...
```
To see all branches, view the [branches](https://github.com/badgerloop-software/website-page-devkit/branches) tab.  
Once you have the right branch checked out (see what branch you're  
currently on using `git branch`) you can start making changes!
When you're at a logical stopping point and would like to submit  
your changes run the following commands:
```
git add -A
git commit -m "describe_changes_in_your_words"
git push origin your_current_branch
```
Once this command goes through, you should be able to see your updates on GitHub!

### Recommended Text Editors

* [Atom](https://atom.io/)
* [Sublime](https://www.sublimetext.com/)
* [Notepad++](https://notepad-plus-plus.org/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Files

Important files are [main.css](main.css) where you can add your own styling and  
[page.js](page.js) where you can utilize [Angular.js](https://docs.angularjs.org/guide) and your own Javascript to  
incorporate some functionality that requires programming. If you would like  
to learn Angular, I would suggest [this free course](https://www.codeschool.com/pages/angular-1-vs-2).

If you want to see how the navbar and footer were made, check out the files in the [js](js) folder.

## Design

For fancy design elements check out [Angular Material](https://material.angularjs.org/1.1.1/), which will also be  
available to you! Definitely check out the **DEMOS** section.

You can add your own CSS styling to [main.css](main.css), or do it within [index.html](index.html).

## What should my page look like?

We came up with a lot of great ideas already. The notes from  
the meeting can be viewed in [site.jpg](site.jpg) and [notes.jpg](notes.jpg)!

## Help

If you have any further questions contact Vaughn Kottler on the Badgerloop Slack or via email at [vkottler@wisc.edu](vkottler@wisc.edu).

