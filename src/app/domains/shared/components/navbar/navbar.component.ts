import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  themeToggleDarkIcon: HTMLElement | null = null
  themeToggleLightIcon: HTMLElement | null = null
  themeToggleBtn: HTMLElement | null = null

  ngOnInit(): void {
    this.themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
    this.themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon'
    )
    this.themeToggleBtn = document.getElementById('theme-toggle')

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.themeToggleLightIcon?.classList.remove('hidden')
    } else {
      this.themeToggleDarkIcon?.classList.remove('hidden')
    }

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        this.toggleTheme()
      })
    }
  }

  toggleTheme(): void {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    }

    this.themeToggleDarkIcon?.classList.toggle('hidden')
    this.themeToggleLightIcon?.classList.toggle('hidden')
  }
}
