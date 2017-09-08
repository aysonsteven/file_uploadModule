import { Component, Renderer, ElementRef, ViewChild, OnInit } from "@angular/core";
import { FileUploadComponent } from "../../template/modules/file-upload.module"
@Component({
    selector: 'fileupload-page',
    templateUrl: 'static/app/modules/file-upload/page/file-upload.component.html',
    styleUrls: [ 'static/app/modules/file-upload/page/file-upload.component.css' ]
})

export class FileUploadPage implements OnInit{
    alumnusPhotoPath: string = "static/resources/img/user-profile.png";
    alumniPhotoPath: string= "static/resources/img/user-profile.png";
    @ViewChild( FileUploadComponent ) fileUpload;
    @ViewChild( 'img' ) image: ElementRef;
    @ViewChild( 'imgAlumni' ) imageAlumni: ElementRef;
    @ViewChild( 'fileUpload' ) fileUpload: ElementRef;
    constructor( private renderer: Renderer ){

    }
    ngOnInit(){
    }
    onChangeAlumnusPhoto( event ){
        console.log( 'asd',event );
        let file = event.target.files[0];
        let reader = new FileReader();
        if( file.size > 20000 ) return alert( file.size );
        reader.addEventListener("load", () => {
            this.renderer.setElementAttribute( this.image.nativeElement, 'src', reader.result);
        }, false)
        if ( file ) reader.readAsDataURL(file);
    }
    onChangeAlumniPhoto( event ){
        let file = event.target.files[ 0 ];
        let reader = new FileReader();
        if( file.size > 20000 ) return alert( file.size );
        reader.addEventListener("load", () => {
            this.renderer.setElementAttribute( this.imageAlumni.nativeElement, 'src', reader.result );
        }, false );
        if (file) reader.readAsDataURL(file);
    }
    clear(){}


    onClickSave( tab: boolean ){
        if( ! tab ) return this.projectSubmit();
        this.alumniSubmit();
    }

    projectSubmit(){
        console.log( 'project' );
        this.fileUpload.uploadFiles();
    }

    alumniSubmit(){
        console.log( 'alumni' );
    }

}