/* =====================================================
   KH ESPORTS CHAMPIONSHIP 2026
   MASTER INTERACTION SYSTEM
===================================================== */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const navbar =
        document.getElementById("navbar");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const menuBackdrop =
        document.getElementById("menuBackdrop");

    const desktopLinks =
        Array.from(
            document.querySelectorAll(
                ".nav-links a"
            )
        );

    const mobileLinks =
        Array.from(
            document.querySelectorAll(
                ".mobile-links a, .mobile-register"
            )
        );

    const sections =
        Array.from(
            document.querySelectorAll(
                "main section[id]"
            )
        );


    /* =====================================================
       MOTION PREFERENCE
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       CREATE SCROLL PROGRESS BAR
       
       Created automatically.
       No HTML modification required.
    ===================================================== */

    const progressBar =
        document.createElement("div");

    progressBar.id =
        "scrollProgress";

    progressBar.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.appendChild(
        progressBar
    );


    /* =====================================================
       CREATE BACK TO TOP BUTTON
       
       Created automatically.
       No HTML modification required.
    ===================================================== */

    const backToTop =
        document.createElement("button");

    backToTop.id =
        "backToTop";

    backToTop.type =
        "button";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.setAttribute(
        "title",
        "Back to top"
    );

    backToTop.innerHTML =
        `
            <span class="back-to-top-line"></span>
            <span class="back-to-top-arrow">↑</span>
        `;

    document.body.appendChild(
        backToTop
    );


    /* =====================================================
       INJECT REQUIRED MOTION STYLES
       
       This makes the new interaction system
       work even if the existing CSS does not
       contain animation styles yet.
    ===================================================== */

    const interactionStyles =
        document.createElement("style");

    interactionStyles.id =
        "khInteractionStyles";

    interactionStyles.textContent = `

        /* ---------------------------------------------
           SCROLL PROGRESS
        --------------------------------------------- */

        #scrollProgress {
            position: fixed;

            top: 0;
            left: 0;

            width: 0%;
            height: 2px;

            z-index: 2000;

            pointer-events: none;

            background:
                linear-gradient(
                    90deg,
                    #a855f7 0%,
                    #c084fc 45%,
                    #22d3ee 100%
                );

            box-shadow:
                0 0 10px
                rgba(168,85,247,0.55),
                0 0 18px
                rgba(34,211,238,0.25);

            transform-origin: left center;

            transition:
                width 0.08s linear;

            opacity: 0.95;
        }


        /* ---------------------------------------------
           BACK TO TOP
        --------------------------------------------- */

        #backToTop {
            position: fixed;

            right: 28px;
            bottom: 28px;

            width: 46px;
            height: 46px;

            z-index: 1200;

            display: flex;

            align-items: center;
            justify-content: center;

            flex-direction: column;

            gap: 2px;

            padding: 0;

            border:
                1px solid
                rgba(168,85,247,0.35);

            background:
                rgba(7,8,13,0.78);

            color: #f4f5f7;

            cursor: pointer;

            opacity: 0;
            visibility: hidden;

            transform:
                translateY(14px)
                scale(0.92);

            backdrop-filter:
                blur(14px);

            -webkit-backdrop-filter:
                blur(14px);

            box-shadow:
                0 10px 35px
                rgba(0,0,0,0.35);

            transition:
                opacity 0.3s ease,
                visibility 0.3s ease,
                transform 0.3s ease,
                border-color 0.25s ease,
                background 0.25s ease;
        }


        #backToTop.visible {
            opacity: 1;
            visibility: visible;

            transform:
                translateY(0)
                scale(1);
        }


        #backToTop:hover {
            border-color:
                rgba(168,85,247,0.8);

            background:
                rgba(168,85,247,0.12);

            transform:
                translateY(-3px)
                scale(1.02);
        }


        .back-to-top-arrow {
            font-size: 17px;

            line-height: 1;

            font-weight: 500;
        }


        .back-to-top-line {
            width: 10px;
            height: 1px;

            background:
                linear-gradient(
                    90deg,
                    #a855f7,
                    #22d3ee
                );

            opacity: 0.8;
        }


        /* ---------------------------------------------
           INITIAL HERO ANIMATION
        --------------------------------------------- */

        body.kh-page-ready
        .hero .eyebrow {

            opacity: 0;

            transform:
                translateY(14px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.08s
                forwards;
        }


        body.kh-page-ready
        .hero h1 span {

            opacity: 0;

            transform:
                translateY(28px);

            animation:
                khFadeUp
                0.85s
                cubic-bezier(.22,1,.36,1)
                0.16s
                forwards;
        }


        body.kh-page-ready
        .hero h1 strong {

            opacity: 0;

            transform:
                translateY(35px)
                scale(0.985);

            animation:
                khHeroTitle
                1s
                cubic-bezier(.22,1,.36,1)
                0.24s
                forwards;
        }


        body.kh-page-ready
        .hero h1 em {

            opacity: 0;

            transform:
                translateY(22px);

            animation:
                khFadeUp
                0.85s
                cubic-bezier(.22,1,.36,1)
                0.36s
                forwards;
        }


        body.kh-page-ready
        .hero h1 small {

            opacity: 0;

            transform:
                translateY(15px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.46s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-tagline {

            opacity: 0;

            transform:
                translateY(12px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.58s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-description {

            opacity: 0;

            transform:
                translateY(12px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.68s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-actions {

            opacity: 0;

            transform:
                translateY(12px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.78s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-bottom {

            opacity: 0;

            transform:
                translateY(10px);

            animation:
                khFadeUp
                0.65s
                cubic-bezier(.22,1,.36,1)
                0.9s
                forwards;
        }


        /* ---------------------------------------------
           SCROLL REVEAL
        --------------------------------------------- */

        .kh-reveal {

            opacity: 0;

            transform:
                translateY(28px);

            transition:
                opacity 0.75s
                cubic-bezier(.22,1,.36,1),
                transform 0.75s
                cubic-bezier(.22,1,.36,1);
        }


        .kh-reveal.kh-visible {

            opacity: 1;

            transform:
                translateY(0);
        }


        /* ---------------------------------------------
           CARD REVEAL
        --------------------------------------------- */

        .kh-card-reveal {

            opacity: 0;

            transform:
                translateY(24px)
                scale(0.985);

            transition:
                opacity 0.7s
                cubic-bezier(.22,1,.36,1),
                transform 0.7s
                cubic-bezier(.22,1,.36,1);
        }


        .kh-card-reveal.kh-visible {

            opacity: 1;

            transform:
                translateY(0)
                scale(1);
        }


        /* ---------------------------------------------
           KEYFRAMES
        --------------------------------------------- */

        @keyframes khFadeUp {

            from {
                opacity: 0;

                transform:
                    translateY(18px);
            }

            to {
                opacity: 1;

                transform:
                    translateY(0);
            }

        }


        @keyframes khHeroTitle {

            from {
                opacity: 0;

                transform:
                    translateY(35px)
                    scale(0.985);
            }

            to {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);
            }

        }


        /* ---------------------------------------------
           MOBILE
        --------------------------------------------- */

        @media (max-width: 760px) {

            #scrollProgress {
                height: 2px;
            }

            #backToTop {

                right: 17px;
                bottom: 18px;

                width: 42px;
                height: 42px;
            }

        }


        /* ---------------------------------------------
           REDUCED MOTION
        --------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {

            #scrollProgress {
                transition: none;
            }

            #backToTop {
                transition: none;
            }

            .kh-reveal,
            .kh-card-reveal {

                opacity: 1;

                transform:
                    none;

                transition: none;
            }

            body.kh-page-ready
            .hero .eyebrow,
            body.kh-page-ready
            .hero h1 span,
            body.kh-page-ready
            .hero h1 strong,
            body.kh-page-ready
            .hero h1 em,
            body.kh-page-ready
            .hero h1 small,
            body.kh-page-ready
            .hero .hero-tagline,
            body.kh-page-ready
            .hero .hero-description,
            body.kh-page-ready
            .hero .hero-actions,
            body.kh-page-ready
            .hero .hero-bottom {

                opacity: 1;

                transform:
                    none;

                animation: none;
            }

        }

    `;

    document.head.appendChild(
        interactionStyles
    );


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function updateNavbar() {

        if (!navbar) return;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 24
        );

    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function updateProgress() {

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) {

            progressBar.style.width =
                "0%";

            return;
        }

        const progress =
            (
                window.scrollY /
                documentHeight
            ) * 100;

        progressBar.style.width =
            `${Math.min(100, Math.max(0, progress))}%`;

    }


    /* =====================================================
       BACK TO TOP VISIBILITY
    ===================================================== */

    function updateBackToTop() {

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 500
        );

    }


    /* =====================================================
       BACK TO TOP ACTION
    ===================================================== */

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,

                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"
            });

        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {

        if (
            !mobileMenu ||
            !menuBackdrop ||
            !menuToggle
        ) {
            return;
        }

        mobileMenu.classList.add("open");

        menuBackdrop.classList.add("open");

        menuToggle.classList.add("open");

        document.body.classList.add(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        menuBackdrop.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    function closeMenu() {

        if (
            !mobileMenu ||
            !menuBackdrop ||
            !menuToggle
        ) {
            return;
        }

        mobileMenu.classList.remove("open");

        menuBackdrop.classList.remove("open");

        menuToggle.classList.remove("open");

        document.body.classList.remove(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        menuBackdrop.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu &&
                    mobileMenu.classList.contains(
                        "open"
                    );

                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }


    if (menuBackdrop) {

        menuBackdrop.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    function getHeaderOffset() {

        if (!navbar) {
            return 0;
        }

        return navbar.offsetHeight + 12;

    }


    function scrollToTarget(targetId) {

        const target =
            document.getElementById(
                targetId
            );

        if (!target) {
            return;
        }

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            getHeaderOffset();

        window.scrollTo({

            top:
                Math.max(
                    0,
                    targetPosition
                ),

            behavior:
                prefersReducedMotion
                    ? "auto"
                    : "smooth"

        });

    }


    function handleNavigationClick(
        event
    ) {

        const link =
            event.currentTarget;

        const href =
            link.getAttribute("href");

        if (
            !href ||
            !href.startsWith("#") ||
            href === "#"
        ) {
            return;
        }

        const targetId =
            href.substring(1);

        const target =
            document.getElementById(
                targetId
            );

        if (!target) {
            return;
        }

        event.preventDefault();

        closeMenu();

        scrollToTarget(
            targetId
        );

    }


    desktopLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                handleNavigationClick
            );

        }
    );


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                handleNavigationClick
            );

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function setActiveSection(
        sectionId
    ) {

        desktopLinks.forEach(
            link => {

                const matches =
                    link.getAttribute("href") ===
                    `#${sectionId}`;

                link.classList.toggle(
                    "active",
                    matches
                );

            }
        );


        mobileLinks.forEach(
            link => {

                const matches =
                    link.getAttribute("href") ===
                    `#${sectionId}`;

                link.classList.toggle(
                    "active",
                    matches
                );

            }
        );

    }


    function updateActiveSection() {

        if (!sections.length) {
            return;
        }

        const headerHeight =
            navbar
                ? navbar.offsetHeight
                : 0;

        const marker =
            window.scrollY +
            headerHeight +
            Math.min(
                window.innerHeight * 0.28,
                220
            );


        let currentSection =
            "home";


        for (
            let i = 0;
            i < sections.length;
            i++
        ) {

            const section =
                sections[i];

            if (
                marker >=
                section.offsetTop
            ) {

                currentSection =
                    section.id;

            } else {

                break;

            }

        }


        if (
            currentSection ===
            "register"
        ) {

            currentSection =
                "rules";

        }


        setActiveSection(
            currentSection
        );

    }


    /* =====================================================
       SCROLL REVEAL SETUP
    ===================================================== */

    function prepareRevealElements() {

        /*
         * Section headings
         */

        const headings =
            document.querySelectorAll(
                ".section-heading"
            );

        headings.forEach(
            element => {

                element.classList.add(
                    "kh-reveal"
                );

            }
        );


        /*
         * Main content blocks
         */

        const contentBlocks =
            document.querySelectorAll(
                `
                .about-main,
                .format-flow,
                .format-features,
                .schedule-grid,
                .venue-banner,
                .prize-total,
                .prize-grid,
                .rules-grid,
                .register-content,
                .footer-main
                `
            );

        contentBlocks.forEach(
            element => {

                element.classList.add(
                    "kh-reveal"
                );

            }
        );


        /*
         * Cards
         */

        const cards =
            document.querySelectorAll(
                `
                .stat-card,
                .title-card,
                .format-step,
                .feature-card,
                .schedule-card,
                .prize-card,
                .rule
                `
            );

        cards.forEach(
            element => {

                element.classList.add(
                    "kh-card-reveal"
                );

            }
        );


        return [
            ...document.querySelectorAll(
                ".kh-reveal, .kh-card-reveal"
            )
        ];

    }


    /* =====================================================
       REVEAL OBSERVER
    ===================================================== */

    function setupRevealObserver() {

        const revealElements =
            prepareRevealElements();

        if (
            !revealElements.length
        ) {
            return;
        }


        if (
            prefersReducedMotion ||
            !("IntersectionObserver" in window)
        ) {

            revealElements.forEach(
                element => {

                    element.classList.add(
                        "kh-visible"
                    );

                }
            );

            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "kh-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       STAGGER CARD ANIMATIONS
    ===================================================== */

    function setupCardStagger() {

        const groups = [

            ".stats-section",

            ".title-grid",

            ".format-features",

            ".schedule-grid",

            ".prize-grid",

            ".rules-grid"

        ];


        groups.forEach(
            selector => {

                const group =
                    document.querySelector(
                        selector
                    );

                if (!group) {
                    return;
                }


                const cards =
                    group.querySelectorAll(
                        ".kh-card-reveal"
                    );


                cards.forEach(
                    (card, index) => {

                        card.style.transitionDelay =
                            `${Math.min(
                                index * 0.08,
                                0.36
                            )}s`;

                    }
                );

            }
        );

    }


    /* =====================================================
       INITIAL PAGE ANIMATION
    ===================================================== */

    function startPageAnimation() {

        /*
         * Add class on next frame.
         *
         * This guarantees that the browser
         * sees the initial state before
         * starting the animation.
         */

        requestAnimationFrame(
            () => {

                requestAnimationFrame(
                    () => {

                        document.body.classList.add(
                            "kh-page-ready"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       COMBINED SCROLL HANDLER
    ===================================================== */

    let ticking =
        false;


    function handleScroll() {

        if (ticking) {
            return;
        }

        ticking =
            true;


        window.requestAnimationFrame(
            () => {

                updateNavbar();

                updateProgress();

                updateBackToTop();

                updateActiveSection();

                ticking =
                    false;

            }
        );

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900
            ) {

                closeMenu();

            }

            updateProgress();

            updateActiveSection();

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    setupRevealObserver();

    setupCardStagger();

    updateNavbar();

    updateProgress();

    updateBackToTop();

    updateActiveSection();

    startPageAnimation();


})();


/* =====================================================
   VERSION 1 — REQUESTED COMPONENT CONTROLLERS ONLY
   Brackets + Schedule Flow/Directions + Prize Details.
===================================================== */
(function(){
    "use strict";
/* =====================================================
       TOURNAMENT BRACKETS — RELIABLE TOUCH / CLICK CONTROL
       This block is intentionally isolated so the original
       website interactions remain unchanged.
    ===================================================== */

    const bracketTabs = Array.from(
        document.querySelectorAll(".bracket-tab")
    );

    const bracketPanels = Array.from(
        document.querySelectorAll(".bracket-panel")
    );

    const bracketToggles = Array.from(
        document.querySelectorAll(".bracket-accordion-toggle")
    );

    function setBracket(title) {

        bracketTabs.forEach(tab => {

            const active =
                tab.dataset.bracketTab === title;

            tab.classList.toggle("active", active);

            tab.setAttribute(
                "aria-selected",
                active ? "true" : "false"
            );

        });

        bracketPanels.forEach(panel => {

            const active =
                panel.dataset.bracketPanel === title;

            panel.hidden = !active;

            panel.classList.toggle("active", active);

        });

    }

    function toggleBracketStage(toggle) {

        const targetId =
            toggle.getAttribute("aria-controls");

        const target =
            targetId
                ? document.getElementById(targetId)
                : null;

        if (!target) return;

        const open =
            toggle.getAttribute("aria-expanded") === "true";

        const nextState = !open;

        toggle.setAttribute(
            "aria-expanded",
            nextState ? "true" : "false"
        );

        target.hidden = !nextState;

    }

    bracketTabs.forEach(tab => {

        tab.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            setBracket(
                tab.dataset.bracketTab
            );

        });

    });

    bracketToggles.forEach(toggle => {

        toggle.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            toggleBracketStage(toggle);

        });

    });

    /* Clean initial state: HOK selected; both stages closed. */

    if (bracketTabs.length) {

        setBracket("hok");

    }

    bracketToggles.forEach(toggle => {

        toggle.setAttribute("aria-expanded", "false");

        const targetId =
            toggle.getAttribute("aria-controls");

        const target =
            targetId
                ? document.getElementById(targetId)
                : null;

        if (target) {
            target.hidden = true;
        }

    });
/* =====================================================
   VENUE NAVIGATION MODAL — STABLE CONTROLLER
===================================================== */

const venueNavigationButton = document.getElementById("venueNavigationButton");
const venueNavigationModal = document.getElementById("venueNavigationModal");
const venueNavigationClose = document.getElementById("venueNavigationClose");
const venueNavigationBackdrop = venueNavigationModal
    ? venueNavigationModal.querySelector("[data-close-venue-navigation]")
    : null;

let venueNavigationOpen = false;

function openVenueNavigation() {
    if (!venueNavigationModal) return;
    venueNavigationOpen = true;
    venueNavigationModal.hidden = false;
    venueNavigationModal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("venue-navigation-html-open");
    document.body.classList.add("venue-navigation-open");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => venueNavigationModal.classList.add("open"));
    });
}

function closeVenueNavigation() {
    if (!venueNavigationModal || !venueNavigationOpen) return;
    venueNavigationOpen = false;
    venueNavigationModal.classList.remove("open");
    venueNavigationModal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("venue-navigation-html-open");
    document.body.classList.remove("venue-navigation-open");
    window.setTimeout(() => {
        if (!venueNavigationOpen) venueNavigationModal.hidden = true;
    }, 380);
}

if (venueNavigationButton) {
    venueNavigationButton.addEventListener("click", (event) => {
        event.preventDefault();
        openVenueNavigation();
    });
}
if (venueNavigationClose) venueNavigationClose.addEventListener("click", closeVenueNavigation);
if (venueNavigationBackdrop) venueNavigationBackdrop.addEventListener("click", closeVenueNavigation);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && venueNavigationOpen) closeVenueNavigation();
});
})();

