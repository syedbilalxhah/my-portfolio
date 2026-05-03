(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [587],
    {
        75418: function (e, s, i) {
            Promise.resolve().then(i.bind(i, 10881)),
                Promise.resolve().then(i.bind(i, 97629)),
                Promise.resolve().then(i.bind(i, 41144)),
                Promise.resolve().then(i.bind(i, 95167)),
                Promise.resolve().then(i.bind(i, 85789)),
                Promise.resolve().then(i.bind(i, 47723)),
                Promise.resolve().then(i.bind(i, 84560)),
                Promise.resolve().then(i.bind(i, 40539)),
                Promise.resolve().then(i.bind(i, 72744)),
                Promise.resolve().then(i.bind(i, 39048)),
                Promise.resolve().then(i.bind(i, 43431));
        },
        10881: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(66648);
            s.default = () =>
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        id: "about",
                        className: "about-area border-bottom-two three ptb-100",
                        children: (0, a.jsx)("div", {
                            className: "container align-items-center",
                            children: (0, a.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    (0, a.jsx)("div", {
                                        className: "col-lg-5",
                                        children: (0, a.jsx)("div", {
                                            className: "about-img-three",
                                            children: (0, a.jsx)(l.default, {
                                                src: "static/images/my-image.webp",
                                                alt: "about-image",
                                                width: 312,
                                                height: 548,
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: "col-lg-7",
                                        children: (0, a.jsxs)("div", {
                                            className: "about-content",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "section-title three",
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: "sub-title",
                                                            children: "ABOUT ME",
                                                        }),
                                                        (0, a.jsx)("h2", {
                                                            children:
                                                                "What Can I Do !",
                                                        }),
                                                        (0, a.jsx)("p", {
                                                            children:
                                                                "I'm a Full Stack Developer. I specialize in taking complex backend logics like databases, user authentication, server-side processing  and turning it into smooth, efficient, and reliable systems. I build custom websites, powerful admin panels, and scalable web applications that are secure, fast, and easy to maintain.",
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: "col-lg-6",
                                                            children: (0, a.jsx)("div", {
                                                                className: "left",
                                                                children: (0, a.jsxs)("ul", {
                                                                    children: [
                                                                        (0, a.jsxs)("li", {
                                                                            children: [
                                                                                (0, a.jsx)("span", {
                                                                                    children: "Age:",
                                                                                }),
                                                                                "24 Years",
                                                                            ],
                                                                        }),
                                                                        (0, a.jsxs)("li", {
                                                                            children: [
                                                                                (0, a.jsx)("span", {
                                                                                    children: "Residence:",
                                                                                }),
                                                                                "Pakistan",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: "col-lg-6",
                                                            children: (0, a.jsx)("div", {
                                                                className: "right",
                                                                children: (0, a.jsxs)("ul", {
                                                                    children: [
                                                                        (0, a.jsxs)("li", {
                                                                            children: [
                                                                                (0, a.jsx)("span", {
                                                                                    children: "Phone:",
                                                                                }),
                                                                                (0, a.jsx)("a", {
                                                                                    href: "tel:+923314070426",
                                                                                    children: "+92 331 4070426",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, a.jsxs)("li", {
                                                                            children: [
                                                                                (0, a.jsx)("span", {
                                                                                    children: "Email:",
                                                                                }),
                                                                                (0, a.jsx)("a", {
                                                                                    href: "mailto:syedbilal10ua@gamail.com",
                                                                                    children: "syedbilal10ua@gmail.com",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
        },
        97629: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(87138),
                r = i(66648);
            s.default = () => null;
        },
41144: function (e, s, i) {
    "use strict";
    var a = i(57437);
    i(2265);
    
    // WhatsApp direct open function
    const openWhatsApp = () => {
        const phoneNumber = "923314070426";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}`;
        } else {
            window.open(`https://wa.me/${phoneNumber}`, "_blank");
        }
    };
    
    // Email send karne ka function
    const sendEmail = async (formData) => {
        try {
            const response = await fetch('https://formsubmit.co/ajax/syedbilal10ua@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    phone: formData.get('number'),
                    message: formData.get('text'),
                })
            });
            
            if (response.ok) {
                Swal.mixin({
                    title: 'Dark theme',
                    theme: 'dark',
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                }).fire({
                    icon: "success",
                    title: "Message sent successfully!"
                });
                document.getElementById('contactForm').reset();
            } else {
                Swal.mixin({
                    title: 'Dark theme',
                    theme: 'dark',
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                }).fire({
                    icon: "error",
                    title: "Something went wrong!"
                });
            }
        } catch (error) {
            Swal.mixin({
                title: 'Dark theme',
                theme: 'dark',
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            }).fire({
                icon: "error",
                title: "Network error!"
            });
        }
    };
    
    s.default = () =>
        (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
                id: "contact",
                className: "contact-area three border-bottom-two pt-100 pb-70",
                children: (0, a.jsxs)("div", {
                    className: "container",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "section-title three",
                            children: [
                                (0, a.jsx)("span", { className: "sub-title", children: "CONTACT" }),
                                (0, a.jsx)("h2", {
                                    children: "Have a project? Drop A Line Here and let's build something great.",
                                }),
                                (0, a.jsx)("p", {
                                    children: "I'm available for freelance work and full-time projects. Whether you have a clear idea or just a rough concept reach out, and let's discuss how I can help.",
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                (0, a.jsx)("div", {
                                    className: "col-md-7 col-lg-6",
                                    children: (0, a.jsxs)("form", {
                                        id: "contactForm",
                                        onSubmit: (e) => {
                                            e.preventDefault();
                                            const formData = new FormData(e.target);
                                            sendEmail(formData);
                                        },
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: "form-group",
                                                children: (0, a.jsx)("input", {
                                                    type: "text",
                                                    name: "name",
                                                    className: "form-control",
                                                    placeholder: "Name",
                                                    required: true,
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "form-group",
                                                children: (0, a.jsx)("input", {
                                                    type: "email",
                                                    name: "email",
                                                    className: "form-control",
                                                    placeholder: "Email",
                                                    required: true,
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "form-group",
                                                children: (0, a.jsx)("input", {
                                                    type: "text",
                                                    name: "subject",
                                                    className: "form-control",
                                                    placeholder: "Subject",
                                                    required: true,
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "form-group",
                                                children: (0, a.jsx)("input", {
                                                    type: "text",
                                                    name: "number",
                                                    className: "form-control",
                                                    placeholder: "Phone",
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "form-group",
                                                children: (0, a.jsx)("textarea", {
                                                    name: "text",
                                                    className: "form-control",
                                                    cols: "30",
                                                    rows: "6",
                                                    placeholder: "Write message",
                                                    required: true,
                                                }),
                                            }),
                                            (0, a.jsxs)("button", {
                                                type: "submit",
                                                className: "btn common-btn three",
                                                children: ["Send Message ", (0, a.jsx)("span", {})],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: "col-md-5 col-lg-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "contact-content",
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: "top",
                                                children: (0, a.jsxs)("ul", {
                                                    children: [
                                                        (0, a.jsxs)("li", {
                                                            children: [
                                                                (0, a.jsx)("span", { children: "Phone:" }),
                                                                (0, a.jsx)("a", {
                                                                    href: "tel:+923314070426",
                                                                    children: "+92 331 4070426",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, a.jsxs)("li", {
                                                            children: [
                                                                (0, a.jsx)("span", { children: "Email:" }),
                                                                (0, a.jsx)("a", {
                                                                    href: "mailto:syedbilal10ua@gmail.com",
                                                                    children: "syedbilal10ua@gmail.com",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, a.jsxs)("li", {
                                                            children: [
                                                                (0, a.jsx)("span", { children: "Website:" }),
                                                                (0, a.jsx)("a", {
                                                                    href: "https://syedbilalxhan.github.io/my-portfolio/",
                                                                    target: "_blank",
                                                                    children: "syedbilalxhan.github.io/my-portfolio",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, a.jsxs)("li", {
                                                            children: [
                                                                (0, a.jsx)("span", { children: "Residence:" }),
                                                                (0, a.jsx)("a", {
                                                                    href: "#",
                                                                    target: "_blank",
                                                                    children: "Pakistan",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "bottom",
                                                children: (0, a.jsxs)("ul", {
                                                    children: [
                                                        // WhatsApp - Direct open (Mobile app, Desktop web)
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)("a", {
                                                                href: "#",
                                                                onClick: (e) => {
                                                                    e.preventDefault();
                                                                    openWhatsApp();
                                                                },
                                                                style: { cursor: "pointer" },
                                                                children: (0, a.jsx)("i", { className: "bx bxl-whatsapp" }),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)("a", {
                                                                href: "https://www.linkedin.com/in/syed-bilal26/",
                                                                target: "_blank",
                                                                children: (0, a.jsx)("i", { className: "bx bxl-linkedin" }),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)("a", {
                                                                href: "https://syedbilalxhah.github.io/my-portfolio/",
                                                                target: "_blank",
                                                                children: (0, a.jsx)("i", { className: "bx bx-globe" }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
},
        95167: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(87138);
            s.default = () => null;
            },
        85789: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265),
                (s.default = () => {
                    let e = new Date().getFullYear();
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: "copyright-area three",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                    className: "copyright-item",
                                    children: (0, a.jsxs)("p", {
                                        children: [
                                            "Copyright @",
                                            e,
                                            " Developed by",
                                            " ",
                                            (0, a.jsx)("a", {
                                                href: "https://syedbilalxhah.github.io/my-portfolio/",
                                                target: "_blank",
                                                children: "Muhammad Bilal",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    });
                });
        },
        47723: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(87138);
            s.default = () =>
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        id: "home",
                        className: "banner-area border-bottom-two three",
                        children: [
                            (0, a.jsx)("div", {
                                className: "common-right-text-two",
                                children: (0, a.jsxs)("span", {
                                    children: [
                                        "Reton ",
                                        (0, a.jsx)("br", {}),
                                        " MILANOS ",
                                        (0, a.jsx)("br", {}),
                                        " HIGHLY ",
                                        (0, a.jsx)("br", {}),
                                        " EXPERIENCED ",
                                        (0, a.jsx)("br", {}),
                                        " WEB",
                                        " ",
                                        (0, a.jsx)("br", {}),
                                        " DEVELOPER",
                                    ],
                                }),
                            }),
                            (0, a.jsx)("div", {
                                className: "d-table",
                                children: (0, a.jsx)("div", {
                                    className: "d-table-cell",
                                    children: (0, a.jsx)("div", {
                                        className: "container",
                                        children: (0, a.jsxs)("div", {
                                            className: "banner-content",
                                            children: [
                                                (0, a.jsxs)("h1", {
                                                    children: [(0, a.jsx)("span", { children: "Muhammad" }), " Bilal"],
                                                }),
                                                (0, a.jsxs)("p", {
                                                    children: [
                                                        "Hello I am a ",
                                                        (0, a.jsx)("span", { children: "Full Stack Web Developer" }),
                                                        " who builds real things and transforms your ideas into cutting-edge web solutions. I craft high performance web applications tailored to your business. My code is secure and actually maintainable. Tell me what you need and I'll make it happen.",
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: "banner-btn-area",
                                                    children: [
                                                        (0, a.jsx)(l.default, {
                                                            href: "#contact",
                                                            className: "common-btn three",
                                                            children: "Contact With Me",
                                                        }),
                                                        (0, a.jsx)(l.default, {
                                                            href: "#contact",
                                                            className: "common-btn banner-btn three",
                                                            children: "Hire Me",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
        },
84560: function (e, s, i) {
    "use strict";
    var a = i(57437),
        l = i(2265),
        r = i(87138),
        n = i(15326),
        t = i.n(n),
        c = i(84666),
        d = i(66648);
    s.default = () => {
        let [e, s] = (0, l.useState)(!0),
            [i, n] = (0, l.useState)(!1),
            o = () => {
                s(!e);
            },
            h = () => {
                n(!i);
            };
        (0, l.useEffect)(() => {
            let e = document.getElementById("navbar"),
                s = () => {
                    window.scrollY > 170 ? e.classList.add("is-sticky") : e.classList.remove("is-sticky");
                };
            return (
                document.addEventListener("scroll", s),
                window.scrollTo(0, 0),
                m(),
                () => {
                    document.removeEventListener("scroll", s);
                }
            );
        }, []);
        let m = () => {
            let e = document.querySelectorAll(".navbar-nav li a"),
                s = () => {
                    let s = window.scrollY;
                    e.forEach((e) => {
                        if (e.hash) {
                            let i = document.querySelector(e.hash);
                            i.offsetTop <= s && i.offsetTop + i.offsetHeight > s
                                ? e.classList.add("active")
                                : e.classList.remove("active");
                        }
                    });
                };
            return (
                window.addEventListener("scroll", s),
                () => {
                    window.removeEventListener("scroll", s);
                }
            );
        };
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("nav", {
                    id: "navbar",
                    className: "navbar navbar-expand-lg pufo-aside bg-0f1d22",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, a.jsx)(r.default, {
                                href: "/home-3",
                                className: "navbar-brand logo",
                                children: (0, a.jsx)(d.default, {
                                    src: "static/images/logo.webp",
                                    alt: "logo",
                                    width: 300,
                                    height: 180,
                                }),
                            }),
                            (0, a.jsxs)("button", {
                                onClick: o,
                                className: e
                                    ? "navbar-toggler navbar-toggler-right collapsed"
                                    : "navbar-toggler navbar-toggler-right",
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navbarSupportedContent",
                                "aria-controls": "navbarSupportedContent",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                    (0, a.jsx)("span", { className: "icon-bar top-bar" }),
                                    (0, a.jsx)("span", { className: "icon-bar middle-bar" }),
                                    (0, a.jsx)("span", { className: "icon-bar bottom-bar" }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: e ? "collapse navbar-collapse" : "navbar-collapse collapse show",
                                id: "navbarSupportedContent",
                                children: [
                                    (0, a.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            (0, a.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, a.jsx)(t(), {
                                                    onClick: o,
                                                    offset: () => 100,
                                                    className: "nav-link active",
                                                    href: "#home",
                                                    children: "Home",
                                                }),
                                            }),
                                            (0, a.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, a.jsx)(t(), {
                                                    onClick: o,
                                                    offset: () => -1,
                                                    className: "nav-link",
                                                    href: "#about",
                                                    children: "About",
                                                }),
                                            }),
                                            (0, a.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, a.jsx)(t(), {
                                                    onClick: o,
                                                    offset: () => -1,
                                                    className: "nav-link",
                                                    href: "#portfolio",
                                                    children: "Portfolio",
                                                }),
                                            }),
                                            (0, a.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, a.jsx)(t(), {
                                                    onClick: o,
                                                    offset: () => -1,
                                                    className: "nav-link",
                                                    href: "#skills",
                                                    children: "Skills",
                                                }),
                                            }),
                                            (0, a.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, a.jsx)(t(), {
                                                    onClick: o,
                                                    offset: () => -1,
                                                    className: "nav-link",
                                                    href: "#contact",
                                                    children: "Contact",
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "aside-footer",
                                        children: [
                                            // Download Resume Button
                                            (0, a.jsxs)(r.default, {
                                                href: "static/images/Syed Bilal Resume.pdf",
                                                target: "_blank",
                                                download: true,
                                                className: "common-btn three",
                                                children: [
                                                    "Download Resume ",
                                                    (0, a.jsx)("i", { className: "bx bxs-download" }),
                                                ],
                                            }),
                                            // SOCIAL LINKS - CORRECTED
                                            (0, a.jsxs)("ul", {
                                                className: "social",
                                                children: [
                                                    // WhatsApp - Direct open (Mobile app, Desktop web)
                                                    (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "#",
                                                            onClick: (e) => {
                                                                e.preventDefault();
                                                                const phoneNumber = "923314070426";
                                                                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                                                                if (isMobile) {
                                                                    window.location.href = `whatsapp://send?phone=${phoneNumber}`;
                                                                } else {
                                                                    window.open(`https://wa.me/${phoneNumber}`, "_blank");
                                                                }
                                                            },
                                                            style: { cursor: "pointer" },
                                                            target: "_blank",
                                                            children: (0, a.jsx)("i", { className: "bx bxl-whatsapp" }),
                                                        }),
                                                    }),
                                                    // LinkedIn
                                                    (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.linkedin.com/in/syed-bilal26/",
                                                            target: "_blank",
                                                            children: (0, a.jsx)("i", { className: "bx bxl-linkedin" }),
                                                        }),
                                                    }),
                                                    // Website / Portfolio
                                                    (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://syedbilalxhah.github.io/my-portfolio/",
                                                            target: "_blank",
                                                            children: (0, a.jsx)("i", { className: "bx bx-globe" }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: "demo-side-icon",
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: "modal-btn",
                        onClick: h,
                        children: (0, a.jsx)("span", { children: "Demos" }),
                    }),
                }),
                (0, a.jsx)(c.Z, { onClick: h, active: i ? "show" : "" }),
            ],
        });
    };
},
40539: function (e, s, i) {
    "use strict";
    var a = i(57437);
    var l = i(2265);
    var r = i(87138);
    var n = i(66648);
    
    s.default = () => {
        let [selectedProject, setSelectedProject] = (0, l.useState)(null);
        let [isAnimating, setIsAnimating] = (0, l.useState)(false);
        let [currentImageIndex, setCurrentImageIndex] = (0, l.useState)(0);
        
        let closeModal = () => {
            if (isAnimating) return;
            setIsAnimating(true);
            setTimeout(() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
                setIsAnimating(false);
                document.body.style.overflow = "auto";
            }, 300);
        };
        
        let openProject = (project) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setSelectedProject(project);
            setCurrentImageIndex(0);
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                setIsAnimating(false);
            }, 400);
        };
        
        // Next image function
        let nextImage = () => {
            if (selectedProject && selectedProject.images) {
                setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
            }
        };
        
        // Previous image function
        let prevImage = () => {
            if (selectedProject && selectedProject.images) {
                setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
            }
        };
        
        let projects = [
            {
                id: 1,
                title: "Furniture Website",
                category: "Logo",
                image: "static/images/coffee.jpg",
                fullImage: "static/images/coffee.jpg",
                images: [
                    "static/images/banner.jpg",
                    "static/images/coffee.jpg",
                    "/images/work/work-details3.jpg"
                ],
                img2: "/images/work/work-details2.jpg",
                img3: "/images/work/work-details3.jpg",
                client: "Furnish Furniture Co.",
                clientAddress: "152 san Francisco, USA",
                dateStart: "15th, September 2020",
                dateEnd: "6th, October 2020",
                categories: ["Website Design", "Website Development"],
                roles: ["User Interface & UX Design", "User Interface & UI Design"],
                description1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                description2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
            },
            {
                id: 2,
                title: "Travel App Logo Design",
                category: "App",
                image: "/images/projects/project2.jpg",
                fullImage: "/images/work/work-details2.jpg",
                images: [
                    "/images/work/work-details2.jpg",
                    "/images/work/work-details1.jpg",
                    "/images/work/work-details3.jpg"
                ],
                img2: "/images/work/work-details1.jpg",
                img3: "/images/work/work-details3.jpg",
                client: "Travel App Co.",
                clientAddress: "New York, USA",
                dateStart: "10th, January 2021",
                dateEnd: "5th, March 2021",
                categories: ["App Design", "Logo Design"],
                roles: ["UI/UX Design", "Brand Identity"],
                description1: "A unique logo design for a travel booking application.",
                description2: "Complete branding and design system for modern travel app."
            },
            {
                id: 3,
                title: "ERP Design",
                category: "Design",
                image: "/images/projects/project3.jpg",
                fullImage: "/images/work/work-details3.jpg",
                images: [
                    "/images/work/work-details3.jpg",
                    "/images/work/work-details1.jpg",
                    "/images/work/work-details2.jpg"
                ],
                img2: "/images/work/work-details1.jpg",
                img3: "/images/work/work-details2.jpg",
                client: "ERP Solutions",
                clientAddress: "London, UK",
                dateStart: "1st, June 2022",
                dateEnd: "30th, September 2022",
                categories: ["ERP Software", "Dashboard Design"],
                roles: ["Product Design", "UX Research"],
                description1: "Enterprise resource planning software with clean interface.",
                description2: "Scalable design system for complex enterprise applications."
            },
            {
                id: 4,
                title: "Restaurant Design",
                category: "Restaurant",
                image: "/images/projects/project4.jpg",
                fullImage: "/images/work/work-details1.jpg",
                images: [
                    "/images/work/work-details1.jpg",
                    "/images/work/work-details2.jpg",
                    "/images/work/work-details3.jpg"
                ],
                img2: "/images/work/work-details2.jpg",
                img3: "/images/work/work-details3.jpg",
                client: "Gourmet Restaurant",
                clientAddress: "Paris, France",
                dateStart: "15th, February 2023",
                dateEnd: "20th, April 2023",
                categories: ["Branding", "Web Design"],
                roles: ["Visual Design", "Frontend Development"],
                description1: "Complete branding and website design for a modern restaurant.",
                description2: "Interactive menu and reservation system with stunning visuals."
            }
        ];
        
        return (0, a.jsxs)(a.Fragment, {
            children: [
                // Projects Grid Section
                (0, a.jsx)("div", {
                    id: "portfolio",
                    className: "projects-area border-bottom-two ptb-100",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, a.jsxs)("div", {
                                className: "section-title three",
                                children: [
                                    (0, a.jsx)("span", { className: "sub-title", children: "PROJECTS" }),
                                    (0, a.jsx)("h2", {
                                        children: "Here Are Some Projects Which Gain A Great Success",
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: "col-sm-6 col-lg-7",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "projects-item",
                                                style: { cursor: "pointer" },
                                                onClick: () => openProject(projects[0]),
                                                children: [
                                                    (0, a.jsx)(n.default, {
                                                        src: projects[0].image,
                                                        alt: projects[0].title,
                                                        width: 518,
                                                        height: 357,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "inner",
                                                            children: [
                                                                (0, a.jsx)("h3", { children: projects[0].title }),
                                                                (0, a.jsx)("span", { children: projects[0].category }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "projects-item",
                                                style: { cursor: "pointer" },
                                                onClick: () => openProject(projects[1]),
                                                children: [
                                                    (0, a.jsx)(n.default, {
                                                        src: projects[1].image,
                                                        alt: projects[1].title,
                                                        width: 518,
                                                        height: 452,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "inner",
                                                            children: [
                                                                (0, a.jsx)("h3", { children: projects[1].title }),
                                                                (0, a.jsx)("span", { children: projects[1].category }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "col-sm-6 col-lg-5",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "projects-item two",
                                                style: { cursor: "pointer" },
                                                onClick: () => openProject(projects[2]),
                                                children: [
                                                    (0, a.jsx)(n.default, {
                                                        src: projects[2].image,
                                                        alt: projects[2].title,
                                                        width: 344,
                                                        height: 457,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "inner",
                                                            children: [
                                                                (0, a.jsx)("h3", { children: projects[2].title }),
                                                                (0, a.jsx)("span", { children: projects[2].category }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "projects-item two",
                                                style: { cursor: "pointer" },
                                                onClick: () => openProject(projects[3]),
                                                children: [
                                                    (0, a.jsx)(n.default, {
                                                        src: projects[3].image,
                                                        alt: projects[3].title,
                                                        width: 344,
                                                        height: 352,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "inner",
                                                            children: [
                                                                (0, a.jsx)("h3", { children: projects[3].title }),
                                                                (0, a.jsx)("span", { children: projects[3].category }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: "text-center",
                                children: (0, a.jsx)(r.default, {
                                    href: "/works",
                                    className: "common-btn three",
                                    target: "_blank",
                                    children: "Explore Projects",
                                }),
                            }),
                        ],
                    }),
                }),
                
                // Modal with Slider
                selectedProject && (0, a.jsxs)("div", {
                    className: "project-modal-overlay",
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#ffffff",
                        zIndex: 10000,
                        overflowY: "auto",
                        animation: "fadeInScale 0.5s ease-out"
                    },
                    children: [
                        // Close button
                        (0, a.jsx)("button", {
                            onClick: closeModal,
                            style: {
                                position: "fixed",
                                top: "9px",
                                right: "20px",
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                fontSize: "14px",
                                fontWeight: "500",
                                padding: "5px 16px",
                                borderRadius: "40px",
                                border: "1px solid #ddd",
                                cursor: "pointer",
                                zIndex: 10001,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                transition: "all 0.3s ease",
                                fontFamily: "inherit",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                            },
                            onMouseEnter: (e) => {
                                e.target.style.backgroundColor = "#f5f5f5";
                                e.target.style.transform = "translateX(-3px)";
                            },
                            onMouseLeave: (e) => {
                                e.target.style.backgroundColor = "#ffffff";
                                e.target.style.transform = "translateX(0)";
                            },
                            children: [
                                (0, a.jsx)("span", {
                                    style: { fontSize: "18px", display: "inline-block" },
                                    children: "←"
                                }),
                                " Back"
                            ]
                        }),
                        
                        // Top Header
                        (0, a.jsxs)("div", {
                            className: "top-header",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: "row align-items-center",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "col-6",
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: "logo",
                                                            children: (0, a.jsx)(n.default, {
                                                                src: "/images/logo.png",
                                                                alt: "Logo",
                                                                width: 120,
                                                                height: 36
                                                            })
                                                        })
                                                    ]
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: "col-6",
                                                    children: [
                                                        (0, a.jsxs)("ul", {
                                                            children: [
                                                                (0, a.jsx)("li", {
                                                                    children: (0, a.jsx)("a", {
                                                                        href: "#works",
                                                                        children: "Works"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        
                        // Page Title Area
                        (0, a.jsxs)("div", {
                            className: "page-title-area",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "d-table",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: "d-table-cell",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: "title-content",
                                                            children: [
                                                                (0, a.jsx)("span", { children: selectedProject.category }),
                                                                (0, a.jsx)("h1", { children: selectedProject.title }),
                                                                (0, a.jsxs)("ul", {
                                                                    children: [
                                                                        (0, a.jsx)("li", { children: (0, a.jsx)("a", { href: "/", children: "Home" }) }),
                                                                        (0, a.jsx)("li", { children: selectedProject.title })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, a.jsxs)("div", {
                                    className: "lines",
                                    children: [
                                        (0, a.jsx)("div", { className: "line" }),
                                        (0, a.jsx)("div", { className: "line" }),
                                        (0, a.jsx)("div", { className: "line" }),
                                        (0, a.jsx)("div", { className: "line" }),
                                        (0, a.jsx)("div", { className: "line" })
                                    ]
                                })
                            ]
                        }),
                        
                        // Work Details Area with Slider
                        (0, a.jsxs)("div", {
                            id: "works",
                            className: "work-details-area pt-100",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        // Image Slider
                                        (0, a.jsxs)("div", {
                                            className: "details-img",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    style: { position: "relative", marginBottom: "30px" },
                                                    children: [
                                                        // Main Image
                                                        (0, a.jsx)(n.default, {
                                                            src: selectedProject.images?.[currentImageIndex] || selectedProject.fullImage,
                                                            alt: selectedProject.title,
                                                            width: 1140,
                                                            height: 500,
                                                            style: { width: "100%", borderRadius: "10px", objectFit: "cover" }
                                                        }),
                                                        // Slider Controls (only if multiple images)
                                                        selectedProject.images && selectedProject.images.length > 1 && (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                // Previous Button
                                                                (0, a.jsx)("button", {
                                                                    onClick: prevImage,
                                                                    style: {
                                                                        position: "absolute",
                                                                        left: "15px",
                                                                        top: "50%",
                                                                        transform: "translateY(-50%)",
                                                                        backgroundColor: "rgba(0,0,0,0.6)",
                                                                        color: "#fff",
                                                                        border: "none",
                                                                        borderRadius: "50%",
                                                                        width: "40px",
                                                                        height: "40px",
                                                                        cursor: "pointer",
                                                                        fontSize: "20px",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        transition: "all 0.3s ease",
                                                                        zIndex: 10
                                                                    },
                                                                    onMouseEnter: (e) => {
                                                                        e.target.style.backgroundColor = "rgba(0,0,0,0.8)";
                                                                        e.target.style.transform = "translateY(-50%) scale(1.05)";
                                                                    },
                                                                    onMouseLeave: (e) => {
                                                                        e.target.style.backgroundColor = "rgba(0,0,0,0.6)";
                                                                        e.target.style.transform = "translateY(-50%) scale(1)";
                                                                    },
                                                                    children: "←"
                                                                }),
                                                                // Next Button
                                                                (0, a.jsx)("button", {
                                                                    onClick: nextImage,
                                                                    style: {
                                                                        position: "absolute",
                                                                        right: "15px",
                                                                        top: "50%",
                                                                        transform: "translateY(-50%)",
                                                                        backgroundColor: "rgba(0,0,0,0.6)",
                                                                        color: "#fff",
                                                                        border: "none",
                                                                        borderRadius: "50%",
                                                                        width: "40px",
                                                                        height: "40px",
                                                                        cursor: "pointer",
                                                                        fontSize: "20px",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        transition: "all 0.3s ease",
                                                                        zIndex: 10
                                                                    },
                                                                    onMouseEnter: (e) => {
                                                                        e.target.style.backgroundColor = "rgba(0,0,0,0.8)";
                                                                        e.target.style.transform = "translateY(-50%) scale(1.05)";
                                                                    },
                                                                    onMouseLeave: (e) => {
                                                                        e.target.style.backgroundColor = "rgba(0,0,0,0.6)";
                                                                        e.target.style.transform = "translateY(-50%) scale(1)";
                                                                    },
                                                                    children: "→"
                                                                }),
                                                                // Image Counter
                                                                (0, a.jsx)("div", {
                                                                    style: {
                                                                        position: "absolute",
                                                                        bottom: "15px",
                                                                        right: "15px",
                                                                        backgroundColor: "rgba(0,0,0,0.6)",
                                                                        color: "#fff",
                                                                        padding: "5px 10px",
                                                                        borderRadius: "20px",
                                                                        fontSize: "12px",
                                                                        fontFamily: "monospace"
                                                                    },
                                                                    children: `${currentImageIndex + 1} / ${selectedProject.images.length}`
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                // Info Boxes - Items in Horizontal Line (Flex Row)
                                                (0, a.jsxs)("div", {
                                                    className: "row",
                                                    style: { gap: "30px", marginTop: "40px", marginBottom: "40px" },
                                                    children: [
                                                        // Categories - 6 columns
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-6 col-lg-6",
                                                            style: { flex: "1" },
                                                            children: [
                                                                (0, a.jsxs)("div", {
                                                                    className: "categories-wrapper",
                                                                    style: {
                                                                        backgroundColor: "#ffffff",
                                                                        borderRadius: "12px",
                                                                        padding: "24px",
                                                                        height: "100%",
                                                                        border: "1px solid #e0e0e0",
                                                                        transition: "all 0.3s ease"
                                                                    },
                                                                    onMouseEnter: (e) => {
                                                                        e.currentTarget.style.transform = "translateY(-3px)";
                                                                        e.currentTarget.style.borderColor = "#ff6b35";
                                                                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 107, 53, 0.08)";
                                                                    },
                                                                    onMouseLeave: (e) => {
                                                                        e.currentTarget.style.transform = "translateY(0)";
                                                                        e.currentTarget.style.borderColor = "#e0e0e0";
                                                                        e.currentTarget.style.boxShadow = "none";
                                                                    },
                                                                    children: [
                                                                        (0, a.jsxs)("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: "12px",
                                                                                marginBottom: "20px",
                                                                                borderBottom: "2px solid #ff6b35",
                                                                                paddingBottom: "12px"
                                                                            },
                                                                            children: [
                                                                                (0, a.jsx)("i", {
                                                                                    className: "bx bx-category",
                                                                                    style: { fontSize: "28px", color: "#ff6b35" }
                                                                                }),
                                                                                (0, a.jsx)("h3", {
                                                                                    style: {
                                                                                        fontSize: "20px",
                                                                                        fontWeight: "600",
                                                                                        color: "#000",
                                                                                        margin: "0"
                                                                                    },
                                                                                    children: "Categories"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        // Categories - Items in Horizontal Line (Flex Row)
                                                                        (0, a.jsx)("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                flexDirection: "row",
                                                                                flexWrap: "wrap",
                                                                                gap: "12px"
                                                                            },
                                                                            children: selectedProject.categories.map((cat, idx) => (0, a.jsxs)("div", {
                                                                                style: {
                                                                                    backgroundColor: "#fff5f0",
                                                                                    padding: "12px 16px",
                                                                                    borderRadius: "8px",
                                                                                    fontSize: "14px",
                                                                                    fontWeight: "500",
                                                                                    color: "#ff6b35",
                                                                                    borderLeft: "3px solid #ff6b35",
                                                                                    transition: "all 0.2s ease",
                                                                                    flex: "1",
                                                                                    textAlign: "center"
                                                                                },
                                                                                onMouseEnter: (e) => {
                                                                                    e.currentTarget.style.backgroundColor = "#ffe8e0";
                                                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                                                },
                                                                                onMouseLeave: (e) => {
                                                                                    e.currentTarget.style.backgroundColor = "#fff5f0";
                                                                                    e.currentTarget.style.transform = "translateY(0)";
                                                                                },
                                                                                children: cat
                                                                            }, idx))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        // Working Role - 6 columns (Items in Horizontal Line)
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-6 col-lg-6",
                                                            style: { flex: "1" },
                                                            children: [
                                                                (0, a.jsxs)("div", {
                                                                    className: "workingrole-wrapper",
                                                                    style: {
                                                                        backgroundColor: "#ffffff",
                                                                        borderRadius: "12px",
                                                                        padding: "24px",
                                                                        height: "100%",
                                                                        border: "1px solid #e0e0e0",
                                                                        transition: "all 0.3s ease"
                                                                    },
                                                                    onMouseEnter: (e) => {
                                                                        e.currentTarget.style.transform = "translateY(-3px)";
                                                                        e.currentTarget.style.borderColor = "#ff6b35";
                                                                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 107, 53, 0.08)";
                                                                    },
                                                                    onMouseLeave: (e) => {
                                                                        e.currentTarget.style.transform = "translateY(0)";
                                                                        e.currentTarget.style.borderColor = "#e0e0e0";
                                                                        e.currentTarget.style.boxShadow = "none";
                                                                    },
                                                                    children: [
                                                                        (0, a.jsxs)("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: "12px",
                                                                                marginBottom: "20px",
                                                                                borderBottom: "2px solid #ff6b35",
                                                                                paddingBottom: "12px"
                                                                            },
                                                                            children: [
                                                                                (0, a.jsx)("i", {
                                                                                    className: "bx bx-briefcase",
                                                                                    style: { fontSize: "28px", color: "#ff6b35" }
                                                                                }),
                                                                                (0, a.jsx)("h3", {
                                                                                    style: {
                                                                                        fontSize: "20px",
                                                                                        fontWeight: "600",
                                                                                        color: "#000",
                                                                                        margin: "0"
                                                                                    },
                                                                                    children: "Working Role"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        // Working Role - Items in Horizontal Line
                                                                        (0, a.jsx)("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                flexDirection: "row",
                                                                                flexWrap: "wrap",
                                                                                gap: "12px"
                                                                            },
                                                                            children: selectedProject.roles.map((role, idx) => (0, a.jsxs)("div", {
                                                                                style: {
                                                                                    backgroundColor: "#fff5f0",
                                                                                    padding: "12px 16px",
                                                                                    borderRadius: "8px",
                                                                                    fontSize: "14px",
                                                                                    fontWeight: "500",
                                                                                    color: "#333",
                                                                                    borderLeft: "3px solid #ff6b35",
                                                                                    transition: "all 0.2s ease",
                                                                                    flex: "1",
                                                                                    textAlign: "center"
                                                                                },
                                                                                onMouseEnter: (e) => {
                                                                                    e.currentTarget.style.backgroundColor = "#ffe8e0";
                                                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                                                },
                                                                                onMouseLeave: (e) => {
                                                                                    e.currentTarget.style.backgroundColor = "#fff5f0";
                                                                                    e.currentTarget.style.transform = "translateY(0)";
                                                                                },
                                                                                children: role
                                                                            }, idx))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        
                                        // Description with Images
                                        (0, a.jsxs)("div", {
                                            className: "details-description",
                                            children: [
                                                (0, a.jsx)("h3", { children: "Description" }),
                                                (0, a.jsx)("p", { children: selectedProject.description1 }),
                                                (0, a.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-6 col-lg-6",
                                                            children: [
                                                                (0, a.jsx)("div", {
                                                                    className: "img",
                                                                    children: (0, a.jsx)(n.default, {
                                                                        src: selectedProject.img2,
                                                                        alt: "Details",
                                                                        width: 555,
                                                                        height: 390,
                                                                        style: { width: "100%" }
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-6 col-lg-6",
                                                            children: [
                                                                (0, a.jsx)("div", {
                                                                    className: "img",
                                                                    children: (0, a.jsx)(n.default, {
                                                                        src: selectedProject.img3,
                                                                        alt: "Details",
                                                                        width: 555,
                                                                        height: 390,
                                                                        style: { width: "100%" }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, a.jsx)("p", { children: selectedProject.description2 })
                                            ]
                                        }),
                                        
                                        // Navigation Pages
                                        (0, a.jsxs)("div", {
                                            className: "details-pages",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "row align-items-center",
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-4 col-lg-4",
                                                            children: [
                                                                (0, a.jsx)("div", {
                                                                    className: "pages-item",
                                                                    children: (0, a.jsxs)("a", {
                                                                        className: "pre-project",
                                                                        href: "#",
                                                                        children: [
                                                                            (0, a.jsx)("i", { className: "flaticon-right-arrow" }),
                                                                            " Previous Project"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-4 col-lg-4",
                                                            children: [
                                                                (0, a.jsx)("div", {
                                                                    className: "pages-item two",
                                                                    children: (0, a.jsx)("a", {
                                                                        className: "common-btn",
                                                                        href: "/works",
                                                                        children: "Go Back To Work"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                            className: "col-sm-4 col-lg-4",
                                                            children: [
                                                                (0, a.jsx)("div", {
                                                                    className: "pages-item three",
                                                                    children: (0, a.jsxs)("a", {
                                                                        className: "next-project",
                                                                        href: "#",
                                                                        children: [
                                                                            "Next Project ",
                                                                            (0, a.jsx)("i", { className: "flaticon-right-arrow" })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        
                                        // Contact Area - UPDATED (Working Form)
                                        (0, a.jsxs)("div", {
                                            className: "contact-area pb-70",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: "section-title",
                                                            children: [
                                                                (0, a.jsx)("h2", {
                                                                    children: [
                                                                        "Have Any Project? Just ",
                                                                        (0, a.jsx)("span", { children: "Drop A Line" }),
                                                                        ". I Always Love To Hear From You"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                            className: "row align-items-center",
                                                            children: [
                                                                (0, a.jsxs)("div", {
                                                                    className: "col-lg-7",
                                                                    children: [
                                                                        (0, a.jsxs)("form", {
                                                                            id: "contactForm",
                                                                            action: "https://formsubmit.co/syedbilal10ua@gmail.com",
                                                                            method: "POST",
                                                                            children: [
                                                                                (0, a.jsx)("input", {
                                                                                    type: "hidden",
                                                                                    name: "_captcha",
                                                                                    value: "false"
                                                                                }),
                                                                                (0, a.jsx)("input", {
                                                                                    type: "hidden",
                                                                                    name: "_subject",
                                                                                    value: "New message from Portfolio Website!"
                                                                                }),
                                                                                (0, a.jsx)("input", {
                                                                                    type: "hidden",
                                                                                    name: "_next",
                                                                                    value: "https://syedbilalxhan.github.io/my-portfolio/?success=true"
                                                                                }),
                                                                                (0, a.jsxs)("div", {
                                                                                    className: "row",
                                                                                    children: [
                                                                                        (0, a.jsxs)("div", {
                                                                                            className: "col-lg-6",
                                                                                            children: [
                                                                                                (0, a.jsx)("div", {
                                                                                                    className: "form-group",
                                                                                                    children: (0, a.jsx)("input", {
                                                                                                        type: "text",
                                                                                                        className: "form-control",
                                                                                                        placeholder: "Name",
                                                                                                        name: "name",
                                                                                                        required: true
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        (0, a.jsxs)("div", {
                                                                                            className: "col-lg-6",
                                                                                            children: [
                                                                                                (0, a.jsx)("div", {
                                                                                                    className: "form-group",
                                                                                                    children: (0, a.jsx)("input", {
                                                                                                        type: "email",
                                                                                                        className: "form-control",
                                                                                                        placeholder: "Email",
                                                                                                        name: "email",
                                                                                                        required: true
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        (0, a.jsxs)("div", {
                                                                                            className: "col-lg-6",
                                                                                            children: [
                                                                                                (0, a.jsx)("div", {
                                                                                                    className: "form-group",
                                                                                                    children: (0, a.jsx)("input", {
                                                                                                        type: "text",
                                                                                                        className: "form-control",
                                                                                                        placeholder: "Subject",
                                                                                                        name: "subject",
                                                                                                        required: true
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        (0, a.jsxs)("div", {
                                                                                            className: "col-lg-6",
                                                                                            children: [
                                                                                                (0, a.jsx)("div", {
                                                                                                    className: "form-group",
                                                                                                    children: (0, a.jsx)("input", {
                                                                                                        type: "text",
                                                                                                        className: "form-control",
                                                                                                        placeholder: "Phone",
                                                                                                        name: "phone"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        (0, a.jsxs)("div", {
                                                                                            className: "col-lg-12",
                                                                                            children: [
                                                                                                (0, a.jsx)("div", {
                                                                                                    className: "form-group",
                                                                                                    children: (0, a.jsx)("textarea", {
                                                                                                        name: "message",
                                                                                                        className: "form-control",
                                                                                                        cols: "30",
                                                                                                        rows: "6",
                                                                                                        placeholder: "Write message",
                                                                                                        required: true
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                (0, a.jsxs)("button", {
                                                                                    type: "submit",
                                                                                    className: "btn common-btn",
                                                                                    children: ["Send Message ", (0, a.jsx)("span", {})]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, a.jsxs)("div", {
                                                                    className: "col-lg-5",
                                                                    children: [
                                                                        (0, a.jsxs)("div", {
                                                                            className: "contact-content",
                                                                            children: [
                                                                                (0, a.jsxs)("div", {
                                                                                    className: "top",
                                                                                    children: [
                                                                                        (0, a.jsxs)("ul", {
                                                                                            children: [
                                                                                                (0, a.jsxs)("li", {
                                                                                                    children: [
                                                                                                        (0, a.jsx)("span", { children: "Phone:" }),
                                                                                                        (0, a.jsx)("a", { href: "tel:+923314070426", children: "+92 331 4070426" })
                                                                                                    ]
                                                                                                }),
                                                                                                (0, a.jsxs)("li", {
                                                                                                    children: [
                                                                                                        (0, a.jsx)("span", { children: "Email:" }),
                                                                                                        (0, a.jsx)("a", { href: "mailto:syedbilal10ua@gmail.com", children: "syedbilal10ua@gmail.com" })
                                                                                                    ]
                                                                                                }),
                                                                                                (0, a.jsxs)("li", {
                                                                                                    children: [
                                                                                                        (0, a.jsx)("span", { children: "Website:" }),
                                                                                                        (0, a.jsx)("a", { href: "https://syedbilalxhan.github.io/my-portfolio", target: "_blank", children: "syedbilalxhan.github.io" })
                                                                                                    ]
                                                                                                }),
                                                                                                (0, a.jsxs)("li", {
                                                                                                    children: [
                                                                                                        (0, a.jsx)("span", { children: "Address:" }),
                                                                                                        (0, a.jsx)("a", { href: "#", children: "Pakistan" })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                (0, a.jsxs)("div", {
                                                                                    className: "bottom",
                                                                                    children: [
                                                                                        (0, a.jsxs)("ul", {
                                                                                            children: [
                                                                                                (0, a.jsx)("li", {
                                                                                                    children: (0, a.jsx)("a", {
                                                                                                        href: "https://facebook.com/",
                                                                                                        target: "_blank",
                                                                                                        children: (0, a.jsx)("i", { className: "bx bxl-facebook" })
                                                                                                    })
                                                                                                }),
                                                                                                (0, a.jsx)("li", {
                                                                                                    children: (0, a.jsx)("a", {
                                                                                                        href: "https://linkedin.com/in/syedbilalxhan",
                                                                                                        target: "_blank",
                                                                                                        children: (0, a.jsx)("i", { className: "bx bxl-linkedin" })
                                                                                                    })
                                                                                                }),
                                                                                                // WhatsApp
                                                                                                (0, a.jsx)("li", {
                                                                                                    children: (0, a.jsx)("a", {
                                                                                                        href: "#",
                                                                                                        onClick: (e) => {
                                                                                                            e.preventDefault();
                                                                                                            const phoneNumber = "923314070426";
                                                                                                            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                                                                                                            if (isMobile) {
                                                                                                                window.location.href = `whatsapp://send?phone=${phoneNumber}`;
                                                                                                            } else {
                                                                                                                window.open(`https://wa.me/${phoneNumber}`, "_blank");
                                                                                                            }
                                                                                                        },
                                                                                                        style: { cursor: "pointer" },
                                                                                                        children: (0, a.jsx)("i", { className: "bx bxl-whatsapp" })
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        
                                        // Copyright Area
                                        (0, a.jsxs)("div", {
                                            className: "copyright-area seven",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: "copyright-item",
                                                            children: [
                                                                "Copyright @ 2024 Design & Developed by ",
                                                                (0, a.jsx)("a", { href: "https://hibootstrap.com/", target: "_blank", children: "HiBootstrap" })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                
                // Style Tag
                (0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
                            @keyframes fadeInScale {
                                0% { opacity: 0; transform: scale(0.98); }
                                100% { opacity: 1; transform: scale(1); }
                            }
                            
                            .project-modal-overlay {
                                animation: fadeInScale 0.4s ease-out;
                            }
                            
                            .work-details-area .container,
                            .contact-area .container {
                                max-width: 1400px !important;
                                width: 100% !important;
                                padding-right: 50px !important;
                                padding-left: 50px !important;
                                margin-right: auto !important;
                                margin-left: auto !important;
                            }
                            
                            .details-img img, .details-img .main-detail-image {
                                width: 100% !important;
                                height: auto !important;
                            }
                            
                            .contact-area .col-lg-7 {
                                margin-left: -40px !important;
                            }
                            
                            .projects-item {
                                transition: transform 0.3s ease;
                                cursor: pointer;
                            }
                            
                            .projects-item:hover {
                                transform: translateY(-10px);
                            }
                        `
                    }
                })
            ]
        });
    };
},
       72744: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(87138);
            s.default = () =>
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: "what-area three border-bottom-two pt-100 pb-70",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "section-title three",
                                    children: [
                                        (0, a.jsx)("span", { className: "sub-title", children: "SERVICES" }),
                                        (0, a.jsx)("h2", {
                                            children:
                                                "I Offer Special Service To My Client For Their Ultimate Satisfaction",
                                        }),
                                        (0, a.jsx)("p", {
                                            children:
                                                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.",
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: "col-sm-6 col-lg-6",
                                            children: (0, a.jsxs)("div", {
                                                className: "what-item",
                                                children: [
                                                    (0, a.jsx)("i", { className: "flaticon-global icon" }),
                                                    (0, a.jsx)("h3", {
                                                            style: { color: "white" },
                                                            children: "Web Application Development",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        style: {textAlign: "justify"},
                                                        children:
                                                            "I specialize in carefully building custom web applications tailored to your business needs. Whether it was a CRM, inventory system, booking platform, I design and develop solutions that are scalable, and user-friendly.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "col-sm-6 col-lg-6",
                                            children: (0, a.jsxs)("div", {
                                                className: "what-item",
                                                children: [
                                                    (0, a.jsx)("i", { className: "flaticon-smartphone icon" }),
                                                    (0, a.jsx)("h3", {
                                                           style: { color: "white" },
                                                            children: "Web Design",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        style: {textAlign: "justify"},
                                                        children:
                                                            "Web Designs that balance beauty and functionality. Every color, button, and layout is chosen carefully to give users a smooth and enjoyable experience. No clutter, no confusion just clean design that works.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "col-sm-6 col-lg-6",
                                            children: (0, a.jsxs)("div", {
                                                className: "what-item",
                                                children: [
                                                    (0, a.jsx)("i", { className: "flaticon-paintbrush icon" }),
                                                    (0, a.jsx)("h3", {
                                                            style: { color: "white" },
                                                            children: "Custom Web Solutions",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        style: {textAlign: "justify"},
                                                        children:
                                                            "Every business is different, so every solution should be different too. I build custom web solutions that fit your unique challenges completely and perfectly not the other way around.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "col-sm-6 col-lg-6",
                                            children: (0, a.jsxs)("div", {
                                                className: "what-item",
                                                children: [
                                                    (0, a.jsx)("i", { className: "flaticon-branding icon" }),
                                                    (0, a.jsx)("h3", {
                                                            style: { color: "white" },
                                                            children: "Website Maintenance",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        style: {textAlign: "justify"},
                                                        children:
                                                            "Website maintenance that boosts your site ranking by improving speed, security, and user experience. I handle technical SEO, bug fixes, performance tuning, and regular backups to grow your online presence.",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
        },
        39048: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265),
                (s.default = () =>
                    (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            id: "skills",
                            className: "skills-area border-bottom-two ptb-100",
                            children: (0, a.jsxs)("div", {
                                className: "container",
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: "section-title three",
                                        children: [
                                            (0, a.jsx)("span", { className: "sub-title", children: "SKILLS" }),
                                            (0, a.jsx)("h2", {
                                                children: "Here's a look at my core skills and expertise.",
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "skill-wrap",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "skill",
                                                children: [
                                                    (0, a.jsx)("h3", { children: "JAVASCRIPT" }),
                                                    (0, a.jsx)("div", {
                                                        className: "skill-bar skill1 wow fadeInLeftBig",
                                                        children: (0, a.jsx)("span", {
                                                            className: "skill-count1",
                                                            children: "80%",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "skill",
                                                children: [
                                                    (0, a.jsx)("h3", { children: "Jquery" }),
                                                    (0, a.jsx)("div", {
                                                        className: "skill-bar skill2 wow fadeInLeftBig",
                                                        children: (0, a.jsx)("span", {
                                                            className: "skill-count2",
                                                            children: "70%",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "skill",
                                                children: [
                                                    (0, a.jsx)("h3", { children: "PHP" }),
                                                    (0, a.jsx)("div", {
                                                        className: "skill-bar skill3 wow fadeInLeftBig",
                                                        children: (0, a.jsx)("span", {
                                                            className: "skill-count3",
                                                            children: "80%",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "skill",
                                                children: [
                                                    (0, a.jsx)("h3", { children: "CSS & Bootstrap" }),
                                                    (0, a.jsx)("div", {
                                                        className: "skill-bar skill4 wow fadeInLeftBig",
                                                        children: (0, a.jsx)("span", {
                                                            className: "skill-count4",
                                                            children: "98%",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }));
        },
        43431: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(53267),
                r = i(5540),
                n = i(66648);
            s.default = () => null;
        },
        84666: function (e, s, i) {
            "use strict";
            var a = i(57437);
            i(2265);
            var l = i(66648);
            s.Z = (e) => {
                let { active: s, onClick: i } = e;
                return (0, a.jsxs)("div", {
                    className: "demos-side-content ".concat(s),
                    children: [
                        (0, a.jsxs)("div", {
                            className: "modal-header px-4 py-3 border-bottom",
                            children: [
                                (0, a.jsx)("h2", { children: "View Demo" }),
                                (0, a.jsx)("button", {
                                    type: "button",
                                    className: "close",
                                    onClick: () => {
                                        i();
                                    },
                                    children: (0, a.jsx)("span", { "aria-hidden": "true", children: "\xd7" }),
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: "modal-body",
                            children: (0, a.jsxs)("ul", {
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: "demo-item",
                                            children: (0, a.jsxs)("a", {
                                                href: "/",
                                                children: [
                                                    (0, a.jsx)("span", { children: "Demo - 1" }),
                                                    (0, a.jsx)(l.default, {
                                                        src: "/images/demos/demo1.jpg",
                                                        alt: "Demos",
                                                        width: 200,
                                                        height: 200,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: "demo-item",
                                            children: (0, a.jsxs)("a", {
                                                href: "/home-2",
                                                children: [
                                                    (0, a.jsx)("span", { children: "Demo - 2" }),
                                                    (0, a.jsx)(l.default, {
                                                        src: "/images/demos/demo2.jpg",
                                                        alt: "Demos",
                                                        width: 200,
                                                        height: 200,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: "demo-item",
                                            children: (0, a.jsxs)("a", {
                                                href: "/home-3",
                                                children: [
                                                    (0, a.jsx)("span", { children: "Demo - 3" }),
                                                    (0, a.jsx)(l.default, {
                                                        src: "/images/demos/demo3.jpg",
                                                        alt: "Demos",
                                                        width: 200,
                                                        height: 200,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: "demo-item",
                                            children: (0, a.jsxs)("a", {
                                                href: "/home-4",
                                                children: [
                                                    (0, a.jsx)("span", { children: "Demo - 4" }),
                                                    (0, a.jsx)(l.default, {
                                                        src: "/images/demos/demo4.jpg",
                                                        alt: "Demos",
                                                        width: 200,
                                                        height: 200,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: "demo-item",
                                            children: (0, a.jsxs)("a", {
                                                href: "/home-5",
                                                children: [
                                                    (0, a.jsx)("span", { children: "Demo - 5" }),
                                                    (0, a.jsx)(l.default, {
                                                        src: "/images/demos/demo5.jpg",
                                                        alt: "Demos",
                                                        width: 200,
                                                        height: 200,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsx)("div", {
                                            className: "demo-item",
                                            children: (0, a.jsxs)("a", {
                                                href: "/home-6",
                                                children: [
                                                    (0, a.jsx)("span", { children: "Demo - 6" }),
                                                    (0, a.jsx)(l.default, {
                                                        src: "/images/demos/demo6.jpg",
                                                        alt: "Demos",
                                                        width: 200,
                                                        height: 200,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            };
        },
    },
    function (e) {
        e.O(0, [974, 417, 971, 23, 744], function () {
            return e((e.s = 75418));
        }),
            (_N_E = e.O());
    },
]);
