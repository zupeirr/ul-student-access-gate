
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Clock, 
  Play, 
  CheckCircle, 
  BookOpen, 
  Award,
  MessageSquare,
  Share2
} from "lucide-react";
import { toast } from "sonner";

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [enrolledProgress, setEnrolledProgress] = useState(0);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data - in a real app, this would come from an API
  const courseData = {
    '1': {
      title: 'Complete Web Development Bootcamp',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 12543,
      duration: '45 hours',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch. This comprehensive course will take you from beginner to professional web developer.',
      category: 'Programming',
      lessons: [
        { id: 1, title: 'Introduction to Web Development', duration: '15 min', completed: false },
        { id: 2, title: 'HTML Fundamentals', duration: '45 min', completed: false },
        { id: 3, title: 'CSS Styling and Layout', duration: '60 min', completed: false },
        { id: 4, title: 'JavaScript Basics', duration: '90 min', completed: false },
        { id: 5, title: 'DOM Manipulation', duration: '75 min', completed: false },
        { id: 6, title: 'Introduction to React', duration: '120 min', completed: false },
        { id: 7, title: 'React Components and Props', duration: '90 min', completed: false },
        { id: 8, title: 'State Management', duration: '105 min', completed: false },
        { id: 9, title: 'Backend with Node.js', duration: '150 min', completed: false },
        { id: 10, title: 'Database Integration', duration: '120 min', completed: false },
      ],
      requirements: [
        'Basic computer skills',
        'No prior programming experience required',
        'Access to a computer with internet connection'
      ],
      outcomes: [
        'Build responsive websites with HTML, CSS, and JavaScript',
        'Create dynamic web applications with React',
        'Develop backend APIs with Node.js',
        'Deploy full-stack applications',
        'Understand modern web development workflows'
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button onClick={() => navigate('/')}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setIsEnrolled(true);
    toast.success('Successfully enrolled in the course!');
  };

  const handleLessonComplete = (lessonId: number) => {
    const completedLessons = course.lessons.filter(lesson => lesson.completed).length + 1;
    const progress = (completedLessons / course.lessons.length) * 100;
    setEnrolledProgress(progress);
    toast.success('Lesson completed!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-xl font-semibold">LearnHub</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Hero */}
            <div className="relative mb-8">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span>({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Created by</span>
                <span className="font-semibold text-blue-600">{course.instructor}</span>
              </div>
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>
                      {course.lessons.length} lessons • {course.duration} total length
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.lessons.map((lesson, index) => (
                        <div 
                          key={lesson.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-500 w-8">
                              {index + 1}.
                            </span>
                            <div>
                              <h4 className="font-medium">{lesson.title}</h4>
                              <p className="text-sm text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {isEnrolled && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleLessonComplete(lesson.id)}
                              >
                                <Play className="w-4 h-4 mr-1" />
                                Watch
                              </Button>
                            )}
                            {lesson.completed && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What you'll learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <CardDescription>
                      See what other students are saying about this course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                              U{review}
                            </div>
                            <div>
                              <p className="font-medium">Student {review}</p>
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 ml-14">
                            Excellent course! The instructor explains everything clearly and the projects are very practical.
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                {!isEnrolled ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{course.price}</div>
                      <p className="text-gray-500">One-time payment</p>
                    </div>
                    
                    <Button 
                      onClick={handleEnroll}
                      className="w-full mb-4 bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      Enroll Now
                    </Button>
                    
                    <div className="text-center mb-6">
                      <p className="text-sm text-gray-500">30-day money-back guarantee</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Your Progress</span>
                        <span className="text-sm text-gray-500">{Math.round(enrolledProgress)}%</span>
                      </div>
                      <Progress value={enrolledProgress} className="h-2" />
                    </div>
                    
                    <Button className="w-full mb-4" size="lg">
                      <Play className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Button>
                  </>
                )}
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{course.students.toLocaleString()} students enrolled</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{course.duration} on-demand video</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-gray-400" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span>Direct instructor access</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <Button variant="outline" className="w-full mb-2">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