/* =====================================================
   TENTATIVE FLOW MODAL — STABLE CONTROLLER
===================================================== */
(function () {
    "use strict";

    const button = document.getElementById("tentativeFlowButton");
    const modal = document.getElementById("tentativeFlowModal");
    const closeButton = document.getElementById("tentativeFlowClose");
    const dayTab1 = document.getElementById("tentativeFlowDay1");
    const dayTab2 = document.getElementById("tentativeFlowDay2");
    const dayPanel1 = document.getElementById("tentativeFlowDayPanel1");
    const dayPanel2 = document.getElementById("tentativeFlowDayPanel2");
    const dayAttendance = document.getElementById("tentativeFlowAttendance");
    const flowBody = modal ? modal.querySelector(".tentative-flow-body") : null;

    if (!button || !modal || !closeButton || !dayTab1 || !dayTab2 || !dayPanel1 || !dayPanel2 || !dayAttendance || !flowBody) return;

    // Keep a completely independent scroll position for each day.
    // Switching Day 1 ↔ Day 2 must never inherit the previous day's
    // scroll position.
    const dayScrollPositions = { 1: 0, 2: 0 };

    const backdrop = modal.querySelector("[data-close-tentative-flow]");
    let closeTimer = null;
    let isOpen = false;
    let isClosing = false;

    function lockPage() {
        document.documentElement.classList.add("tentative-flow-html-open");
        document.body.classList.add("tentative-flow-open");
    }

    function unlockPage() {
        document.documentElement.classList.remove("tentative-flow-html-open");
        document.body.classList.remove("tentative-flow-open");
    }

    function switchTentativeDay(day) {
        // Save the current day's position before switching.
        const currentDay = dayPanel1.classList.contains("is-active") ? 1 : 2;
        if (!dayPanel1.hidden && !dayPanel2.hidden) {
            dayScrollPositions[currentDay] = flowBody.scrollTop;
        } else if (!dayPanel1.hidden) {
            dayScrollPositions[1] = flowBody.scrollTop;
        } else if (!dayPanel2.hidden) {
            dayScrollPositions[2] = flowBody.scrollTop;
        }

        const isDay1 = day === 1;
        const activeTab = isDay1 ? dayTab1 : dayTab2;
        const inactiveTab = isDay1 ? dayTab2 : dayTab1;
        const activePanel = isDay1 ? dayPanel1 : dayPanel2;
        const inactivePanel = isDay1 ? dayPanel2 : dayPanel1;

        activeTab.classList.add("is-active");
        inactiveTab.classList.remove("is-active");
        activeTab.setAttribute("aria-selected", "true");
        inactiveTab.setAttribute("aria-selected", "false");

        inactivePanel.classList.remove("is-active");
        inactivePanel.hidden = true;
        activePanel.hidden = false;

        // Day 2 attendance is a standalone notice shown above the Day 2 flow.
        dayAttendance.hidden = isDay1;

        /* Restart only the panel transition, without moving the page. */
        activePanel.classList.remove("is-active");
        void activePanel.offsetWidth;
        activePanel.classList.add("is-active");

        // Restore only the selected day's own scroll position.
        // This prevents Day 2 from opening at Day 1's bottom (and vice versa).
        requestAnimationFrame(() => {
            flowBody.scrollTop = dayScrollPositions[day] || 0;
        });
    }

    dayTab1.addEventListener("click", () => switchTentativeDay(1));
    dayTab2.addEventListener("click", () => switchTentativeDay(2));

    function openTentativeFlow() {
        if (isOpen && !isClosing) return;

        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }

        isOpen = true;
        isClosing = false;

        switchTentativeDay(1);

        modal.hidden = false;
        modal.classList.remove("closing-complete");
        modal.setAttribute("aria-hidden", "false");
        lockPage();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (isOpen && !isClosing) {
                    modal.classList.add("open");
                }
            });
        });
    }

    function finishClose() {
        if (!isClosing) return;

        isClosing = false;
        isOpen = false;

        modal.classList.remove("open", "closing-complete");
        modal.hidden = true;
        modal.setAttribute("aria-hidden", "true");
        unlockPage();
        closeTimer = null;
    }

    function closeTentativeFlow() {
        if (!isOpen || isClosing) return;

        isClosing = true;
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        /*
           Keep the modal layer mounted and the document locked for the
           entire exit transition. Crucially, there is only ONE close
           controller and ONE state transition, so the modal cannot briefly
           re-open during Safari's repaint cycle.
        */
        closeTimer = window.setTimeout(finishClose, 420);
    }

    button.addEventListener("click", openTentativeFlow);
    closeButton.addEventListener("click", closeTentativeFlow);

    if (backdrop) {
        backdrop.addEventListener("click", closeTentativeFlow);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && isOpen && !isClosing) {
            closeTentativeFlow();
        }
    });

    modal.hidden = true;
    modal.classList.remove("open", "closing-complete");
    modal.setAttribute("aria-hidden", "true");
})();

