import { NgModule } from "@angular/core";
import { Routes, RouterModule }     from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CustomFileUploadModule } from "../template/modules/file-upload.module"
import { FileUploadPage} from "./page/file-upload.component";


//components
import { DynamicFormComponent } from "./component/dynamic-form/dynamic-form.component"
const routes: Routes = [
    { path: 'file-upload', component: FileUploadPage }
    ];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild( routes ),
        CustomFileUploadModule
    ],
    declarations: [
        FileUploadPage,
        DynamicFormComponent
    ],
    providers: []
})
export class FileUploadAITModule{}