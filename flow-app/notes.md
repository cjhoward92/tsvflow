### index.jsx

When using document.getElementById there is no way to cast away the `null` value. You just need to do a null check.

### flow-typed

Installs types in project. Kind of cool, let's you alter types for your project without needing another type definition and enforces the same types across installs. Didn't like it at first, but I think I do from a management perspective.

Although, does not have the most recent redux types...

### VS Code

Could not get it to work with flow tooling on Windows at all... Super hard to make it work.

Wait... it's working magically now.


### exact types

I wanted to use exact types on my reducer state, but I couldn't do that _and_ apread my state into a new object.