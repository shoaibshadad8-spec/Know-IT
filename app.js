fetch("https://api.weatherapi.com/v1/current.json?key=46b1d48012274145889114551261809&q=Assiut")
    .then(res => res.json())
    .then(data => {
        document.getElementById("temperature").innerText = Math.round(data.current.temp_c) + "°C";
        document.getElementById("city-name").innerText = data.location.name;
    })
    .catch(error => console.log("خطأ في الطقس:", error));

fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=3")
    .then(res => res.json())
    .then(data => {
        const newsContainer = document.getElementById("sports-news");
        newsContainer.innerHTML = ""; 
        
        data.results.forEach(item => {
            const pubDate = new Date(item.published_at).toLocaleDateString('ar-EG');
            
            newsContainer.innerHTML += `
                <div class="col-4 mb-3">
                    <img src="${item.image_url}" class="img-fluid rounded mb-2" alt="News" style="height: 140px; object-fit: cover; width: 100%;">
                    <h6 style="font-size: 14px;"><a href="${item.url}" target="_blank" class="text-decoration-none text-dark">${item.title}</a></h6>
                    <p class="text-muted small">${pubDate} | <span class="badge bg-success">${item.news_site}</span></p>
                </div>
            `;
        });
    })
    .catch(error => console.log("خطأ في الأخبار:", error));
