import React from 'react'
import Books from './Books'
import Library from './Library'
import { Switch, Route } from 'react-router-dom'

export default function main() {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/library" component={Library} />
    </Switch>
  )
}
