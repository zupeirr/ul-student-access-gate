
import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface EnrolledCourse {
  courseId: string;
  progress: number;
  completedLessons: number[];
  enrolledAt: Date;
}

interface LearningContextType {
  enrolledCourses: EnrolledCourse[];
  enrollInCourse: (courseId: string) => void;
  completeLesson: (courseId: string, lessonId: number) => void;
  getCourseProgress: (courseId: string) => number;
  isEnrolled: (courseId: string) => boolean;
  getCompletedLessons: (courseId: string) => number[];
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};

interface LearningProviderProps {
  children: ReactNode;
}

export const LearningProvider = ({ children }: LearningProviderProps) => {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);

  const enrollInCourse = (courseId: string) => {
    setEnrolledCourses(prev => {
      if (prev.find(course => course.courseId === courseId)) {
        return prev;
      }
      return [...prev, {
        courseId,
        progress: 0,
        completedLessons: [],
        enrolledAt: new Date()
      }];
    });
  };

  const completeLesson = (courseId: string, lessonId: number) => {
    setEnrolledCourses(prev => prev.map(course => {
      if (course.courseId === courseId) {
        const newCompletedLessons = course.completedLessons.includes(lessonId)
          ? course.completedLessons
          : [...course.completedLessons, lessonId];
        
        const totalLessons = 10; // This would come from course data
        const progress = (newCompletedLessons.length / totalLessons) * 100;

        return {
          ...course,
          completedLessons: newCompletedLessons,
          progress
        };
      }
      return course;
    }));
  };

  const getCourseProgress = (courseId: string): number => {
    const course = enrolledCourses.find(c => c.courseId === courseId);
    return course?.progress || 0;
  };

  const isEnrolled = (courseId: string): boolean => {
    return enrolledCourses.some(course => course.courseId === courseId);
  };

  const getCompletedLessons = (courseId: string): number[] => {
    const course = enrolledCourses.find(c => c.courseId === courseId);
    return course?.completedLessons || [];
  };

  return (
    <LearningContext.Provider value={{
      enrolledCourses,
      enrollInCourse,
      completeLesson,
      getCourseProgress,
      isEnrolled,
      getCompletedLessons
    }}>
      {children}
    </LearningContext.Provider>
  );
};
