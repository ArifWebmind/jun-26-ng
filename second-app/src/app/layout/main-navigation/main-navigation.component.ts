import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavigationComponent {
  private cdRef = inject(ChangeDetectorRef);

  onStop() {
    this.cdRef.detach();
    // Angular will not run Digest Cycle for the code written here
    this.cdRef.reattach();
    this.cdRef.detectChanges(); // Manually run digest cycle
    this.cdRef.markForCheck(); // onPush ChangeDetection
  }
}
