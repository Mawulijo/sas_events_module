import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule,MatDividerModule, MatTableModule, MatInputModule,
        MatSelectModule, MatTabsModule, MatCardModule, MatPaginatorModule, MatDialogModule,} from '@angular/material';
// import {ErrorStateMatcher} from '@angular/material/core';


@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatTableModule, MatInputModule, MatSelectModule,
    MatTabsModule, MatCardModule, MatPaginatorModule, MatDialogModule, MatDialogModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatTableModule, MatInputModule, MatSelectModule,
    MatTabsModule, MatCardModule, MatPaginatorModule, MatDialogModule],
})
export class CustomMaterialModules { }
