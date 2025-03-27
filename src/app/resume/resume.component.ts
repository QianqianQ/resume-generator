import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Resume } from '../models/resume.model';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {

  resume: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('resume-data.json').subscribe(
      (data) => this.resume = data)
  }

  printResume() {
    window.print()
  }
}
