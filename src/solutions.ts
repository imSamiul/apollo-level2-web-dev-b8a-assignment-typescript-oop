function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

function processInput(value: string | number | boolean): string | number {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return value ? 'Active' : 'Inactive';
  }
}

processInput('  TypeScript  ');
processInput(7);
processInput(true);
processInput(false);

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} ${latitude} ${longitude}`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}
concatenateArrays(['a', 'b'], ['c', 'd']);
concatenateArrays([1, 2], [3, 4], [5]);

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}
// Sample Input:
const courses = [
  { title: 'TypeScript Mastery', students: 120, isPublished: true },
  { title: 'Draft Course', students: 200, isPublished: false },
  { title: 'Basic HTML', students: 45, isPublished: true },
  { title: 'Next.js Pro', students: 85, isPublished: true },
];

getPopularCourses(courses, 80);

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

// Sample Usage:
const users = [
  { id: 1, name: 'Rakib', role: 'Admin' },
  { id: 2, name: 'Sadia', role: 'Editor' },
  { id: 3, name: 'Tariq', role: 'Subscriber' },
];

pluckValues(users, 'name');
pluckValues(users, 'id');
