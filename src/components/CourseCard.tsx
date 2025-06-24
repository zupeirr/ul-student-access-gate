
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Play, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLearning } from '../contexts/LearningContext';

interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  const { isEnrolled, getCourseProgress } = useLearning();
  
  const enrolled = isEnrolled(course.id);
  const progress = getCourseProgress(course.id);

  const handleViewCourse = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
      <div className="relative" onClick={handleViewCourse}>
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">
            {course.category}
          </span>
        </div>
        {enrolled && (
          <div className="absolute top-4 right-4">
            <div className="bg-green-500 text-white p-1 rounded-full">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          by {course.instructor}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        
        {enrolled && progress > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">Progress</span>
              <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold">{course.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            {enrolled ? 'Enrolled' : course.price}
          </span>
          <Button 
            onClick={handleViewCourse} 
            className={enrolled ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}
          >
            {enrolled ? 'Continue' : 'View Course'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
