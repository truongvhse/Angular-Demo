import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  BASE_API_STATE_SERVICE_TOKEN,
  BaseAPIStateService,
} from './base-api.service';
import { combineLatest } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BaseDialogTemplateComponent } from './base-dialog-template.component';

@Component({
  selector: 'base-template',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule],
  template: `<p>base-template works!</p>
    <div>
      <button mat-raised-button (click)="openDialog('get')">GetData</button
      >{{ baseApiService.getDataSignal().data }}
    </div>
    <div>
      <button mat-raised-button (click)="openDialog('create')">
        CreateData</button
      >{{ baseApiService.createDataSignal().data }}
    </div>
    <div>
      <button mat-raised-button (click)="openDialog('update')">
        UpdateData</button
      >{{ baseApiService.updateDataSignal().data }}
    </div>
    <div>
      <button mat-raised-button (click)="openDialog('delete')">
        DeleteData</button
      >{{ baseApiService.deleteDataSignal().data }}
    </div>
    <mat-divider> </mat-divider>
    @if (baseApiService.output1()) {

    <div>
      <h1>Output 1:</h1>
      {{ baseApiService.output1() }}
    </div>
    } @if (baseApiService.output2()) {

    <div>
      <h1>Output 2:</h1>
      {{ baseApiService.output2() }}
    </div>
    } @if(baseApiService.output1()&&baseApiService.output2()) {

    <div>
      <h1>Computed:</h1>
      {{ baseApiService.computed() }}
    </div>
    } `,
  styles: [
    `
      button {
        margin: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTemplateComponent implements OnInit {
  getData = this.baseApiService.getDataSignal();
  createData = this.baseApiService.createDataSignal();
  updateData = this.baseApiService.updateDataSignal();
  deleteData = this.baseApiService.deleteDataSignal();

  constructor(
    @Inject(BASE_API_STATE_SERVICE_TOKEN)
    public baseApiService: BaseAPIStateService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    combineLatest([
      this.baseApiService.get(),
      this.baseApiService.create(),
      this.baseApiService.update(),
      this.baseApiService.delete(),
    ]).subscribe();
  }
  openDialog(typeDialog: 'get' | 'create' | 'update' | 'delete') {
    this.baseApiService.typeDialog.set(typeDialog);
    this.dialog.open(BaseDialogTemplateComponent, {
      data: { baseApiService: this.baseApiService },
    });
  }
}
