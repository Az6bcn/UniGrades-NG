import { Grade } from './Grade';

export class SubjectGrades {
  id: string;
  subjectName: string;
  totalPercentage: number;
  userId: string;
  grades: Array<Grade>;
  average: number;
}
