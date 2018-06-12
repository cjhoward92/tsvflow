# Differences between Flow and TypeScript

You can find a good writup [here](https://github.com/niieani/typescript-vs-flowtype)

## Goals of each system

Flow wants to be as precise as possible, focusing on a strict type system that is provable.

TypeScript wants to strike a balance between type safety and productivity.

Both want the output to be clean, idiomatic, JavaScript.

## Speed of type checking

TypeScripts seems to degrade at a relatively linear pace as the project grows.

Flow seems to get ungodly slow as the project grows, and if you need to restart the flow-bin server good luck.

This is subjective, but what I have gleaned from experiences thus far.

Although, TypeScript took 4.5 seconds to run `tsc` on my base app, with or without `node_modules`e excluded. Flow, on the other hand, took about 4 seconds with `node_modules` excluded and 40 seconds without `node_modules` excluded... Why it checks all of the `node_modules` is beyond me.

## Nominal vs Structural typing

It seems that TypeScript is completely structurally typed, while Flow is structurally typed other than classes, which are nominally typed.