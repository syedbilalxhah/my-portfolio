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
            i(2265);
            var l = i(87138),
                r = i(66648);
            s.default = () =>
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
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
                                                    children: [
                                                        (0, a.jsx)(r.default, {
                                                            src: "/images/projects/project1.jpg",
                                                            alt: "Projects",
                                                            width: 518,
                                                            height: 357,
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: "inner",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "inner",
                                                                children: [
                                                                    (0, a.jsx)("h3", {
                                                                        children: (0, a.jsx)(l.default, {
                                                                            href: "/works/details",
                                                                            target: "_blank",
                                                                            children: "Furniture Website",
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)("span", { children: "Logo" }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: "projects-item",
                                                    children: [
                                                        (0, a.jsx)(r.default, {
                                                            src: "/images/projects/project2.jpg",
                                                            alt: "Projects",
                                                            width: 518,
                                                            height: 452,
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: "inner",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "inner",
                                                                children: [
                                                                    (0, a.jsx)("h3", {
                                                                        children: (0, a.jsx)(l.default, {
                                                                            href: "/works/details",
                                                                            target: "_blank",
                                                                            children: "Travel App Logo Design",
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)("span", { children: "App" }),
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
                                                    children: [
                                                        (0, a.jsx)(r.default, {
                                                            src: "/images/projects/project3.jpg",
                                                            alt: "Projects",
                                                            width: 344,
                                                            height: 457,
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: "inner",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "inner",
                                                                children: [
                                                                    (0, a.jsx)("h3", {
                                                                        children: (0, a.jsx)(l.default, {
                                                                            href: "/works/details",
                                                                            target: "_blank",
                                                                            children: "ERP Design",
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)("span", { children: "Design" }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: "projects-item two",
                                                    children: [
                                                        (0, a.jsx)(r.default, {
                                                            src: "/images/projects/project4.jpg",
                                                            alt: "Projects",
                                                            width: 344,
                                                            height: 352,
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: "inner",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "inner",
                                                                children: [
                                                                    (0, a.jsx)("h3", {
                                                                        children: (0, a.jsx)(l.default, {
                                                                            href: "/works/details",
                                                                            target: "_blank",
                                                                            children: "Restaurant Design",
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)("span", { children: "Restaurant" }),
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
                                    children: (0, a.jsx)(l.default, {
                                        href: "/works",
                                        className: "common-btn three",
                                        target: "_blank",
                                        children: "Explore Projects",
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
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
