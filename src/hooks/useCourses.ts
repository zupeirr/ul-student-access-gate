
import { useState, useMemo } from 'react';

export interface Course {
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

export const useCourses = () => {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 12543,
      duration: '45 hours',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch',
      category: 'Programming'
    },
    {
      id: '2',
      title: 'Data Science & Machine Learning',
      instructor: 'Prof. Michael Chen',
      rating: 4.9,
      students: 8967,
      duration: '60 hours',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      description: 'Master Python, pandas, scikit-learn, and TensorFlow',
      category: 'Data Science'
    },
    {
      id: '3',
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emily Rodriguez',
      rating: 4.7,
      students: 6742,
      duration: '30 hours',
      price: '$79',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      description: 'Learn design principles, Figma, and user research',
      category: 'Design'
    },
    {
      id: '4',
      title: 'Digital Marketing Mastery',
      instructor: 'James Wilson',
      rating: 4.6,
      students: 5234,
      duration: '25 hours',
      price: '$69',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      description: 'SEO, Social Media, Content Marketing, and Analytics',
      category: 'Marketing'
    },
    {
      id: '5',
      title: 'Mobile App Development',
      instructor: 'Alex Kumar',
      rating: 4.8,
      students: 4156,
      duration: '50 hours',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
      description: 'Build iOS and Android apps with React Native',
      category: 'Programming'
    },
    {
      id: '6',
      title: 'Cybersecurity Essentials',
      instructor: 'Dr. Lisa Zhang',
      rating: 4.9,
      students: 3892,
      duration: '40 hours',
      price: '$119',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      description: 'Network security, ethical hacking, and risk management',
      category: 'Security'
    }
  ]);

  const categories = useMemo(() => ['All', 'Programming', 'Data Science', 'Design', 'Marketing', 'Security'], []);

  const getCourseById = (id: string) => courses.find(course => course.id === id);

  const filterCourses = (searchTerm: string, category: string) => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'All') {
      filtered = filtered.filter(course => course.category === category);
    }

    return filtered;
  };

  return {
    courses,
    categories,
    getCourseById,
    filterCourses
  };
};
