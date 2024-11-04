import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGoWildDirective } from '../app-go-wild.directive';
import { Router } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/httpServ/employee.service';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { TransformPipePipe } from '../../standalonepipe/transform-pipe.pipe';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule, ModalModule, FormsModule, TransformPipePipe],
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  hostDirectives: [AppGoWildDirective],
})
export class ManagementComponent implements OnInit {
  safeValue!: SafeHtml;
  rows: number[] = new Array(8); // Create an array of length 8
  cols: number[] = new Array(8); // Create an array of length 8
  modalRef!: BsModalRef;

  currentdate = new Date();

  firstname!: string;
  lastname!: string;
  selectedPosition!: string;
  checkboxValue = false;

  officialPosition = [
    {
      empId: '1',
      empPos: 'Sr. Manager',
    },
    {
      empId: '2',
      empPos: 'Manager',
    },
    {
      empId: '3',
      empPos: 'Deputy Manager',
    },
    {
      empId: '4',
      empPos: 'Programe Manager',
    },
    {
      empId: '5',
      empPos: 'Hr Manager',
    },
  ];

  constructor(
    private ROUTER: Router,
    public secure: EmployeeService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    console.log('HELLO WORLD FROM COMPONENT');
    this.safeValue = this.secure.getSafeHtml(
      '------------custom directiveparts with Renderer2------------------'
    );
  }

  openModal(template: TemplateRef<any>) {
    const firstname = sessionStorage.getItem('firstname');
    const lastname = sessionStorage.getItem('lastname');
    const selectpos = sessionStorage.getItem('selectedposition');
    const checkboxValue = sessionStorage.getItem('checkboxValue');

    if (firstname != null) {
      this.firstname = firstname;
    }
    if (lastname != null) {
      this.lastname = lastname;
    }
    if (selectpos != null) {
      this.selectedPosition = selectpos;
    }
    if (checkboxValue != null) {
      const storeCheckedValue = this.stringToBoolean(checkboxValue);
      this.checkboxValue = storeCheckedValue;
    }
    this.modalRef = this.modalService.show(template);
  }

  changeFirstName(evt: Event) {
    const target = evt.target as HTMLInputElement;
    this.firstname = target.value;
    sessionStorage.setItem('firstname', this.firstname);
    console.log(this.firstname);
  }
  changeLasttName(evt: Event) {
    const target = evt.target as HTMLInputElement;
    this.lastname = target.value;
    sessionStorage.setItem('lastname', this.lastname);
    console.log(this.lastname);
  }
  posChange(evt: Event) {
    const target = evt.target as HTMLInputElement;
    //console.log(evt.target.value);
    this.selectedPosition = target.value;
    sessionStorage.setItem('selectedposition', this.selectedPosition);
  }

  onCheckboxChange(evt: Event) {
    const target = evt.target as HTMLInputElement;
    this.checkboxValue = target.checked;
    sessionStorage.setItem('checkboxValue', this.checkboxValue.toString());
  }

  stringToBoolean(value: string): boolean {
    const trueValues = ['true', '1', 'yes', 'on'];
    return trueValues.includes(value.toLowerCase());
  }
}
