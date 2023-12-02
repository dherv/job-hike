const bcrypt = require("bcrypt");

module.exports = () => {
  return {
    user: [
      {
        id: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "User",
        email: "user@nextmail.com",
        password: bcrypt.hashSync("123456", 10),
      },
    ],
    jobs: [
      {
        id: "1",
        title: "Software Engineer",
        companyId: "101",
        description:
          "Seeking a skilled software engineer for exciting projects.",
        applicationDate: new Date("2023-01-15"),
        applicationMethod: "online",
        contactInformation: "John Doe, HR Manager",
        applicationStatus: "pending",
        notes: "Follow up after the interview.",
        url: "https://example.com/job1",
        source: "LinkedIn",
      },
    ],
    companies: [
      {
        id: "101",
        name: "Tech Co",
        website: "https://techco.example.com",
      },
    ],
  };
};
