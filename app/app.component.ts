import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { TrainingComponent } from './training/training.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EducationComponent,PersonalComponent,TrainingComponent,WorkExperienceComponent,ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';
}
