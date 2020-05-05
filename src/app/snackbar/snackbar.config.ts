import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

export const SnackBarConfig = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4000 }
};