/* =====================================================
   DETAILED PRIZE POOL MODAL — STABLE CONTROLLER
===================================================== */
(function () {
    "use strict";

    const button = document.getElementById("prizeDetailsButton");
    const modal = document.getElementById("prizeDetailsModal");
    const closeButton = document.getElementById("prizeDetailsClose");
    const backdrop = modal
        ? modal.querySelector("[data-close-prize-details]")
        : null;

    const tabHok = document.getElementById("prizeTabHok");
    const tabMlbb = document.getElementById("prizeTabMlbb");
    const panelHok = document.getElementById("prizePanelHok");
    const panelMlbb = document.getElementById("prizePanelMlbb");

    if (!button || !modal || !closeButton || !tabHok || !tabMlbb || !panelHok || !panelMlbb) {
        return;
    }

    let isOpen = false;

    function lockPage() {
        document.documentElement.classList.add("prize-details-html-open");
        document.body.classList.add("prize-details-page-open");
    }

    function unlockPage() {
        document.documentElement.classList.remove("prize-details-html-open");
        document.body.classList.remove("prize-details-page-open");
    }

    function selectTitle(title) {
        const hok = title === "hok";

        tabHok.classList.toggle("is-active", hok);
        tabMlbb.classList.toggle("is-active", !hok);

        tabHok.setAttribute("aria-selected", hok ? "true" : "false");
        tabMlbb.setAttribute("aria-selected", hok ? "false" : "true");

        panelHok.classList.toggle("is-active", hok);
        panelMlbb.classList.toggle("is-active", !hok);

        panelHok.hidden = !hok;
        panelMlbb.hidden = hok;
    }

    function openPrizeDetails() {
        if (isOpen) return;

        isOpen = true;
        selectTitle("hok");

        modal.hidden = false;
        modal.setAttribute("aria-hidden", "false");
        modal.classList.remove("closing-complete");
        lockPage();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (isOpen) {
                    modal.classList.add("open");
                }
            });
        });
    }

    function closePrizeDetails() {
        if (!isOpen) return;

        isOpen = false;
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        window.setTimeout(() => {
            if (!isOpen) {
                modal.hidden = true;
                unlockPage();
            }
        }, 300);
    }

    button.addEventListener("click", function (event) {
        event.preventDefault();
        openPrizeDetails();
    });

    tabHok.addEventListener("click", function () {
        selectTitle("hok");
    });

    tabMlbb.addEventListener("click", function () {
        selectTitle("mlbb");
    });

    closeButton.addEventListener("click", closePrizeDetails);

    if (backdrop) {
        backdrop.addEventListener("click", closePrizeDetails);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && isOpen) {
            closePrizeDetails();
        }
    });

    modal.hidden = true;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
})();

