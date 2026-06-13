import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  ngOnInit() {
    // Assure que la page commence en haut au chargement
    window.scrollTo(0, 0);
  }

  dashboardService = inject(DashboardService);
  // TODO: this is just a placeholder, we need to decide what data we want to show in the chart and how to structure it
  chartData = computed(() => {
    const sessions = this.dashboardService.sessions();

    return {
      labels: sessions.map((_, i) => `Session ${i + 1}`),

      datasets: [
        {
          label: 'Study Time',
          data: sessions.map(s => s.duration),
        }
      ]
    };
  });

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
