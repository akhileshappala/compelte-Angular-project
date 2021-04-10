import { Component, OnInit, ViewChild } from '@angular/core';
import{ FormBuilder, Validators,FormGroup} from '@angular/forms';
import {Feedback,ContactType} from '../shared/feedback';
import { Options } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('fform',{ static: true }) feedbackFormDirective;

  feedbackForm: FormGroup;
  feedback : Feedback;
  contactType = ContactType;
  constructor(private fb : FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.feedbackForm= this.fb.group({
      firstname: ['',Validators.required],
      lastname:['',Validators.required],
      telnum:['',Validators.required],
      email:['',Validators.required],
      agree:false,
      contacttype: 'None',
      message: ''
  
    });
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();

  }

}