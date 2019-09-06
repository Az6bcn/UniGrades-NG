import {AcademicSemesterEnum} from './Enums/AcademicSemester.Enum';
export class Subject {
  id: number;
  subjectName: string;
  courseYear: string;
  totalPercentage: number;
  userId: string;
  academicSemesterId: number;
  coveredPercentage: number;
  currentAverage: number;
}
