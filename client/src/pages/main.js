import React from "react";
import { Switch, Route } from 'react-router-dom'
import Books from "./Books";
import Library from "./Library";

export default function main() {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/library" component={Library} />
    </Switch>
  )
}