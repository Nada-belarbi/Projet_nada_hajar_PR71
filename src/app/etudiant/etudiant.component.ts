import { Component, Input, OnInit, input } from '@angular/core';
import { Etudiant } from '../models/Etudiant';

import { StudentService } from '../student-service.service';

@Component({
  selector: 'app-EtudiantComponent',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
[x: string]: any;
  students: Etudiant[] = [];
  etudiant: Etudiant = {
    userID: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    filliere: '',
    datedenaissance: '', // Initialisation de la propriété datedenaissance
    anneeuniv: '' // Initialisation de la propriété anneeuniv
  };

  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }
  onSignup(): void {
    // Ajouter le nouvel étudiant
    this.studentService.addStudents(this.etudiant).subscribe(student => {
      // Mettre à jour la liste des étudiants avec le nouvel étudiant
      this.students.push(student);
      // Réinitialiser les champs du formulaire
      this.resetForm();
    });
  }
  onLogin(): void {
    // Simuler une vérification des informations d'identification (email et mot de passe)
    const userToLogin = this.students.find(student => student.email === this.etudiant.email && student.password === this.etudiant.password);
  
    if (userToLogin) {
      // Connexion réussie, afficher un message de succès
      console.log("Connexion réussie pour l'utilisateur : ", userToLogin.nom, userToLogin.prenom);
      alert("Connexion réussie ! Bienvenue, " + userToLogin.nom + " " + userToLogin.prenom);
  
      // Réinitialiser les champs du formulaire
      this.resetForm();
    } else {
      // Identifiants incorrects, afficher un message d'erreur
      console.log("Identifiants incorrects. Veuillez réessayer.");
      alert("Identifiants incorrects. Veuillez réessayer.");
    }
  }
  
  resetForm(): void {
    // Réinitialiser les champs du formulaire
    this.etudiant = {
      userID: 0,
      nom: '',
      prenom: '',
      email: '',
      password: '',
      filliere: '',
      datedenaissance:'',
    anneeuniv:''
    };

  }
}