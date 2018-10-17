# Unit Tests

## Testing disable property
* should add and remove `disabled` state
* should toggle the `disabled` state (with form control)
* should not toggle `checked` state upon interaction while disabled
* should generate a unique id for the checkbox input if no id is set

## Testing provided properties
* should not add the `name` attribute if it is not passed in
* should not add the `value` attribute if it is not passed in

## Other
* should toggle `checked` state on click
* should coerce the given value to a boolean value
