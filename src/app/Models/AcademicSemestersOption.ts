import { AcademicSemesterEnum } from './Enums/AcademicSemester.Enum';
import { IOption } from 'ng-select';

export class AcademicSemestersOption implements IOption {
  value: string;
  label: string;
  disabled?: boolean;

  getAcademicOptions() {
      const options: Array<IOption> = [
        {label: AcademicSemesterEnum[AcademicSemesterEnum.Fall], value: AcademicSemesterEnum.Fall.toString()},
        {label: AcademicSemesterEnum[AcademicSemesterEnum.Spring], value: AcademicSemesterEnum.Spring.toString()}
      ];
      return new Array<IOption>(...options);
  }
}
