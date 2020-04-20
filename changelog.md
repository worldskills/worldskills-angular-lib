# Chaangelog

## 7.8.0

* session key `returnUrl` is now populated by the `AppAuthGuard` when a user tries to access a route while not logged in. this gives the app an oppertunity to act on this `returnUrl` if that app chooses to.

## 7.7.0

* Introduced weigted voting Interface.

## 7.6.0

* The vote control is now modular.
* The poll results graph is now available as a seperate component.
* The standard poll mechanism is now available as a seperte component.

## 7.5.0

* Added a generic AppAuthGuard

## 7.4.0

* Introduced `forFn` method to allow for optional configuration.
* NOTE: the `forConfig` method will be falling away in the future.

## 7.3.0

* Added unvote feature to the vote control.

## 7.2.0

* Introduced the poll service and related models.

## 7.1.0

* Introduced the vote-control and related models.

## 7.0.0

* Simplified the service config.

## 6.0.0

* Rework of the footer component.
* Footer now has 6 columns that ng-templates can be injected into.
* The first and last columns have  default templates that can be overriden.
* The columns inbetween are blank by default
