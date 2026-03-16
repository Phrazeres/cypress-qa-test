# Cypress QA Automation Project

Automated test suite built with Cypress to validate core user flows and API functionality. The project demonstrates end-to-end testing, API testing, and basic test organization following common QA automation practices.

## Tech Stack

- Node.js
- Cypress

## Project Structure

```

cypress-qa-test
├─ cypress
│  ├─ e2e
│  │  ├─ saucedemo.cy.js
│  │  └─ api.cy.js
│  ├─ fixtures
│  └─ support
├─ cypress.config.js
├─ package.json
└─ README.md

```

## Test Scenarios

### E2E Tests – SauceDemo

Target application: https://www.saucedemo.com

Covered flows:

**1. Successful Login**
- Navigate to login page
- Enter valid credentials
- Validate redirect to inventory page

**2. Add Product to Cart**
- Login
- Add product to cart
- Validate cart badge update
- Validate product appears in cart

**3. Complete Checkout Flow**
- Add product to cart
- Open cart
- Complete checkout form
- Confirm successful order message

### API Tests – Restful Booker

API: https://restful-booker.herokuapp.com

Covered endpoints:

**1. Retrieve Booking List**
- GET `/booking`
- Validate status 200
- Validate response format

**2. Create Booking**
- POST `/booking`
- Validate response status
- Validate booking data returned

**3. Retrieve Booking by ID**
- GET `/booking/{id}`
- Validate booking exists

## Installation

Clone the repository:

```

git clone [https://github.com/Phrazeres/cypress-qa-test.git](https://github.com/Phrazeres/cypress-qa-test.git)

```

Navigate to the project:

```

cd cypress-qa-test

```

Install dependencies:

```

npm install

```

## Running Tests

Open Cypress Test Runner:

```

npx cypress open

```

Run tests in headless mode:

```

npx cypress run

```

## Notes

The project demonstrates:
- Cypress E2E test structure
- Basic UI interaction and assertions
- API testing using `cy.request`
- Reusable login setup using `beforeEach`
```
