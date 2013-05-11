jQuery.IME
==========================

jQuery.IME is a jQuery based input method editor library supporting more than
155 input methods across more than 50 languages.

These input methods are well tested. Initially the input methods were
contributed by the Wikimedia community. By now many input methods have also
been contributed by Red Hat.

This project is a Wikimedia foundation initiative to provide language technology
tools to  awider audience outside the Wikimedia universe.


Quick start
----------

```bash
git clone https://github.com/wikimedia/jquery.ime.git
```

To add input method support to the editable fields of a web page:

```javascript
$( 'textarea' ).ime();
```

jquery.ime provides a jquery plugin function `$.fn.ime()` to add input method
support for any editable elements in a page.


Example
-------
See [an example](http://thottingal.in/projects/js/jquery.ime/examples/) page where jquery.ime in action.

To try the example locally, after checking out the code, start a local webserver
to serve the files. This is very easy.

If you have python installed, run
```bash
python -m SimpleHTTPServer
```
or, In case you have python3
```bash
python3 -m http.server
```

Alternatively you can use tools like webfsd. If you know how to use advanced
web servers like apache or nginx, you already know how to put the code in a
webserver.


For Developers
--------------

Read [rules/README](https://github.com/wikimedia/jquery.ime/tree/master/rules) to learn how to write an input method for a language.

Read [test/README.md](https://github.com/wikimedia/jquery.ime/tree/master/test) to learn how to write and run tests for an input method.

Read the technical specification of the project from [wiki](https://github.com/wikimedia/jquery.ime/wiki/Technical-Specification).

Do watch the code walkthrough by Chris Forno: http://www.youtube.com/watch?v=LPec-KIBVeI

License
-------
This project is dual licensed with GPLv2+ and MIT license. See the license files
in the source code for more details.
