
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User, GraduationCap, Book, Bell, Calendar, Phone, Mail, MapPin } from "lucide-react";

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const courses = [
    { code: "CSE203", title: "Object Oriented Programming", credits: 3, instructor: "Dr. Amina Hassan" },
    { code: "CSE204", title: "Database Systems", credits: 3, instructor: "Eng. Abdirahman Ali" },
    { code: "CSE205", title: "Computer Networks", credits: 3, instructor: "Dr. Yusuf Abdulle" },
    { code: "MAT210", title: "Discrete Mathematics", credits: 2, instructor: "Mr. Khalid Warsame" },
    { code: "ENG102", title: "Academic English Writing", credits: 2, instructor: "Ms. Fartun Osman" }
  ];

  const notifications = [
    { icon: Calendar, text: "Midterm exams start on July 10, 2025.", type: "info" },
    { icon: Bell, text: "Assignment 2 for OOP is due June 25, 2025.", type: "warning" },
    { icon: GraduationCap, text: "GPA update available after final exams.", type: "info" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-[#003d82] text-white text-xl font-bold">SS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-xl text-gray-600">Welcome, Suber Sulub!</p>
            </div>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline" 
            className="flex items-center space-x-2 hover:bg-red-50 hover:border-red-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Full Name</p>
                <p className="text-base font-semibold">Subeer Sulub</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Student ID</p>
                <p className="text-base font-semibold">DDU 1502321</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                <p className="text-base">Nov 23, 2003</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Gender</p>
                <p className="text-base">Male</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Nationality</p>
                <p className="text-base flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Somali</span>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-base flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>subeer@student.university.edu</span>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-base flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+251915532630</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Academic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">University</p>
                    <p className="text-base font-semibold">Dire Dawa University</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Faculty</p>
                    <p className="text-base">Faculty of Engineering</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Department</p>
                    <p className="text-base">Computer Science</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Program</p>
                    <p className="text-base">BSc in Software Engineering</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Level</p>
                    <p className="text-base">Year 4 – Semester 1</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Enrollment Year</p>
                    <p className="text-base">2022</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Current GPA</p>
                    <p className="text-base font-semibold text-green-600">3.10 / 4.00</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Semester Courses */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="w-5 h-5" />
                <span>Current Semester Courses</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Title</TableHead>
                    <TableHead className="text-center">Credit Hours</TableHead>
                    <TableHead>Instructor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{course.code}</TableCell>
                      <TableCell>{course.title}</TableCell>
                      <TableCell className="text-center">{course.credits}</TableCell>
                      <TableCell>{course.instructor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Academic Notifications */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Academic Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <notification.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                    <p className="text-sm text-blue-800">{notification.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
