import { AcademicSemesterEnum } from './Enums/AcademicSemester.Enum';
export class Subject {
  id: number;
  courseYear: Date;
  totalPercentage: number;
  userId: string;
  AcademicSemester: AcademicSemesterEnum;
}
