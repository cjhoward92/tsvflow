### index.jsx

When using document.getElementById there is no way to cast away the `null` value. You just need to do a null check.

### flow-typed

Installs types in project. Kind of cool, let's you alter types for your project without needing another type definition and enforces the same types across installs. Didn't like it at first, but I think I do from a management perspective.

Although, does not have the most recent redux types...

`flow-typed` is also it's own package, that they recommend you install globally. Why can't the types just be part of the flow-typed namespace, like TypeScripts `@types`?

I had trouble with flow finding installed flow-typed definitions. It was a real pain for me. Specifically MapStateToProps and MapDispatchToProps. It will NOT find react-redux no matter what I try...

Turns out `react-redux` v5 in flow-typed did not export `MapStateToProps` or `MapDispatchToProps`... SO I did that. Which was easy enough. But even Typescript has weird package oddities.

### VS Code

Could not get it to work with flow tooling on Windows at all... Super hard to make it work.

Wait... it's working magically now.

Windows development is painful...

### exact types

I wanted to use exact types on my reducer state, but I couldn't do that _and_ apread my state into a new object.

### Weird errors when trying to run flow

Sometimes Flow does this:

```
PS F:\Development\tsvflow\flow-app> yarn flow
yarn run v1.7.0
$ flow
The flow server is not responding (0 retries remaining): /
Out of retries, exiting!
error Command failed with exit code 7.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

When you just want to check your types... that's fun. Why wouldn't you spin up a server that craps itself from time to time when you just want to type check?

I have had this problem for a while as I was writing this test project... It has not gone away in a couple hours.

There were a few times when writing this where I could just not get flow to type check anymore, due to the server being weird.

### Polymorphic types

Flow has polymorphic generic types with the `<*>` syntac (e.g. `Dispatch<*>`) that allows you to basically infer the type assuming the structure of the real type being used matches that of the required signatures...

For instance, redux actions. They are many, and very different from action to action. Polymorphic types allow Flow to type dispatches without you needing to do a bunch of work. Which is kind of nice. I just don't know how well it actually works. It also doesn't allow the developer to infer much, as it is effectively a wildcard.

### No transpiler (sort of) so no free features

TypeScript gives you things like `async/await`, `decorators`, `object spreading` and other things for free. Flow does no such thing. So if I want to spread and object or array, I need some babel magic to make that happen. Something like `babel-preset-stage-0` is required.

Also, ther doesn't seem to be a good flow loader, like `ts-loader` that can notify you when webpack recompiles (such as with a watcher). Even if there was one with more than 50 stars on github, I would be skeptical as Flow can take a looooong time to recompile.
