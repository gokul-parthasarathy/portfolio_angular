import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = "";
  email = "";
  message = "";

  sendMail() {
    const subject = encodeURIComponent("Contact Form");
    const body = encodeURIComponent(
      `name=${this.name}\r\nemail=${this.email}\r\nmessage=${this.message}\r\n\r\n`
    );
    window.location.href = `mailto:gokulparthasarathy92&#64;gmail.com?subject=${subject}&body=${body}`;
  }
}
