describe('Restful Booker API Tests', () => {

  const baseUrl = 'https://restful-booker.herokuapp.com'


  it('should return booking IDs', () => {

    cy.request('GET', `${baseUrl}/booking`)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')

      })

  })


  it('should create a new booking', () => {

    const booking = {

      firstname: "Pedro",
      lastname: "Tester",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-01-01",
        checkout: "2024-01-05"
      },
      additionalneeds: "Breakfast"

    }

    cy.request('POST', `${baseUrl}/booking`, booking)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.booking.firstname).to.eq('Pedro')

        const bookingId = response.body.bookingid

        cy.request('GET', `${baseUrl}/booking/${bookingId}`)
          .then((getResponse) => {

            expect(getResponse.status).to.eq(200)
            expect(getResponse.body.firstname).to.eq('Pedro')

          })

      })

  })


  it('should retrieve a booking by id', () => {

    cy.request('GET', `${baseUrl}/booking/1`)
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('firstname')

      })

  })

})