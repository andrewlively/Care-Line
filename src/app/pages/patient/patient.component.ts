import { PatientService } from './../../providers/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faNotesMedical, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faMeh, faGrinBeam, faFrown, faTired } from '@fortawesome/free-regular-svg-icons';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Patient } from 'src/app/classes/patient';
import { NoteService } from 'src/app/providers/note/note.service';
import { Note } from 'src/app/classes/note';

const PATIENT: Patient = {
  id: 7,
  fn: 'Duke',
  mi: 'M',
  ln: 'James',
  clinic: 'Careline Clinic',
  bday: 'May, 5, 1942',
  gender: 'male',
  bloodtype: 'O+',
  height: "6'0''",
  weight: '160 lbs',
  img: '',
  emergency: {
    fn: 'Lauren',
    ln: 'James',
    address: '127 Oak Lane, Cincinnati, Ohio, 44221',
    phone: '111-111-1111',
    email: 'lauren.james@email.com'
  }
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  public noteForm: FormGroup;
  newNote: Note;
  //Patient Object
  patient: Patient;
  sub;
  id: string;
  //Icons
  faNotesMedical = faNotesMedical;
  faInfo = faInfo;
  faSmile = faSmile;
  faMeh = faMeh;
  faGrinBeam = faGrinBeam;
  faFrown = faFrown;
  faTired = faTired;

  //Note Values
  showNewNote = false;
  notes = [
    {
      title: 'Note 1',
      desc: 'Patient is feeling better today',
      mood: 'very good'
    },
    {
      title: 'Note 2',
      desc: 'Patient has a good appetite',
      mood: 'good'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private patientService:PatientService,
    private noteService: NoteService,
    private formBuilder: FormBuilder
    ) {
      this.noteForm = this.formBuilder.group({
        title: [''],
        desc: [''],
        mood: ['']
      });
    }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  };

  addNote() {
    this.showNewNote = true;
  }

  cancelAddNote() {
    this.showNewNote = false;
    this.noteForm.reset();
  }

  createNote() {
    this.showNewNote = false;
    this.newNote = {
      title: this.noteForm.value.title,
      desc: this.noteForm.value.desc,
      mood: this.noteForm.value.mood
    };

    this.noteService.addNote(this.newNote)
      .subscribe(note => this.notes.push(note));
    
    this.noteForm.reset();
  };

  editNote(selectedNote: Note, index: number) {
    this.noteService.editNote(selectedNote)
      .subscribe(note => this.notes[index] = {
        title: note['title'],
        desc: note['desc'],
        mood: note['mood']
      });
  };

  deleteNote(noteID: number, index: number) {
    this.notes.splice(index, 1);
    this.noteService.deleteNote(noteID).subscribe();
  }

  ngOnInit() {
    this.patient = PATIENT;
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.patientService.getPatient(this.id).subscribe(patient => this.patient = patient);
    });
  };

  ngOnDestroy() {
    this.sub.unsubscribe();
  };
}
 