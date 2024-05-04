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
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BaseDialogTemplateComponent } from './base-dialog-template.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'base-template',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    InfiniteScrollModule,
  ],
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTemplateComponent implements OnInit {
  constructor(
    @Inject(BASE_API_STATE_SERVICE_TOKEN)
    public baseApiService: BaseAPIStateService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.baseApiService.getData('trending').subscribe();
  }
  openDialog(typeDialog: 'get' | 'create' | 'update' | 'delete') {
    this.dialog.open(BaseDialogTemplateComponent, {
      data: { baseApiService: this.baseApiService },
    });
  }
}
