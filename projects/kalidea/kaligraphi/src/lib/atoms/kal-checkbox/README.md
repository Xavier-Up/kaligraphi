# Unit Tests

## Testing disable property
* should toggle the `disabled` state
* should add and remove `disabled` state
* should not toggle `checked` state upon interation while disabled
* should generate a unique id for the checkbox input if no id is set

## Testing provided properties
* should use the provided `aria-label`
* should not set the `aria-label` attribute if no value is provided
* should use the provided `aria-labelledby`
* should not assign `aria-labelledby` if none is provided
* should preserve any given `tabIndex`
* should preserve given `tabIndex` when the checkbox is disabled then enabled
* should not add the `name` attribute if it is not passed in
* should not add the `value` attribute if it is not passed in

## Other
* should toggle `checked` state on click
* should coerce the given value to a boolean value
