import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BASE_API_STATE_SERVICE_TOKEN } from '../base-template/base-api.service';
import { PokemonService } from './pokemon.service';
import { BaseTemplateComponent } from '../base-template/base-template.component';

@Component({
  selector: 'pokemon',
  standalone: true,
  imports: [CommonModule, BaseTemplateComponent],
  providers: [
    { provide: BASE_API_STATE_SERVICE_TOKEN, useExisting: PokemonService },
  ],
  template: `<p>pokemon works!</p>
    <br />
    <base-template></base-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {}
