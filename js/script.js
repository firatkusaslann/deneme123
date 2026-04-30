// --- Translations Dictionary ---
const translations = {
    tr: {
        navHome: "Ana Sayfa",
        navServices: "Hizmetler",
        navPortfolio: "Portfolyo",
        navContact: "İletişim",
        heroTyping: "Cesur Fikirleri Etkili Dijital\nMarkalara Dönüştürüyorum.",
        heroTypingMobile: "Cesur Fikirleri Etkili\nDijital Markalara\nDönüştürüyorum.",
        heroBtnPrimary: "Projeleri İncele",
        heroBtnSecondary: "İletişime Geç",
        statProjects: "TAMAMLANAN PROJE",
        statSatisfaction: "MEMNUNİYET",
        statExperience: "YILLIK DENEYİM",
        statCountries: "ÜLKE",
        servicesTitle: "Size Hangi Alanda Hizmet Verebilirim?",
        service1Title: "Markalama",
        service1Desc: "Markanızın kimliğini ve hikayesini dijital dünyada fark edilecek şekilde tasarlıyorum.",
        service2Title: "UI/UX Tasarım",
        service2Desc: "Kullanıcı dostu, estetik ve fonksiyonel dijital arayüzler ile deneyimi ön plana çıkarıyorum.",
        service4Title: "Sosyal Medya",
        service4Desc: "Dijital varlığınızı güçlendirecek, stratejik ve görsel odaklı içerikler üretiyorum.",
        techTitle: "Üretkenliğimi Arttıran Teknolojiler",
        projectsTitle: "Öne Çıkan Projeler",
        projectsCursor: "Projeyi İncele",
        portfolioTitle: "Tüm İşlerime Göz Atın",
        aboutTitle: "Hakkımda",
        aboutDesc1: "Merhaba, ben Fırat Kuşaslan. 1998 yılında doğdum ve şu anda Denizli'de yaşıyorum. Yaklaşık 5 yıldır dijital dünyada yaratıcı çözümler üreten tutkulu bir tasarımcıyım.",
        aboutDesc2: "Markaların hikayelerini estetik ve işlevsel tasarımlarla buluşturmayı, kullanıcı deneyimini her zaman ön planda tutmayı hedefliyorum. Her yeni projede sınırları zorlamayı ve yenilikçi yaklaşımlar denemeyi seviyorum.",
        aboutBtn: "Benimle İletişime Geç",
        loadMoreBtn: `Daha Fazla Gör <i class="ph ph-caret-down"></i>`,
        footerText: "&copy; Fırat Kuşaslan - 2026 | Tüm hakları saklıdır.",
        contactTitle: "Projeniz Hakkında Konuşalım",
        contactDesc: "Direkt WhatsApp Aracılığı İle Hızlı İletişim Sağlayabilirsiniz.",
        contactBtn: `<i class="ph ph-whatsapp-logo"></i> WhatsApp'a Git`,
        whatsappUrl: "https://wa.me/905323871204?text=Merhaba%2C%20websitenizi%20inceledim.%20Projem%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.%20M%C3%BCsait%20misiniz%3F",
        detailServices: "Hizmetler",
        detailDisciplines: "Disiplinler",
        nextProject: "SIRADAKİ PROJE",
        prevProject: "ÖNCEKİ PROJE"
    },
    en: {
        navHome: "Home",
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        heroTyping: "Shaping Bold Ideas Into\nImpactful Digital Brands.",
        heroTypingMobile: "Shaping Bold Ideas\nInto Impactful\nDigital Brands.",
        heroBtnPrimary: "View Projects",
        heroBtnSecondary: "Get in Touch",
        statProjects: "PROJECTS DONE",
        statSatisfaction: "HAPPY CLIENTS",
        statExperience: "YEARS OF EXPERIENCE",
        statCountries: "COUNTRIES",
        servicesTitle: "How Can I Help You?",
        service1Title: "Branding",
        service1Desc: "I design your brand's identity and story to stand out in the digital world.",
        service2Title: "UI/UX Design",
        service2Desc: "I prioritize user experience with aesthetic and functional digital interfaces.",
        service4Title: "Social Media",
        service4Desc: "I produce strategic and visually focused content that will strengthen your digital presence.",
        techTitle: "Technologies That Boost My Productivity",
        projectsTitle: "Featured Projects",
        projectsCursor: "View Project",
        nextProject: "Next Project",
        prevProject: "Previous Project",
        allProjects: "View All Projects",
        portfolioTitle: "View All Projects",
        aboutTitle: "About Me",
        aboutDesc1: "Hello, I'm Fırat Kuşaslan. Born in 1998, I currently live in Denizli, Turkey. I've been a passionate designer for 5 years, creating creative solutions in the digital world.",
        aboutDesc2: "My goal is to merge brand stories with aesthetic and functional designs, always prioritizing the user experience. I love pushing boundaries and trying innovative approaches in every new project.",
        aboutBtn: "Get in Touch",
        loadMoreBtn: `View More <i class="ph ph-caret-down"></i>`,
        footerText: "&copy; Fırat Kuşaslan - 2026 | All rights reserved.",
        contactTitle: "Let's Talk About Your Project",
        contactDesc: "You Can Provide Fast Communication Directly Via WhatsApp.",
        contactBtn: `<i class="ph ph-whatsapp-logo"></i> Go to WhatsApp`,
        whatsappUrl: "https://wa.me/905323871204?text=Hello%2C%20I've%20reviewed%20your%20website.%20I%20would%20like%20to%20discuss%20my%20project.%20Are%20you%20available%3F",
        detailServices: "Services",
        detailDisciplines: "Disciplines",
        nextProject: "Next Project"
    }
};

