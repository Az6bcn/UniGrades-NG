import { Grade } from 'src/app/Models/Grade';
import { Subject } from './../../../../Models/Subject';
import { Component, OnInit, TemplateRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-add-grade-modal',
  templateUrl: './add-grade-modal.component.html',
  styleUrls: ['./add-grade-modal.component.css']
})
export class AddGradeModalComponent implements OnInit {

  @Output() gradeFormValue =  new EventEmitter<Grade>();
  @Input()
  set isLoaded(isLoaded: boolean) {
    this.isLoading$.next(isLoaded);
    if(isLoaded !== undefined) {
      this.modalRef.hide();
    }
  }
  private modalRef: BsModalRef;
  gradeFormGroup: FormGroup;
  subjectName: string;
  @ViewChild('template', {static: true}) template: TemplateRef<any>;
  isLoading$ = new BehaviorSubject<boolean>(false);
  constructor(private modalService: BsModalService,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  openModal(subject: Subject) {
    this.subjectName = subject.subjectName;
    this.gradeFormGroup = this.buildGradeForm(this.fb, subject.id);
    this.modalRef = this.modalService.show(this.template);
  }

  save(form: Grade) {
    this.gradeFormValue.emit(form);
    this.isLoading$.next(true);
  }

  closeModal() {
    this.modalRef.hide();
  }

  isValid(gradeformGroup: FormGroup): boolean {
    return gradeformGroup.invalid;
  }
  buildGradeForm(builder: FormBuilder, subjectId: number) {
    return builder.group({
      subjectId: [subjectId, Validators.required],
      percentage: ['', [Validators.required, Validators.max(100), Validators.min(1)]],
      percentageName: ['', Validators.required],
      grade: ['', [Validators.required, Validators.max(10), Validators.min(0)]],
    });
  }

  get percentage(): AbstractControl { return this.gradeFormGroup.get('percentage'); }
  get percentageName(): AbstractControl { return this.gradeFormGroup.get('percentageName'); }
  get grade(): AbstractControl { return this.gradeFormGroup.get('grade'); }
}
