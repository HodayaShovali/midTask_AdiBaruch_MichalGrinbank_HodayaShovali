//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // המידע לכרטיסיות
    const jsonData = {
        "departments": [
            {
                "name": "טיפול נמרץ",
                "image": "images/ICU.jpg",
                "alt": "טיפול נמרץ",
                "description": "טיפול בחולים ובפצועים מורכבים במיוחד",
                "detailedInfo": "במחלקה צוות רב מקצועי, בעל מיומנות וניסיון רב וייחודי בטיפול במצבים רפואיים קשים ביותר. מקרים אלה דורשים מעקב רציף והתערבות מידית בעת הצורך. לצורך כך אנו עושים שימוש בציוד מתקדם ובאמצעים טכנולוגיים חדישים כדי להבטיח את שלום המטופלים.",
                "category": "רפואת חירום"
            },
            {
                "name": "בריאות המוח",
                "image": "images/Brain health.jpg",
                "alt": "בריאות המוח",
                "description": "טיפול במטופלים עם מחלות הקשורות במוח",
                "detailedInfo": "האגף מציע אבחון, מעקב, טיפול ושיקום למטופלים ומטופלות עם מחלות הקשורות במוח ומערכת העצבים ההיקפית, תוך שימוש בטכנולוגיה העדכנית ביותר בתחום. באגף מתבצעים הטיפולים המתקדמים ביותר בישראל לשבץ, ניתוחים נוירוכירורגיים פולשניים ברמה הגבוהה ביותר, ומחקרים במעבדת חדשנות, שמטרתה לפתח תרופות וטיפולים פורצי דרך בתחום.",
                "category": "רפואה מתמחה"

            },
            {
                "name": "דימות",
                "image": "images/Imaging tests.jpg",
                "alt": "דימות",
                "description": "בדיקות הדמיה רפואיות עם מכשור חדשני ומגוון",
                "detailedInfo": "אגף דימות מהווה מרכז טכנולוגי מתקדם בבית החולים, המשתמש במכשור חדיש כמו CT, MRI ורנטגן דיגיטלי. המחלקה מבצעת בדיקות הדמיה ממוחשבות מדויקות, המאפשרות לרופאים לאתר ולהבין מצבים רפואיים מורכבים. צוות מיומן של רופאים וטכנאים סורק ובודק איברים שונים, תוך יצירת תמונות רפואיות מפורטות.",
                "category": "אבחון"

            },
            {
                "name": "כירורגיה",
                "image": "images/surgery.jpg",
                "alt": "כירורגיה",
                "description": "מנתחים מומחים מבצעים טיפולים כירורגיים מורכבים",
                "detailedInfo": "האגף הכירורגי מאגד 18 מחלקות, שהמשותף ביניהן הוא ביצוע של ניתוחים. הרופאים והרופאות המנתחים באגף השלימו התמחויות במרכזים הרפואיים המובילים בעולם ומשתתפים בקביעות בכינוסים מדעיים רפואיים בינלאומיים. הצוות מעודכן בהתפתחויות העולמיות בתחומי הכירורגיה ומיישם אותן לטובת המטופלים ובריאותם.",
                "category": "מחלקות כירורגיות"

            },
            {
                "name": "שיקום",
                "image": "images/Rehabilitation system.jpg",
                "alt": "שיקום",
                "description": "מרכז שיקום מתקדם לשיפור תפקוד וחיים",
                "detailedInfo": "המערך השיקומי בבית החולים שיבא הוא מרכז מוביל בתחומו, המעניק טיפול מותאם אישית לשיקום פיזי, נפשי ותפקודי. המערך כולל צוות רב-תחומי ושימוש בטכנולוגיות מתקדמות לשיקום נוירולוגי, אורתופדי ושיקום ילדים. מטרתו היא לסייע למטופלים להשיב את עצמאותם ולהשתלב מחדש בחיי היומיום.",
                "category": "שיקום"

            },
            {
                "name": "ילדים",
                "image": "images/children.jpg",
                "alt": "ילדים",
                "description": "טיפול רפואי מתקדם לילדים בסביבה תומכת",
                "detailedInfo": "מחלקות הילדים בבית החולים שיבא מספקות טיפול רפואי מתקדם ומקיף לילדים במגוון תחומים רפואיים. המחלקות כוללות צוות מומחים רב-תחומי, המשלב טיפול קליני, מחקר חדשני ותמיכה רגשית למשפחות. באמצעות גישה מותאמת אישית, המחלקות שואפות להבטיח לילדים את הטיפול הטוב ביותר בסביבה תומכת ומקדמת החלמה.",
                "category": "רפואה מתמחה"

            },
            {
                "name": "נשים",
                "image": "images/women.jpg",
                "alt": "נשים",
                "description": "טיפול גינקולוגי, פריון והריון בסביבה מתקדמת",
                "detailedInfo": "מחלקות הנשים בבית החולים שיבא מציעות שירותים מתקדמים בתחומי גינקולוגיה, פריון, הריון ולידה. המחלקות משלבות צוות מומחים מוביל, טכנולוגיות מתקדמות וטיפול אישי המותאם לצרכי המטופלות. הדגש ניתן על מתן מענה רפואי כוללני לצד תמיכה רגשית לנשים ומשפחותיהן.",
                "category": "רפואה מתמחה"

            },
            {
                "name": "מיון",
                "image": "images/Emergency medicine.jpg",
                "alt": "מיון",
                "description": "מיון מתקדם המציע טיפול מקצועי וטכנולוגי",
                "detailedInfo": "המיון בשיבא מוגדר מיון על והוא אחד מששת מרכזי הטראומה הפועלים בישראל. הוא משמש מיון ייעודי להפניות במרכז הארץ של פגיעות הקשורות לנוירוכירורגיה, לכירורגיית בית חזה, לכוויות ולשיקום, וכן מועברים אליו מטופלים קשים מחדרי מיון בבתי חולים בפריפריה.",
                "category": "רפואת חירום"
            },
            {
                "name": "גריאטרי",
                "image": "images/geriatric.jpg",
                "alt": "גריאטרי",
                "description": "טיפול מתקדם ומותאם למטופלים מבוגרים",
                "detailedInfo": "האגף לרפואת הגיל השלישי כולל ארבע מחלקות אשפוז, כל אחת מהן בעלת אופי ותחומי התמחות משלה. המחלקות ממוקמות בבנין לשיקום המבוגר שנחנך בשנת 2002 ומציע תנאי שהות נוחים ביותר למטופלים. האגף הוא מרכז של מצוינות בתחומי האקדמיה, המחקר הרפואי וההכשרה המקצועית.",
                "category": "רפואה מתמחה"

            },
            {
                "name": "לב וחזה",
                "image": "images/heart.jpg",
                "alt": "לב וחזה",
                "description": "טיפול מתקדם במחלות לב וכלי דם",
                "detailedInfo": "מרכז הלב, חזה וכלי הדם בשיבא הוא מהמתקדמים בישראל, ומציע טיפולים חדשניים במחלות לב וכלי דם. המרכז כולל צוות מומחים מוביל, טכנולוגיות מתקדמות ושירותים מותאמים אישית למטופלים. הדגש ניתן על אבחון, טיפול ושיקום מקיף תוך שיפור איכות החיים.",
                "category": "מחלקות כירורגיות"
            }
        ]
    }

    const departmentsContainer = document.getElementById("departments");

    // Clear loading message
    departmentsContainer.innerHTML = "";

    // Render each department card
    jsonData.departments.forEach((dept) => {
        const departmentCard = document.createElement("div");
        departmentCard.setAttribute("data-name", dept.name);
        departmentCard.setAttribute("data-category", dept.category);
        departmentCard.classList.add("col");
        departmentCard.classList.add("department");

        departmentCard.innerHTML = `
        <div class="card h-100">
        <div class="card-body  d-flex flex-column justify-content-between">
            <img class="card-img-top" src="${dept.image}" alt="${dept.alt}">
            <h2 class="card-title text-center">${dept.name}</h2>
            <p class="card-text text-center">${dept.description}</p>
            <button class="details-button btn btn-outline-success d-block mx-auto">מידע נוסף</button>
        </div>
        </div>
                `;

        // Add click event to the "מידע נוסף" button
        departmentCard.querySelector(".details-button").addEventListener("click", () => {
            OpenModal(dept.image, dept.name, dept.detailedInfo);
        });

        departmentsContainer.appendChild(departmentCard);
    });

    // Search functionality
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('search', () => {
        filterDepartments()
    });
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        filterDepartments();
    });

});

