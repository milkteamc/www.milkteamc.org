class MilkTeaServer {
  constructor() {
    this.init();
  }

  init() {
    this.initMobileMenu();
    this.initCopyFunctionality();
    this.initSmoothScrolling();
    this.initClickOutside();
    this.initStatsAnimation(); // 新增統計動畫
  }

  // mobile stuff
  initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
      this.toggleMobileMenu(mobileMenu);
    });
  }

  toggleMobileMenu(mobileMenu) {
    const isVisible = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isVisible ? 'none' : 'flex';
  }

  // copy ip
  initCopyFunctionality() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const copyToast = document.getElementById('copyToast');
    if (!copyToast) return;
    copyButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const ip = button.getAttribute('data-ip');
        await this.copyToClipboard(ip, copyToast);
      });
    });
  }

  async copyToClipboard(text, toastElement) {
    try {
      await navigator.clipboard.writeText(text);
      this.showCopyToast(toastElement);
    } catch (_err) {
      // old browser might use it idk
      this.fallbackCopyToClipboard(text);
      this.showCopyToast(toastElement);
    }
  }

  fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  showCopyToast(toastElement) {
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3000);
  }

  // it smooth :)
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        this.handleSmoothScroll(e, anchor);
      });
    });
  }

  handleSmoothScroll(event, anchor) {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  initClickOutside() {
    document.addEventListener('click', (e) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (!e.target.closest('.nav') && mobileMenu?.style.display === 'flex') {
        mobileMenu.style.display = 'none';
      }
    });
  }

  initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startStatsAnimation();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  startStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
      const target = element.getAttribute('data-target');
      let finalValue;
      
      if (target === 'days') {
        finalValue = this.calculateOperatingDays();
      } else {
        finalValue = parseInt(target);
      }
      
      this.animateNumber(element, 0, finalValue, 2000); // 2秒動畫
    });
  }

  calculateOperatingDays() {
    const startDate = new Date('2021-06-23');
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  }

  animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentValue = Math.floor(start + (end - start) * easeProgress);
      
      if (end >= 6000) {
        element.textContent = currentValue.toLocaleString() + '+';
      } else {
        element.textContent = currentValue.toLocaleString();
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        if (end >= 6000) {
          element.textContent = end.toLocaleString() + '+';
        } else {
          element.textContent = end.toLocaleString();
        }
      }
    };
    
    requestAnimationFrame(updateNumber);
  }
}

// init
document.addEventListener('DOMContentLoaded', () => {
  new MilkTeaServer();
});

export default MilkTeaServer;