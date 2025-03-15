# Class and Style Bindings

A common need for data binding is manipulating an element's class list and inline styles. Since class and style are both attributes, we can use v-bind to assign them a string value dynamically, much like with other attributes. However, trying to generate those values using string concatenation can be annoying and error-prone. For this reason, Vue provides special enhancements when v-bind is used with class and style. In addition to strings, the expressions can also evaluate to objects or arrays.