// --- Theme & Language Initialization ---
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

let currentLang = localStorage.getItem('portfolio-lang') || 'tr';
document.documentElement.setAttribute('lang', currentLang);

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    function updateThemeIcons(theme) {
        const icons = document.querySelectorAll('#theme-toggle-btn i, #theme-toggle-mobile i');
        icons.forEach(icon => {
            icon.className = theme === 'light' ? 'ph ph-sun' : 'ph ph-moon';
        });
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        if (newTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('portfolio-theme', 'dark');
        }
        updateThemeIcons(newTheme);
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
    
    // Initial icon state
    updateThemeIcons(document.documentElement.getAttribute('data-theme') || 'dark');

    // --- Language Switch Logic ---
    const langSwitchDesktop = document.getElementById('lang-switch');
    const langSwitchMobile = document.getElementById('lang-switch-mobile');

    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        // Sync all switches
        if (langSwitchDesktop) langSwitchDesktop.checked = (lang === 'en');
        if (langSwitchMobile) langSwitchMobile.checked = (lang === 'en');

        // Translate all data-i18n elements except hero typing
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] && key !== 'heroTyping') {
                el.innerHTML = translations[lang][key];
            }
        });

        const whatsappBtn = document.getElementById('whatsapp-btn');
        const contactWhatsappBtn = document.getElementById('contact-whatsapp-btn');
        if (whatsappBtn) whatsappBtn.href = translations[lang].whatsappUrl;
        if (contactWhatsappBtn) contactWhatsappBtn.href = translations[lang].whatsappUrl;

        // Hero text initialization with mobile check
        const isMobile = window.innerWidth <= 768;
        const heroText = isMobile && translations[lang].heroTypingMobile 
            ? translations[lang].heroTypingMobile 
            : translations[lang].heroTyping;
        
        initTypewriter(heroText);
        
        // Re-render projects to update their translated content
        if (typeof renderProjects === 'function') {
            renderProjects();
        }
    }

    if (langSwitchDesktop) {
        langSwitchDesktop.addEventListener('change', (e) => {
            applyLanguage(e.target.checked ? 'en' : 'tr');
        });
    }
    if (langSwitchMobile) {
        langSwitchMobile.addEventListener('change', (e) => {
            applyLanguage(e.target.checked ? 'en' : 'tr');
        });
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Prevent scrolling when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- 0. Yazı Yazma Efekti (Smooth Character Reveal) ---
    const typingContent = document.getElementById('typing-content');
    const heroBtns = document.getElementById('hero-btns');
    let typingTimeout;

    function initTypewriter(text) {
        if (!typingContent) return;

        // Reset
        clearTimeout(typingTimeout);
        typingContent.innerHTML = '';
        if (heroBtns) heroBtns.classList.remove('visible');

        typingContent.innerHTML = text.split('').map(char => {
            if (char === '\n') return '<br>';
            return `<span class="char">${char}</span>`;
        }).join('');

        const chars = typingContent.querySelectorAll('.char');
        let charIndex = 0;

        function revealChars() {
            if (charIndex < chars.length) {
                chars[charIndex].classList.add('visible');

                if (heroBtns && charIndex === Math.floor(chars.length * 0.8)) {
                    heroBtns.classList.add('visible');
                }

                charIndex++;
                typingTimeout = setTimeout(revealChars, 30);
            } else if (heroBtns) {
                heroBtns.classList.add('visible');
            }
        }
        typingTimeout = setTimeout(revealChars, 20);
    }

    // Initial load apply
    applyLanguage(currentLang);

    // --- 1. Lenis Smooth Scroll (Apple Style Momentum) ---
    let isNavScrolling = false;

    if (typeof Lenis !== 'undefined') {
        window.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        window.addEventListener('resize', () => {
            window.lenis.update();
        });

        function raf(time) {
            window.lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = this.getAttribute('href');

                isNavScrolling = true;
                window.lenis.scrollTo(target, {
                    immediate: false,
                    duration: 1.5,
                    onComplete: () => {
                        isNavScrolling = false;
                    }
                });
            });
        });
    }

    // --- 2. Navbar Scroll (Glass & Hide) Effect ---
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (!nav) return;

        if (currentScrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        if (currentScrollY > 100) {
            if (currentScrollY > lastScrollY) {
                nav.classList.add('nav-hidden');
            } else {
                nav.classList.remove('nav-hidden');
            }
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = currentScrollY;
    });

    // --- 2. Sayfayı Aşağı Kaydırdıkça Beliren Elementler (Scroll Reveal) ---
    // Artık sadece section'ları değil, .reveal class'ı olan tüm elementleri hedefliyoruz
    function checkReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                if (!el.classList.contains('active')) {
                    el.classList.add('active');
                    // Counter Animation Logic
                    const counters = el.querySelectorAll('.counter');
                    if (counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; // 2 seconds
                            const increment = target / (duration / 16); // 60fps
                            let current = 0;

                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                    }
                }
            }
        });
    }
    // İlk açılışta ve scroll yapıldığında kontrol et
    checkReveal();
    window.addEventListener('scroll', checkReveal);

    // --- 3. Hero Video Scroll & Visibility Interaction ---
    const videoContainer = document.querySelector('.showreel-video-container');
    const showreelVideo = document.getElementById('showreel-video-player');
    const videoSection = document.getElementById('showreel-video');
    let isVideoSectionLocked = false;
    let hasReachedVideo = false;

    window.scrollTo(0, 0);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (!videoContainer || !videoSection) return;

        // Opacity Kontrolü
        if (scrollY > 150) {
            videoContainer.classList.add('visible-video');
        } else {
            videoContainer.classList.remove('visible-video');
        }

        // Dinamik Büyüme (Scroll Progress Based Scaling)
        let progress = 0;
        
        if (window.innerWidth < 768) {
            // Mobilde yükseklik silindiği için viewport konumuna göre hesaplıyoruz
            const rect = videoSection.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            // Video ekranın ortasına yaklaştıkça büyür
            progress = (viewHeight - rect.top) / (viewHeight * 0.8);
            progress = Math.max(0, Math.min(1, progress));
        } else {
            // Desktop (Orijinal Mantık - Dokunulmadı)
            const startScroll = 100;
            const endScroll = 800;
            progress = (window.scrollY - startScroll) / (endScroll - startScroll);
            progress = Math.max(0, Math.min(1, progress));
        }

        // Mobilde 80%'den 100%'e çıkması için 0.25, desktopta orijinal 0.4
        const scaleFactor = window.innerWidth < 768 ? 0.25 : 0.4;
        const currentScale = 1 + (progress * scaleFactor);
        videoContainer.style.transform = `scale(${currentScale})`;

        // Video Oynatma Mantığı
        const videoRect = videoSection.getBoundingClientRect();
        if (videoRect.bottom > window.innerHeight * 0.4 && videoRect.top < window.innerHeight * 0.8) {
            if (showreelVideo && showreelVideo.paused) {
                showreelVideo.play().catch(() => { });
            }
        } else {
            if (showreelVideo && !showreelVideo.paused) {
                showreelVideo.pause();
            }
        }
    });

    // --- 4. Video Ses Kontrolü ---
    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn && showreelVideo) {
        const muteIcon = muteBtn.querySelector('i');
        muteBtn.addEventListener('click', () => {
            showreelVideo.muted = !showreelVideo.muted;
            if (showreelVideo.muted) {
                muteIcon.classList.replace('ph-speaker-high', 'ph-speaker-slash');
            } else {
                muteIcon.classList.replace('ph-speaker-slash', 'ph-speaker-high');
            }
        });
    }
    // --- 5. İmleç Takip Mantığı (Hapsedilmiş İmleçler) ---
    let globalMouseX = 0;
    let globalMouseY = 0;

    window.addEventListener('mousemove', (e) => {
        globalMouseX = e.clientX;
        globalMouseY = e.clientY;
    });

    function initRelativeCursor(cards, selector) {
        cards.forEach(card => {
            if (card.dataset.cursorInitialized) return;
            card.dataset.cursorInitialized = "true";

            const cursor = card.querySelector(selector);
            if (!cursor) return;

            let x = 0, y = 0;
            let targetX = 0, targetY = 0;
            let isHovered = false;

            card.addEventListener('mouseenter', (e) => {
                isHovered = true;
                const rect = card.getBoundingClientRect();
                x = targetX = e.clientX - rect.left;
                y = targetY = e.clientY - rect.top;
            });

            card.addEventListener('mouseleave', () => {
                isHovered = false;
            });

            function update() {
                if (isHovered) {
                    const rect = card.getBoundingClientRect();
                    targetX = globalMouseX - rect.left;
                    targetY = globalMouseY - rect.top;
                }

                x += (targetX - x) * 0.1;
                y += (targetY - y) * 0.1;
                cursor.style.left = `${x}px`;
                cursor.style.top = `${y}px`;
                requestAnimationFrame(update);
            }
            update();
        });
    }

    // --- 6. Projeler Gelişmiş "Step" Momentum (One Card per Swipe) ---
    function initSliderMomentum() {
        const slider = document.querySelector('.projects-slider');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (!slider) return;

        let isDragging = false;
        let startX, scrollLeftAtStart;
        let targetSnap = null;
        let rafId;
        let currentIndex = 0;

        const momentumScroll = () => {
            if (!isDragging && targetSnap !== null) {
                const diff = targetSnap - slider.scrollLeft;
                const lerpFactor = window.innerWidth < 768 ? 0.10 : 0.08;
                slider.scrollLeft += diff * lerpFactor;

                if (Math.abs(diff) < 0.5) {
                    slider.scrollLeft = targetSnap;
                    targetSnap = null;
                    cancelAnimationFrame(rafId);
                    return;
                }
                rafId = requestAnimationFrame(momentumScroll);
            }
        };

        const updateSliderSnap = () => {
            const cards = slider.querySelectorAll('.project-card');
            if (cards.length === 0) return;
            const sliderPadding = parseFloat(getComputedStyle(slider).paddingLeft);

            if (currentIndex === cards.length - 1) {
                targetSnap = slider.scrollWidth - slider.clientWidth;
            } else {
                targetSnap = cards[currentIndex].offsetLeft - sliderPadding;
            }
            rafId = requestAnimationFrame(momentumScroll);
        };

        const alignSliderToContainer = () => {
            const title = document.querySelector('.projects-header .section-title');
            if (title) {
                const rect = title.getBoundingClientRect();
                const offset = rect.left;
                slider.style.paddingLeft = `${offset}px`;
                slider.style.paddingRight = `${offset}px`;
            }
        };

        window.addEventListener('resize', () => {
            alignSliderToContainer();
            if (targetSnap !== null) updateSliderSnap();
        });

        setTimeout(alignSliderToContainer, 100);
        alignSliderToContainer();

        const calculateTarget = (deltaX) => {
            const threshold = window.innerWidth < 768 ? 50 : 100;
            const cards = slider.querySelectorAll('.project-card');

            if (deltaX < -threshold && currentIndex < cards.length - 1) {
                currentIndex++;
            } else if (deltaX > threshold && currentIndex > 0) {
                currentIndex--;
            }

            updateSliderSnap();
        };

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            scrollLeftAtStart = slider.scrollLeft;
            cancelAnimationFrame(rafId);
            slider.style.cursor = 'grabbing';
            slider.style.scrollBehavior = 'auto';
        });

        const endDragging = (e) => {
            if (!isDragging) return;
            isDragging = false;
            slider.style.cursor = 'grab';
            const pageX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : 0);
            const deltaX = pageX - startX;
            calculateTarget(deltaX);
        };

        slider.addEventListener('mouseleave', endDragging);
        slider.addEventListener('mouseup', endDragging);
        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX) * 1.2;
            slider.scrollLeft = scrollLeftAtStart - walk;
        });

        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX;
            scrollLeftAtStart = slider.scrollLeft;
            cancelAnimationFrame(rafId);
            slider.style.scrollBehavior = 'auto';
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 1.2;
            slider.scrollLeft = scrollLeftAtStart - walk;
        }, { passive: false });

        slider.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const deltaX = e.changedTouches[0].pageX - startX;
            calculateTarget(deltaX);
        });

        if (prevBtn && nextBtn) {
            prevBtn.onclick = () => {
                cancelAnimationFrame(rafId);
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSliderSnap();
                }
            };
            nextBtn.onclick = () => {
                cancelAnimationFrame(rafId);
                const cards = slider.querySelectorAll('.project-card');
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateSliderSnap();
                }
            };
        }
    }

    // --- 7. "Daha Fazla Gör" - Portfolyo Yükleme Mantığı ---
    function initLoadMore() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.onclick = (e) => {
                e.preventDefault();
                const hiddenProjects = document.querySelectorAll('.hidden-project');
                hiddenProjects.forEach(project => {
                    project.classList.remove('hidden-project');
                    project.classList.add('project-visible');
                });
                loadMoreBtn.parentElement.style.display = 'none';
            };
        }
    }

    // --- 8. Scroll to Top Logic ---
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: false, force: true });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    // --- 9. Scroll Spy (Active Nav Links) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function scrollSpy() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    // --- 10. Proje Navigasyon Mantığı ---
    function initProjectNavigation() {
        const clickableProjects = document.querySelectorAll('[data-slug]');
        let clickStartX, clickStartY;

        clickableProjects.forEach(item => {
            item.style.cursor = 'pointer';

            item.addEventListener('mousedown', (e) => {
                clickStartX = e.pageX;
                clickStartY = e.pageY;
            });

            item.addEventListener('click', (e) => {
                const deltaX = Math.abs(e.pageX - clickStartX);
                const deltaY = Math.abs(e.pageY - clickStartY);

                if (deltaX < 10 && deltaY < 10) {
                    const slug = item.getAttribute('data-slug');
                    if (slug) {
                        window.location.href = `project.html?s=${slug}`;
                    }
                }
            });
        });
    }

    // --- 11. Dinamik Proje Yükleme ---
    function renderProjects() {
        const slider = document.getElementById('projects-slider-container');
        const grid = document.getElementById('portfolio-grid-container');

        // Render in reverse order so newest (last in array) appears first
        const projectsToDisplay = [...window.portfolioProjects].reverse();

        if (slider) {
            const featuredProjects = projectsToDisplay.filter(p => p.isFeatured);
            slider.innerHTML = featuredProjects.map(p => `
                <div class="project-card" data-slug="${p.slug}">
                    <img src="${p.coverImage}" alt="${p.title}">
                    <div class="project-cursor-inner">${translations[currentLang].projectsCursor}</div>
                </div>
            `).join('');
            
            // Slider momentum mantığını yeniden başlat
            initSliderMomentum();
        }

        if (grid) {
            grid.innerHTML = projectsToDisplay.map((p, index) => `
                <div class="portfolio-item ${index >= 6 ? 'hidden-project' : 'project-visible'}" data-slug="${p.slug}">
                    <div class="portfolio-image"><img src="${p.coverImage}" alt="${p.title}"></div>
                    <div class="portfolio-info">
                        <h3 class="portfolio-title">${p.title.toUpperCase()}</h3>
                        <span class="portfolio-category">${p.category[currentLang]}</span>
                    </div>
                </div>
            `).join('');
        }

        initProjectNavigation();
        initLoadMore();
        initRelativeCursor(document.querySelectorAll('.project-card'), '.project-cursor-inner');
        initRelativeCursor(document.querySelectorAll('.portfolio-item'), '.portfolio-cursor-inner');
    }

    renderProjects();
    window.addEventListener('scroll', scrollSpy);
    scrollSpy();
});
