import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/classes/patient';
import { Caretaker } from './../../classes/caretaker';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/providers/user/user.service';
import { PatientService } from 'src/app/providers/patient/patient.service';

const PATIENTS: Patient[] = [
  {
    id: 1,
    fn: 'Cathy',
    mi: '',
    ln: '',
    clinic: 'Careline Clinic',
    bday: 'May, 5, 1942',
    gender: 'male',
    bloodtype: 'O+',
    height: "6'0''",
    weight: '160 lbs',
    img: 'url(/assets/images/people/patients/cathy.jpg)',
    emergency: {
      fn: 'Lauren',
      ln: 'James',
      address: '127 Oak Lane, Cincinnati, Ohio, 44221',
      phone: '111-111-1111',
      email: 'lauren.james@email.com'
    }
  },
  {
    id: 2,
    fn: 'Bobby',
    mi: '',
    ln: '',
    clinic: 'Careline Clinic',
    bday: 'May, 5, 1942',
    gender: 'male',
    bloodtype: 'O+',
    height: "6'0''",
    weight: '160 lbs',
    img: 'url(/assets/images/people/patients/bobby.jpg)',
    emergency: {
      fn: 'Lauren',
      ln: 'James',
      address: '127 Oak Lane, Cincinnati, Ohio, 44221',
      phone: '111-111-1111',
      email: 'lauren.james@email.com'
    }
  },
  {
    id: 3,
    fn: 'Tammy',
    mi: '',
    ln: '',
    clinic: 'Careline Clinic',
    bday: 'May, 5, 1942',
    gender: 'male',
    bloodtype: 'O+',
    height: "6'0''",
    weight: '160 lbs',
    img: 'url(/assets/images/people/patients/brenda.jpg)',
    emergency: {
      fn: 'Lauren',
      ln: 'James',
      address: '127 Oak Lane, Cincinnati, Ohio, 44221',
      phone: '111-111-1111',
      email: 'lauren.james@email.com'
    }
  },
  {
    id: 4,
    fn: 'Frank',
    mi: '',
    ln: '',
    clinic: 'Careline Clinic',
    bday: 'May, 5, 1942',
    gender: 'male',
    bloodtype: 'O+',
    height: "6'0''",
    weight: '160 lbs',
    img: 'url(/assets/images/people/patients/frank.jpg)',
    emergency: {
      fn: 'Lauren',
      ln: 'James',
      address: '127 Oak Lane, Cincinnati, Ohio, 44221',
      phone: '111-111-1111',
      email: 'lauren.james@email.com'
    }
  },
  {
    id: 5,
    fn: 'George',
    mi: '',
    ln: '',
    clinic: 'Careline Clinic',
    bday: 'May, 5, 1942',
    gender: 'male',
    bloodtype: 'O+',
    height: "6'0''",
    weight: '160 lbs',
    img: 'url(/assets/images/people/patients/george.jpg)',
    emergency: {
      fn: 'Lauren',
      ln: 'James',
      address: '127 Oak Lane, Cincinnati, Ohio, 44221',
      phone: '111-111-1111',
      email: 'lauren.james@email.com'
    }
  },
  {
    id: 6,
    fn: 'Duke',
    mi: 'M',
    ln: 'James',
    clinic: 'Careline Clinic',
    bday: 'May, 5, 1942',
    gender: 'male',
    bloodtype: 'O+',
    height: "6'0''",
    weight: '160 lbs',
    img: 'url(/assets/images/people/patients/duke.jpg)',
    emergency: {
      fn: 'Lauren',
      ln: 'James',
      address: '127 Oak Lane, Cincinnati, Ohio, 44221',
      phone: '111-111-1111',
      email: 'lauren.james@email.com'
    }
  }
];
const CARETAKERS: Caretaker[] = [{
    id: 1,
    fn: 'Howard',
    ln: '',
    clinic: 'Careline Clinic',
    img: 'url(/assets/images/people/default.png)'
  },
  {
    id: 2,
    fn: 'Franny',
    ln: '',
    clinic: 'Careline Clinic',
    img: 'url(/assets/images/people/default.png)'
  },
  {
    id: 3,
    fn: 'Monica',
    ln: '',
    clinic: 'Careline Clinic',
    img: 'url(/assets/images/people/default.png)'
  },
  {
    id: 4,
    fn: 'Taylor',
    ln: '',
    clinic: 'Careline Clinic',
    img: 'url(/assets/images/people/default.png)'
  },
  {
    id: 5,
    fn: 'Madison',
    ln: '',
    clinic: 'Careline Clinic',
    img: 'url(/assets/images/people/default.png)'
  }
];

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input('type') type: string;
  activeList: any[];
  patients = PATIENTS;
  caretakers = CARETAKERS;

  constructor(
    private router: Router,
    private userService: UserService,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    if (this.type === 'patient') {
      this.activeList = this.patients;
    } else if (this.type === 'caretaker') {
      this.activeList = this.caretakers;
    }
  }

  goToPatient(patient: Patient) {
    this.router.navigateByUrl(`/patient/${patient.id}`);
  }

  goToCaretaker(caretaker: Caretaker) {
    this.router.navigateByUrl(`/caretaker/${caretaker.id}`);
  }

  editPatient(selectedPatient: Patient, index: number) {
    
  }

  deletePatient(patientID: number, index: number) {
    this.patientService.deletePatient(patientID).subscribe();
  }

  editCaretaker(selectedCaretaker: Caretaker, index: number) {
    
  }

  deleteCaretaker(caretakerID: number, index: number) {
    
  }

}
