import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'BN Scout200 - S1 Collector App',
      duration: '2 Months',
      work: 'Worked on migrating Angular JS code to Angular 14. Worked on integration of front-end app location with APIs, implementing RESTful API communication protocols. Worked on creating reusable components, custom directives and services. Worked on component interaction between parent-child and shared services. Implemented Router to enable navigation from one view to another.',
      toolsAndTechnologies: ['Angular', 'TypeScript'],
      description: 'S1 Collector is a mobile application which controls the Bently Nevada Scout200 series portable vibration data collectors. This application communicates with Scout200 data collector via Bluetooth or USB to perform condition monitoring so-site.'
    },
    {
      name: 'Product Life Cycle Management',
      duration: '2 Months',
      work: 'Implemented product using the angular.',
      toolsAndTechnologies: ['Angular', 'TypeScript' ],
      description: ' To keep the track of product and its release phase which is stored in single server and used those products in multiple sites'

    },
    {
      name: 'Device Configuration Manager',
      duration: '3 Months',
      work: 'Developed a device configuration management tool using Angular.',
      toolsAndTechnologies: ['Angular', 'TypeScript'],
      description: 'DCM is a cross-platform application that provides the ability to stimulate relay devices. Used to configure and interrogate the RC-10 and RC-20-4G control cubicle.'
    },
    {
      name: 'Rockwell',
      duration: '4 Months',
      work: 'Developed a FDTS application IDE using Angular',
      toolsAndTechnologies: ['Angular', 'TypeScript'],
      description: 'FDTS Application is an IDE that can be used for development, similar to VS Code.'
    }
  ];
}
