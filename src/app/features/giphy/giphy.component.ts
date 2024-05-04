import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GiphyService } from './giphy.service';
import { BASE_API_STATE_SERVICE_TOKEN } from '../base-template/base-api.service';
import { BaseTemplateComponent } from '../base-template/base-template.component';

@Component({
  selector: 'giphy',
  standalone: true,
  imports: [CommonModule, BaseTemplateComponent],
  providers: [
    { provide: BASE_API_STATE_SERVICE_TOKEN, useExisting: GiphyService },
  ],
  template: `<p>giphy works!</p>
    <br />
    <base-template></base-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiphyComponent {}
