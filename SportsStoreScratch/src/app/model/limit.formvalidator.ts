import { FormControl } from '@angular/forms';

export class LimitValidator {
  static limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      const val = Number(control.value);
      if (!isNaN(val) && val > limit) {
        return {
          limit: {
            limit: {
              limit,
              actualValue: val
            }
          }
        };
      } else {
        return null;
      }
    };
  }
}
