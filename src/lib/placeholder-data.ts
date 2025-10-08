
import { PlaceHolderImages } from './placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(p => p.id === id)?.imageUrl || '';

export const employees = [
  {
    id: "EMP001",
    name: "Alisha Sharma",
    avatar: getImg("emp1-avatar"),
    email: "alisha.sharma@synergyhr.io",
    department: "Engineering",
    role: "Senior Frontend Developer",
    status: "Active",
    joiningDate: "2021-08-15",
    salary: 150000,
  },
  {
    id: "EMP002",
    name: "Rohan Verma",
    avatar: getImg("emp2-avatar"),
    email: "rohan.verma@synergyhr.io",
    department: "Sales",
    role: "Sales Manager",
    status: "Active",
    joiningDate: "2020-02-20",
    salary: 180000,
  },
  {
    id: "EMP003",
    name: "Priya Singh",
    avatar: getImg("emp3-avatar"),
    email: "priya.singh@synergyhr.io",
    department: "Marketing",
    role: "Digital Marketing Specialist",
    status: "On Leave",
    joiningDate: "2022-06-10",
    salary: 95000,
  },
  {
    id: "EMP004",
    name: "Amit Patel",
    avatar: getImg("emp4-avatar"),
    email: "amit.patel@synergyhr.io",
    department: "Engineering",
    role: "Backend Developer",
    status: "Active",
    joiningDate: "2023-01-05",
    salary: 120000,
  },
  {
    id: "EMP005",
    name: "Sunita Gupta",
    avatar: getImg("emp5-avatar"),
    email: "sunita.gupta@synergyhr.io",
    department: "HR",
    role: "HR Manager",
    status: "Active",
    joiningDate: "2019-11-11",
    salary: 160000,
  },
];

export const leaveRequests = [
    { name: "Olivia Martin", avatar: getImg("leave-avatar-1"), leaveType: "Sick Leave", days: 1, status: "Pending" },
    { name: "Jackson Lee", avatar: getImg("leave-avatar-2"), leaveType: "Vacation", days: 5, status: "Approved" },
    { name: "Isabella Nguyen", avatar: getImg("leave-avatar-3"), leaveType: "Personal", days: 2, status: "Pending" },
    { name: "William Kim", avatar: getImg("leave-avatar-4"), leaveType: "Vacation", days: 10, status: "Rejected" },
];

export type EmployeePersonalInfo = typeof employeeDetailData.personalInfo;
export type EmployeeWorkExperience = typeof employeeDetailData.workExperience[0];
export type EmployeeEducation = typeof employeeDetailData.education[0];
export type EmployeeProject = typeof employeeDetailData.projects[0];
export type EmployeeSkill = typeof employeeDetailData.skills[0];
export type EmployeeBankDetails = typeof employeeDetailData.bankDetails;
export type EmployeeAccessInfo = typeof employeeDetailData.accessInfo;