/* =========================================================
   v73 — SINGLE SHARED ICON STATE
   All three in-page modal buttons use one icon state model.
   Tentative Flow remains visually/reference-correct.
========================================================= */
(function(){
  "use strict";

  const CLOSE_MS = 420;

  function setIconState(button, open){
    if(!button) return;
    const icon = button.querySelector(":scope > span");
    if(!icon) return;

    if(open){
      icon.classList.add("shared-modal-icon-open");
    }else{
      icon.classList.remove("shared-modal-icon-open");
    }
  }

  function bindModalButton(buttonId, modalId, closeSelector){
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);
    if(!button || !modal) return;

    const closeControls = modal.querySelectorAll(closeSelector);

    closeControls.forEach(function(control){
      control.addEventListener("click", function(){
        /*
         * Capture the current × state before the original modal close code
         * changes its state. The icon is therefore not allowed to transition
         * while the popup itself is closing.
         */
        setIconState(button, true);

        window.setTimeout(function(){
          /*
           * Release at the same close boundary used by Tentative Flow.
           * The browser gets a fresh paint before the transition begins.
           */
          requestAnimationFrame(function(){
            setIconState(button, false);
          });
        }, CLOSE_MS);
      }, true);
    });
  }

  bindModalButton(
    "venueNavigationButton",
    "venueNavigationModal",
    "#venueNavigationClose,[data-close-venue-navigation]"
  );

  bindModalButton(
    "prizeDetailsButton",
    "prizeDetailsModal",
    "#prizeDetailsClose,[data-close-prize-details]"
  );
})();
