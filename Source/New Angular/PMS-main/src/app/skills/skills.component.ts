import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private FB: FormBuilder,private service: UserserviceService,private http: HttpClient,private route: ActivatedRoute) { }
  domainValue:any;
  technologyValue:any;
  profileId:number=0;
  profileIdDetails:any;


  showMe: boolean = false;

  foot:boolean = true;

  skill:any={
    skillId:0,
    profileId:0,
    domainId:0,
    technologyId:0
  }

  ngOnInit(): void {
    this.getDomain();
    this.getTechnology();
    this.getProfileIdByUserId();
    
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

  submitSkills()
  {
    this.skill.profileId=this.profileId;
    console.log("skill Details");
    console.log(this.skill);
    this.service.submitSkills(this.skill).subscribe();
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