export const employeeDetailData = {
  personalInfo: {
    name: "Ethan Mitchell",
    role: "Web Designer",
    avatar: getImg("user-avatar"),
    employeeId: "MS-0001",
    dateOfHire: "2024-06-18",
    email: "join.walk@example.com",
    phone: "+1 (000) 123-4567",
    birthday: "1993-12-18",
    gender: "Male",
    address: "123 Fort, Lantana, Florida, 33414, United States",
    socials: [
        { name: "twitter", url: "#" },
        { name: "linkedin", url: "#" },
        { name: "github", url: "#" },
        { name: "dribbble", url: "#" },
    ]
  },
  workExperience: [
    {
      role: "Senior Product Designer",
      company: "Tech Vision LLC",
      duration: "2021 - Present",
      description: "Led client project design, built design systems, and boosted user retention 22% through research-driven solutions.",
      skills: ["Graphic Design", "Prototyping", "Research"],
    },
    {
      role: "Product Designer",
      company: "Digital Solutions LLC",
      duration: "2018 - 2021",
      description: "Designed fintech & healthcare web apps, creating wireframes & prototypes while leading usability testing, boosting feasibility.",
       skills: ["Web Design", "Mobile Apps", "User Testing"],
    },
    {
      role: "Junior Designer",
      company: "Creative Studio",
      duration: "2016 - 2018",
      description: "Assisted senior designers with projects, created marketing materials, and developed branding concepts for small businesses.",
       skills: ["Graphic Design", "Branding", "Marketing"],
    },
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      duration: "2014 - 2016",
      details: "Specialization in 'Human-Computer Interaction (HCI)' & 'Natural Language Processing'.",
      courses: ["Smart specs", "Master's thesis"],
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      duration: "2011 - 2014",
      details: "Focused on user experience (UX) design, system architecture, and advanced software optimization system.",
      courses: ["UX/UI", "Web/Mobile", "Software/System"],
    },
  ],
  projects: [
    {
      id: "PROJ-1001",
      name: "E-commerce Platform",
      teamLeader: { name: "John Smith", avatar: getImg("emp2-avatar") },
      team: [{ name: 'A', avatar: getImg("emp1-avatar")}, { name: 'B', avatar: getImg("emp3-avatar")}, { name: 'C', avatar: getImg("emp4-avatar")}],
      deadline: "17 Apr 2025",
      priority: "High"
    },
    {
      id: "PROJ-1002",
      name: "Customer Mobile App Design",
      teamLeader: { name: "Sarah Johnson", avatar: getImg("emp1-avatar") },
      team: [{ name: 'A', avatar: getImg("emp2-avatar")}, { name: 'B', avatar: getImg("emp3-avatar")}],
      deadline: "25 Aug 2025",
      priority: "Medium"
    },
     {
      id: "PROJ-1003",
      name: "Admin Dashboard",
      teamLeader: { name: "Michael Chen", avatar: getImg("emp4-avatar") },
      team: [{ name: 'A', avatar: getImg("emp2-avatar")}, { name: 'B', avatar: getImg("emp5-avatar")}, { name: 'C', avatar: getImg("emp1-avatar")}],
      deadline: "01 Aug 2025",
      priority: "Low"
    },
  ],
  skills: [
    { name: "Figma", level: "Expert", progress: 95 },
    { name: "HTML", level: "Expert", progress: 98 },
    { name: "CSS", level: "Advanced", progress: 85 },
    { name: "WordPress", level: "Advanced", progress: 92 },
    { name: "JavaScript", level: "Intermediate", progress: 78 },
  ],
  bankDetails: {
    accountHolder: "Ethan Mitchell",
    accountNumber: "**** **** 1234",
    bankName: "ABC Bank",
    branchLocation: "New York, USA",
    ifscCode: "ABC12345",
    routingNumber: "123456789",
  },
  accessInfo: {
    username: "ethan.mitchell",
    email: "ethan.mitchell@example.com",
    lastLogin: "Yesterday, 2:45 PM",
    accountStatus: "Active",
    apiAccess: true,
    mfaEnabled: false,
  }
};

export const payslipData = {
    id: "PAYSLIP-001",
    employee: {
        name: "Alisha Sharma",
        id: "EMP001",
        department: "Engineering",
        designation: "Senior Frontend Developer",
        joiningDate: "15 Aug 2021",
        panNumber: "ABCDE1234F",
    },
    payPeriod: "July 2024",
    payDate: "31 July 2024",
    earnings: [
        { description: "Basic Salary", amount: 120000 },
        { description: "House Rent Allowance", amount: 20000 },
        { description: "Conveyance Allowance", amount: 10000 },
    ],
    deductions: [
        { description: "Income Tax", amount: 15000 },
        { description: "Provident Fund", amount: 8000 },
    ],
    leaveSummary: [
        { type: "Casual Leave", opening: 10, availed: 2, closing: 8 },
        { type: "Sick Leave", opening: 12, availed: 1, closing: 11 },
        { type: "Earned Leave", opening: 15, availed: 5, closing: 10 },
    ],
    paymentDetails: {
        bankName: "HDFC Bank",
        accountNumber: "XXXX XXXX 1234",
        paymentMode: "Bank Transfer",
    },
};
