const faker = require("@faker-js/faker").faker;
const mongoose = require("mongoose");
require("../config/db.config");

const User = require("../models/user.model");
const Patient = require("../models/patient.model");
const Comment = require("../models/comment.model");

mongoose.connection
  .dropDatabase()
  .then(() => {
    User.create([
      {
        name: "Admin",
        email: "admin@example.com",
        password: "12345678",
        phoneNumber: "+34615341624",
        admin: true,
      },
      {
        name: "User One",
        email: "user1@example.com",
        password: "12345678",
        phoneNumber: "+34615341625",
        admin: false,
      },
      {
        name: "User Two",
        email: "user2@example.com",
        password: "12345678",
        phoneNumber: "+34615341626",
        admin: false,
      },
    ])
      .then((users) => {
        console.log("users created");

        for (let i = 0; i < 100; i++) {
          Patient.create({
            name: faker.person.fullName(),
            address: faker.location.streetAddress(true),
            phoneNumber: faker.phone.number("+346########"),
            description: faker.lorem.paragraph(3),
            birth: faker.date.birthdate(),
            email: faker.internet.email(),
            user: users[Math.floor(Math.random() * users.length)]._id,
          })
            .then((patient) => {
              console.log(`patient "${patient.name}" created`);

              for (let j = 0; j < 10; j++) {
                Comment.create({
                  text: faker.lorem.paragraph(3),
                  author: patient.user,
                  patient: patient._id,
                })
                  .then((comment) => {
                    console.log(`comment "${comment.text}" created`);
                  })
                  .catch(console.error);
              }
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  })
  .catch(console.error);
