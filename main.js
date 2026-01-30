// Init icons
if (window.lucide) lucide.createIcons();

// Init AOS
if (window.AOS) {
    AOS.init({
        duration: 650,
        once: true,
        offset: 90,
        easing: "ease-out-cubic",
    });
}

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

function setExpanded(isOpen) {
    if (burger) burger.setAttribute("aria-expanded", String(isOpen));
}

burger?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    setExpanded(isOpen);
});

// Close menu when clicking a link (mobile)
navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
        nav.classList.remove("open");
        setExpanded(false);
    });
});

// Focus form from CTA button
document.getElementById("focusFormBtn")?.addEventListener("click", () => {
    setTimeout(() => document.getElementById("name")?.focus(), 150);
});

// Form (no backend): mailto
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const msg = document.getElementById("msg")?.value.trim();

    if (!name || !email || !msg) return;

    const subject = encodeURIComponent("Contacto — PODA Comunicación");
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${msg}\n`);

    // Cambiá por tu email real
    const to = "hola@podacomunicacion.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    if (note) note.textContent = "Listo. Abriendo tu email para enviar el mensaje…";
    form.reset();

    setTimeout(() => {
        if (note) note.textContent = "";
    }, 4500);
});
