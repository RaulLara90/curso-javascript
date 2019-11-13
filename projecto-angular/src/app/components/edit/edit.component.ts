import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public url: string;
  public title: string;
  public project: Project;
  public save_project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  
  constructor(private _projectService: ProjectService,
              private _uploadService: UploadService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) {
  	this.title = 'Editar Proyecto';
  	this.url = Global.url;
  }


 ngOnInit(){
  	this._route.params.subscribe(params => { 
    	this.getProject(params.id);
    });
  }

  getProject(id){
  	this._projectService.getProject(id).subscribe(
  		response => {
  			this.project = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  onSubmit(){
  	this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          	if(this.filesToUpload){
	          this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
	          .then((result:any) => {
	            this.status = 'success';
	            this.save_project = result.project;
	          });
      		}else{
      			this.status = 'success';
	            this.save_project = response.project;
      		}
        }else{
          this.status = 'failed';
        }
      },
      error => {
         console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
