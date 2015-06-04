# README #

# `trans-nav` Angular Directive #

This directive simulates the behavior of [Bootstrap's Agency Template](http://startbootstrap.com/template-overviews/agency/)'s header/navbar.
It needs [AngularJS](https://angularjs.org/) and [jQuery](https://jquery.com/) to work.
Works best when nav is fixed to the top of the page (using [Bootstrap](http://getbootstrap.com/)'s `navbar` `navbar-default` and `navbar-fixed-top` classes ).

## Usage ##
You can use it on any navigation bar -- be it a `nav`, a `section`, a `div`, etc.

**Example**:

```html
	<nav trans-nav nav-target="#inner-div" nav-active="nb-shrink" class="navbar navbar-default navbar-fixed-top">
		<!-- Content -->
	</nav>
```

### Parameters ###
* `nav-target`

	Name of the element that will trigger the transition.

* `nav-active`

	Name of the class that contains the dimensions of the `nav` for when the `nav` is active.
	
	**Example**:
	
	*HTML*
	
```html
	<nav trans-nav nav-active="nb-shrink" class="navbar navbar-default navbar-fixed-top">
		<!-- Content... -->
	</nav>
```
	*CSS*
	
```css
	nb-default.nb-shrink {
		padding: 5px 0;
	}
```
	
#### Notes ####
In order for this to work, the class where the active class is chained to (in this case `nb-default`)
should have transitions defined.
	
**Example**:

```css
	nb-default {
		padding: 25px 0;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		transition: all .3s;
	}
```