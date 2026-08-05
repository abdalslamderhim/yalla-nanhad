/* =====================================
   Yalla Nanhad - app.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       الوضع الليلي
    ========================== */

    const darkBtn = document.querySelector(".dark-btn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (darkBtn) {
            darkBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    }

    if (darkBtn) {
        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const dark = document.body.classList.contains("dark-mode");

            localStorage.setItem("theme", dark ? "dark" : "light");

            darkBtn.innerHTML = dark
                ? '<i class="bi bi-sun-fill"></i>'
                : '<i class="bi bi-moon-stars"></i>';

        });
    }

    /* ==========================
       عداد الإحصائيات
    ========================== */

    const counters = document.querySelectorAll(".stats-section h2");

    const runCounter = (counter) => {

        const target = parseInt(counter.innerText.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const speed = Math.max(10, target / 100);

        const timer = setInterval(() => {

            current += speed;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            if (counter.innerText.includes("K")) {

                counter.innerText = (current / 1000).toFixed(0) + "K+";

            } else {

                counter.innerText = Math.floor(current) + "+";

            }

        }, 20);

    };

    const stats = document.querySelector(".stats-section");

    let started = false;

    if (stats) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting && !started) {

                    started = true;

                    counters.forEach(runCounter);

                }

            });

        }, { threshold: 0.4 });

        observer.observe(stats);

    }

    /* ==========================
       ظهور العناصر أثناء التمرير
    ========================== */

    const items = document.querySelectorAll(
        ".book-card,.article-card,.podcast-item"
    );

    const reveal = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, { threshold: 0.15 });

    items.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition = ".6s";

        reveal.observe(item);

    });

    /* ==========================
       البحث
    ========================== */

    const searchInput = document.querySelector(".search-box input");

    const searchBtn = document.querySelector(".search-box button");

    if (searchBtn && searchInput) {

        searchBtn.addEventListener("click", () => {

            const value = searchInput.value.trim();

            if (!value) {

                alert("اكتب كلمة للبحث.");

                return;

            }

            alert("سيتم البحث عن: " + value);

            // سيتم ربط البحث الحقيقي لاحقًا مع Laravel

        });

    }

    /* ==========================
       زر العودة للأعلى
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';

    topBtn.className = "top-btn";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});
