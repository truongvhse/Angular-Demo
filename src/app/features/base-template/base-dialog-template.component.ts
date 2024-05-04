import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Self,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  BASE_API_STATE_SERVICE_TOKEN,
  BaseAPIStateService,
} from './base-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'base-dialog-template',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
  ],
  template: ` <h1 mat-dialog-title>a</h1>
    <mat-dialog-content>
      <mat-form-field>
        <mat-label>Output 1</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-divider> </mat-divider>
      <mat-form-field>
        <mat-label>Output 2</mat-label>
        <input matInput />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <!-- <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button> -->
    </mat-dialog-actions>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: BASE_API_STATE_SERVICE_TOKEN,
      useFactory: (data: any) => {
        return data.baseApiService;
      },
      deps: [MAT_DIALOG_DATA],
    },
  ],
})
export class BaseDialogTemplateComponent {
  constructor(
    @Self()
    @Inject(BASE_API_STATE_SERVICE_TOKEN)
    public baseApiService: BaseAPIStateService,
    public dialogRef: MatDialogRef<BaseDialogTemplateComponent>
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
