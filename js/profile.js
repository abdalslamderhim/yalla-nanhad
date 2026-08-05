/* =================================
   Yalla Nanhad
   Profile JavaScript
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // بيانات المستخدم
    document.getElementById("userName").textContent = user.name || "مستخدم";
    document.getElementById("userEmail").textContent = user.email || "-";

    // الإحصائيات
    document.getElementById("booksCount").textContent =
        (user.books || []).length;

    document.getElementById("articlesCount").textContent =
        (user.articles || []).length;

    document.getElementById("podcastsCount").textContent =
        (user.podcasts || []).length;

    document.getElementById("favoritesCount").textContent =
        (user.favorites || []).length;

    // عرض القوائم
    renderList("booksList", user.books);
    renderList("articlesList", user.articles);
    renderList("podcastsList", user.podcasts);

    function renderList(id, items) {

        const list = document.getElementById(id);

        list.innerHTML = "";

        if (!items || items.length === 0) {

            list.innerHTML =
                '<li class="list-group-item text-center text-muted">لا توجد بيانات</li>';

            return;
        }

        items.forEach(item => {

            const li = document.createElement("li");

            li.className = "list-group-item";

            li.textContent = item.title || item.name || item;

            list.appendChild(li);

        });

    }

    // تسجيل الخروج
    document.getElementById("logoutBtn")
        .addEventListener("click", () => {

            if (confirm("هل تريد تسجيل الخروج؟")) {

                localStorage.removeItem("loggedIn");
                localStorage.removeItem("currentUser");

                window.location.href = "login.html";

            }

        });

});
