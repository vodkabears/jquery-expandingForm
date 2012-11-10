#jQuery-expandingForm

Expanding form plugin for jquery.

## Using

```html
<script type="text/javascript">    	
	$(selector).expandingForm(options);
</script>
```

## Options

{
	from: ['top' | 'down']
}
By default direction of expansion is from top to down.

Don't forget to place elements in the right order!

From top: 
```html
<form>
	<input type="text" placeholder="Step 1" />
	<input type="text" placeholder="Step 2" />
	<input type="text" placeholder="Step 3" />
	<input type="submit" value="Confirm" />
</form>
```
From down:
```html
<form>
	<input type="submit" value="Confirm" />
	<input type="text" placeholder="Step 3" />
	<input type="text" placeholder="Step 2" />
	<input type="text" placeholder="Step 1" />
</form>
```

## Wrapper

Your default form:
```html
<form>
	<input type="text" placeholder="Step 1" />
	<input type="text" placeholder="Step 2" />
	<input type="text" placeholder="Step 3" />
	<input type="submit" value="Confirm" />
</form>
```

Wrapped form after using the plugin:
```html
<form class="exp_form">
	<div class="exp_form-row">
		<input type="text" placeholder="Step 1" />
	</div>
	<div class="exp_form-row hidden">
		<input type="text" placeholder="Step 2" />
	</div>
	<div class="exp_form-row hidden">
		<input type="text" placeholder="Step 3" />
	</div>
	<div class="exp_form-row hidden">
		<input type="submit" value="Confirm" />
	</div>
</form>
```

## Example

[Demo](http://jsfiddle.net/dfrost/EGH6G/)
