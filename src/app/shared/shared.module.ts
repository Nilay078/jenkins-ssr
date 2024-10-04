import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { MatSnackbarComponent } from './components/mat-snackbar/mat-snackbar.component';

const COMPONENTS = [
    MatSnackbarComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [...COMPONENTS, MaterialModule],
})
export class SharedModule {}
