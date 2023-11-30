import { Job } from "../../database/custom/states/job";

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    companyId: "101",
    company: {
      id: "101",
      name: "Tech Co",
    },
    description: "Seeking a skilled software engineer for exciting projects.",
    applicationDate: new Date("2023-01-15"),
    applicationMethod: "online",
    contactInformation: "John Doe, HR Manager",
    applicationStatus: "pending",
    notes: "Follow up after the interview.",
    url: "https://example.com/job1",
    source: "LinkedIn",
  },
  {
    id: "2",
    title: "Marketing Specialist",
    companyId: "102",
    company: {
      id: "102",
      name: "Marketing Agency",
    },
    description:
      "Looking for a creative marketing specialist to join our team.",
    applicationDate: new Date("2023-01-20"),
    applicationMethod: "email",
    contactInformation: "Jane Smith, Marketing Director",
    applicationStatus: "rejected",
    notes: "Sent a thank-you email.",
    url: "https://example.com/job2",
    source: "Job Board",
  },
  {
    id: "3",
    title: "Frontend Developer",
    companyId: "103",
    company: {
      id: "103",
      name: "Web Tech Solutions",
    },
    description:
      "Join our team to work on innovative and user-friendly web applications.",
    applicationDate: new Date("2023-02-10"),
    applicationMethod: "online",
    contactInformation: "Amy Johnson, Lead Developer",
    applicationStatus: "in-progress",
    notes: "Prepare for technical assessment during the interview.",
    url: "https://example.com/job3",
    source: "Company Website",
  },
  {
    id: "4",
    title: "Full Stack Developer",
    companyId: "104",
    company: {
      id: "104",
      name: "Cloud Innovations",
    },
    description:
      "Seeking a versatile full-stack developer to contribute to our cloud-based projects.",
    applicationDate: new Date("2023-02-15"),
    applicationMethod: "online",
    contactInformation: "Mark Davis, Hiring Manager",
    applicationStatus: "pending",
    notes: "Research recent projects by Cloud Innovations for the interview.",
    url: "https://example.com/job4",
    source: "LinkedIn",
  },
  {
    id: "5",
    title: "Frontend/UI Designer",
    companyId: "105",
    company: {
      id: "105",
      name: "Creative Designs Inc.",
    },
    description:
      "Join our design team to create visually stunning and intuitive user interfaces.",
    applicationDate: new Date("2023-02-20"),
    applicationMethod: "email",
    contactInformation: "Sarah Thompson, Design Lead",
    applicationStatus: "rejected",
    notes: "Sent a follow-up email expressing continued interest.",
    url: "https://example.com/job5",
    source: "Job Board",
  },
];

export default mockJobs;
