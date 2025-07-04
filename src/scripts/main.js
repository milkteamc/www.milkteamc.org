class MilkTeaServer {
  constructor() {
    this.init();
  }

  init() {
    this.initMobileMenu();
    this.initCopyFunctionality();
    this.initSmoothScrolling();
    this.initClickOutside();
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
}

// init
document.addEventListener('DOMContentLoaded', () => {
  new MilkTeaServer();
});

export default MilkTeaServer;