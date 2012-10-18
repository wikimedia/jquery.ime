JQuery IME
==========================

jQuery Input method editor library supporting 50+ input methods across several languages. 
This is jquery version of the input method tool used in Wikimedia projects. 
These input methods are well tested and contributed by large wikimedia community.
This project is a Wikimedia foundation initiative to provide language technology tools to wider audience outside Wikimedia universe.


Quick start
----------

```bash
git clone https://github.com/wikimedia/jquery.ime.git
```

To add input method support to the editable fields of a web page:

```javascript
$( 'textarea' ).ime();
```

jquery.ime provides a jquery plugin function `$.fn.ime()` to add input method support for any editable elements in a page.


See [an example](http://thottingal.in/projects/js/jquery.ime/examples/) page where jquery.ime in action


For Developers
--------------
Read [rules/README](https://github.com/wikimedia/jquery.ime/tree/master/rules) to learn how to write an input method for language.

Read the technical specification of project from [wiki](https://github.com/wikimedia/jquery.ime/wiki/Technical-Specification)

License
-------
This project is dual licensed with GPLv2+ and MIT license. See the license files in the source code for more details.
