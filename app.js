// 1. جلب بيانات الطقس الحقيقية لأسيوط (WeatherAPI)
const weatherUrl = "https://api.weatherapi.com/v1/current.json?key=46b1d48012274145889114551261809&q=Asyut";

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("temperature").innerText = Math.round(data.current.temp_c) + "°C";
        document.getElementById("city-name").innerText = data.location.name;
    })
    .catch(error => console.log("خطأ في الطقس:", error));


// 2. تحديث قسم الأخبار برمجياً (Dynamic Data Handling)
const sampleArticles = [
    { title: "Top Stories: New Tech Events Out Now", source: "MacRumors" },
    { title: "iPhone Hands-On and Latest Reviews", source: "Android Central" }
];

const newsContainer = document.getElementById("sports-news");
if (newsContainer) {
    newsContainer.innerHTML = ""; 
    sampleArticles.forEach(article => {
        newsContainer.innerHTML += `
            <div class="col-4 mb-3">
                <img src="news.jpg" class="img-fluid rounded mb-2" alt="News">
                <h6>${article.title}</h6>
                <p class="text-muted small">Today | <span class="badge bg-success">${article.source}</span></p>
            </div>
        `;
    });
}