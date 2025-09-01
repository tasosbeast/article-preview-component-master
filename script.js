class ArticleComponent {
  constructor() {
    this.shareBtn = document.getElementById("shareBtn");
    this.sharePopup = document.getElementById("sharePopup");
    this.toast = document.getElementById("toast");
    this.socialIcons = document.querySelectorAll(".social-icon");
    this.articleTitle = document.querySelector(".article-title");
    this.authorAvatar = document.querySelector(".author-avatar");
    this.authorName = document.querySelector(".author-details h3");
    this.currentUrl = window.location.href;
    this.articleData = {
      title:
        "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
      description:
        "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
      author: "Michelle Appleton",
      date: "28 Jun 2020",
    };
    this.init();
  }

  init() {
    this.bindEvents();
    this.setupKeyboardNavigation();
    this.setupSocialSharing();
  }

  bindEvents() {
    this.shareBtn.addEventListener("click", (e) => this.toggleSharePopup(e));
    document.addEventListener("click", (e) => this.handleOutsideClick(e));
    document.addEventListener("keydown", (e) => this.handleEscapeKey(e));
    this.articleTitle.addEventListener("click", () =>
      this.handleArticleClick()
    );
    this.authorAvatar.addEventListener("click", () => this.handleAuthorClick());
    this.authorName.addEventListener("click", () => this.handleAuthorClick());
  }

  setupKeyboardNavigation() {
    [
      this.shareBtn,
      this.articleTitle,
      this.authorAvatar,
      this.authorName,
    ].forEach((element) => {
      element.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          element.click();
        }
      });
    });

    this.socialIcons.forEach((icon) => {
      icon.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.handleSocialShare(icon.dataset.platform);
        }
      });
    });
  }

  setupSocialSharing() {
    this.socialIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        this.handleSocialShare(icon.dataset.platform);
      });
    });
  }

  toggleSharePopup(e) {
    e.stopPropagation();
    const isActive = this.shareBtn.classList.contains("active");
    this.shareBtn.classList.toggle("active");
    this.sharePopup.classList.toggle("active");
    this.shareBtn.setAttribute("aria-expanded", !isActive);

    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }

  handleOutsideClick(e) {
    if (
      !this.shareBtn.contains(e.target) &&
      !this.sharePopup.contains(e.target)
    ) {
      this.closeSharePopup();
    }
  }

  handleEscapeKey(e) {
    if (e.key === "Escape") {
      this.closeSharePopup();
    }
  }

  closeSharePopup() {
    this.shareBtn.classList.remove("active");
    this.sharePopup.classList.remove("active");
    this.shareBtn.setAttribute("aria-expanded", "false");
  }

  handleSocialShare(platform) {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.currentUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        this.currentUrl
      )}&text=${encodeURIComponent(this.articleData.title)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        this.currentUrl
      )}&description=${encodeURIComponent(this.articleData.title)}`,
    };

    if (shareUrls[platform]) {
      if (navigator.share && platform === "twitter") {
        navigator
          .share({
            title: this.articleData.title,
            text: this.articleData.description,
            url: this.currentUrl,
          })
          .catch(() => {
            window.open(shareUrls[platform], "_blank", "width=600,height=400");
          });
      } else {
        window.open(shareUrls[platform], "_blank", "width=600,height=400");
      }

      this.showToast(
        `Sharing on ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`
      );
      this.closeSharePopup();
    }
  }

  handleArticleClick() {
    this.showToast("Article clicked! This would navigate to the full article.");
    this.articleTitle.style.animation = "pulse 0.3s ease";
    setTimeout(() => {
      this.articleTitle.style.animation = "";
    }, 300);
  }

  handleAuthorClick() {
    this.showToast(`Viewing ${this.articleData.author}'s profile...`);
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add("show");
    setTimeout(() => {
      this.toast.classList.remove("show");
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ArticleComponent();
});
