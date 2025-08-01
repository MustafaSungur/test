import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-detail.component.html',
})
export class PatientDetailComponent implements OnInit {
  // Gerçek bir uygulamada bu bir servisten gelirdi.
  patientName$: Observable<string> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Route'tan gelen 'id' parametresini dinle
    this.patientName$ = this.route.paramMap.pipe(
      map((params) => {
        const patientId = params.get('id');
        // Burada normalde bir servise gidip ID'ye göre hasta verisini çekersiniz.
        // Biz şimdilik sadece ID'yi kullanarak bir metin döndürelim.
        return `Hasta #${patientId} için Detay Sayfası`;
      })
    );
  }
}
