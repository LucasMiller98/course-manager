import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipe/app.pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponet } from "./course-list.componet";

@NgModule({
  declarations: [ // pips e components
    CourseListComponet,
    CourseInfoComponent,
  ],
  imports: [ // modulos para ele poder existir
    CommonModule,
    StarModule,
    FormsModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponet
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {

}