// Function to open the modal(popup) with department details
function OpenModal(image, name, detailedInfo) {
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("detailsModalLabel");
    const modalDetailedInfo = document.getElementById("modalDetailedInfo");

    // initialize the modal
    modalImage.src = image;
    modalImage.alt = name;
    modalTitle.textContent = name;
    modalDetailedInfo.textContent = detailedInfo;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
    modal.show();
}

// filter departments based on search term and active catagory
// show message if no results found
function filterDepartments() {
    const query = document.getElementById('search').value.toLowerCase();
    const departments = document.querySelectorAll('.department');
    const activeCategory = document.querySelector('.filter-badge.active');
    let hasResults = false;

    const noResultsMessage = document.getElementById('no-results-message');
    // delete old no results message if exists
    if (noResultsMessage) {
        noResultsMessage.remove();
    }
    
    // no search term and no active catagory selected -- show everything.
    if (!query && !activeCategory) {
        departments.forEach(department => {
            department.style.display = ''; // Show all departments
        });
        return;
    }

    // filter cards based on name and category
    departments.forEach(department => {
        const name = department.getAttribute('data-name').toLowerCase();
        let category = department.getAttribute('data-category').toLowerCase();

        // Filter by search query and active category if exists
        if ((!query || name.includes(query)) &&
            (!activeCategory || category === activeCategory.dataset.category)) {
            department.style.display = ''; // Show matching department
            hasResults = true;
        } else {
            department.style.display = 'none'; // Hide non-matching department
        }
    });

    
    // if no results - add no results message
    if (!hasResults) {
        // Add "No results" message if it doesn't exist
        const message = document.createElement('div');
        message.id = 'no-results-message';
        message.innerHTML = `
                            <div id="no-results-message-container" 
                                 class="no-results-message-container d-flex flex-column align-items-center text-center gap-3">
                                <div id="no-results-search-term-message">
                                    לא נמצאו תוצאות מתאימות עבור <b>"` + query + `"</b>
                                </div>
                            </div>
                            `;
        message.classList.add(
            'no-results-message',
            'd-flex',
            'mx-auto',
            'px-4',
            'py-5',
            'shadow-sm',
            'rounded',
            'col-lg-4',
            'col-11',
            'justify-content-center',
        );
        document.getElementById('departments').appendChild(message);
        // add active category to the message if there is one
        if (activeCategory) {
            const categoryMessage = document.createElement('div');
            categoryMessage.id = 'no-results-category-message';
            categoryMessage.innerHTML = `
            בקטגורית מחלקות <b>״` + activeCategory.dataset.category + `"</b>`;
            const noResultsMessageContainer = document.getElementById('no-results-message-container');
            noResultsMessageContainer.appendChild(categoryMessage);
        }
    }
}

// event listen on scroll - if the scroll is big enough - show the scroll to top button, otherwise, hide it.
window.onscroll = function () {
    let button = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Show the button
    } else {
        button.style.display = "none"; // Hide the button
    }
};

// smoothly scroll to the top of the page
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// called when click on category button - update the active category (switch / unselect if was selected)
// and then call filterDepartments() to filter the department cards
function filterDepartmentsByCategorySelection(button) {
    const buttons = document.querySelectorAll('.filter-badge');
    const wasActive = button.classList.contains('active');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (!wasActive) {
        button.classList.add('active');
    }
    
    filterDepartments();
}