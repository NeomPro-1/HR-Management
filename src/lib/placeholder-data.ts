
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
