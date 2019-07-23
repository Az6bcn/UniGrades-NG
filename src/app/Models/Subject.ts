import { AcademicSemesterEnum } from './Enums/AcademicSemester.Enum';
export class Subject {
  id: number;
  subjectName: string;
  courseYear: Date;
  totalPercentage: number;
  userId: string;
  AcademicSemester: AcademicSemesterEnum;
}
