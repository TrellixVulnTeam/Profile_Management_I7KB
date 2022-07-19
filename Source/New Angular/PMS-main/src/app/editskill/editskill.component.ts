import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  error: any;

  constructor(private FB: FormBuilder,private service: UserserviceService,private http: HttpClient,private route: ActivatedRoute,private toaster:Toaster) { }
  domainValue:any;
  technologyValue:any;
  skillid:number=0;
  profileId:number=0;
  profileIdDetails:any;
  showMe: boolean = false;
  foot:boolean = true;

  skill:any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {     
      this.skillid = params['skillid'];
      // this.profileId= params['profileId'];
      console.log('Skill Id : ' + this.skillid);
      // console.log ('id'+this.profileId);
    })
    this.getDomain();
    this.getTechnology();
    this.getSkillDetailsBySkillId(this.skillid);
    this.getProfileIdByUserId();
    
  }
  // getProfileIdByUserId()
  // {
  //   this.service.getProfileIdByUserId().subscribe({
  //       next:(data:any)=>{this.profileIdDetails=data,
  //       this.profileId=this.profileIdDetails.profileId,
  //       console.warn(this.profileId),
  //       console.log(this.profileIdDetails)
  //       }
  
  //   })
  // }

  getProfileIdByUserId()
  {
    this.service.getProfileIdByUserId().subscribe({
        next:(data:any)=>{this.profileIdDetails=data,
        this.profileId=this.profileIdDetails.profileId,
        console.warn(this.profileId),
        console.log(this.profileIdDetails)
        }
  
    })
  }
  getDomain()
  {
    this.service.getDomain().subscribe((data:any)=>
    {
      this.domainValue=data;
    });
  }
  getTechnology()
  {
    this.service.getTechnology().subscribe((data:any)=>
    {
      this.technologyValue=data;
    });
  }
  getSkillDetailsBySkillId(skillId:number)
  {
    console.log(skillId);
    this.service.getSkillDetailsBySkillId(skillId).subscribe( (data)=>{
      this.skill=data;
      console.log(this.skill)});
      this.domainValue=this.skill.domainid;
      this.technologyValue=this.skill.technologyid;
  }

  updateSkills()
  {
    const skills = {
      skillId:this.skillid,
      domainId:this.skill.domainId,
      technologyId:this.skill.technologyId,
      // profileId:this.profileIdDetails.profileId

    }
    console.log(skills);
    this.service.updateSkills(skills).subscribe({
      error: (error) => { this.error = error.error.message },
      complete: () => {
        this.toaster.open({ text: 'Skills edited successfully', position: 'top-center', type: 'success' });
      }
    }
      
    );
  }

  toogletag()

  {

    this.showMe=!this.showMe;

  }
  footer()

  {

    this.foot=!this.foot;

    if(this.foot==false){this.foot=true};

   

  }

}
