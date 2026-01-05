// detail.html - Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
                "surface-light": "#ffffff",
                "surface-dark": "#1a2632",
                "text-main-light": "#111418",
                "text-main-dark": "#f0f2f4",
                "text-secondary-light": "#617589",
                "text-secondary-dark": "#9ca3af",
                "border-light": "#f0f2f4",
                "border-dark": "#2a3441",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
                "body": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
    },
}

// ฐานข้อมูลรถ
const carsData = {
    spark: {
        name: "Chevrolet Spark",
        price: 850,
        rating: 4.7,
        reviews: 89,
        badges: ["ราคาพิเศษ", "Eco"],
        mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzWSlUKCgiNFjsnFd1qousBUzgzA3-Hm19rqURUBQA-Vtv_Rg8EjAZ6jfKgp1Mx5Pa5I8-QC8uLo3FY59wVyombCyOMVjZt6Jlbmvv08-25LVRaoQJ3st6wZYUtupbMmQdoQXJ6j2vkGBici99-fvoER4V68qUlAB_wBLkmQxC3PuIRLt4ubndfVRFrCKLueFsadndq_4-PX7FFmTidcjC12f74leavgdCQ54LnFEHU2mQCT64UUB3LP-GQ8TSIoNvC38HneSpY1FV",
        specs: { transmission: "อัตโนมัติ", seats: "4 ที่นั่ง", fuel: "เบนซิน 91", luggage: "2 ใบ" },
        description: "รถเก๋งอีโคคาร์ขนาดเล็ก เหมาะสำหรับการเดินทางในเมือง ประหยัดน้ำมัน ขับขี่คล่องตัว",
        features: ["GPS นำทาง", "Bluetooth", "กล้องมองหลัง", "USB Charger", "ประกันชั้น 1", "เครื่องเล่น MP3"]
    },
    vios: {
        name: "Toyota Vios",
        price: 1200,
        rating: 4.8,
        reviews: 124,
        badges: ["ยอดนิยม"],
        mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmashxqV0Q-na1lqLMLSj4hdAruC4VCLKGcbswquWLf9STQb2bDc_u9RC1y1w7hyIs__49NPA8wwdKNVY5nV-Eb4SnhBW_gUcacVypXhnS4GmGs5j6h0whODBxOcnhEHt_YGhXS5vHlC1KsDiZlxbnb7OLyeuf1wDy-HWpeFYAalb93pLpQ53IKGKJHxYtY6A3sFVYQEkax-cRE5nrC_8i5o6iFKQGR8JCYj5oN1jAZ4VNX3KnhAPYOYym7Saw2FPywiVewXc8Nx6d",
        specs: { transmission: "อัตโนมัติ", seats: "5 ที่นั่ง", fuel: "เบนซิน E20", luggage: "2 ใบใหญ่" },
        description: "รถเก๋ง 4 ประตูยอดนิยม ขับสบาย ห้องโดยสารกว้างขวาง เหมาะสำหรับครอบครัว",
        features: ["GPS นำทาง", "Bluetooth / Apple CarPlay", "กล้องมองหลัง", "USB Charger 4 จุด", "ประกันภัยชั้น 1", "ระบบเบรก ABS"]
    },
    hrv: {
        name: "Honda HR-V",
        price: 1850,
        rating: 4.9,
        reviews: 156,
        badges: ["ยอดนิยม", "Hybrid"],
        mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAppJiw5eBPqfWVMNnGHrBbroIt0filFFavNmM3-TLDw4sEEObGG_kcl6qQ-_Xr6ee5cm2_T_k2bBN50Lgooh1qSphMj0BO4IVHNlSexN3aULhGsVpAw2gK2gTb_Obx93RikYirBjIeRAHXulwG0x5Lz3lvCpqyv3BxL_PlxTOb4gjflA0ZOyE6ElbOgVtPL76_ZFUGpKnDtehYml0-6E0XMqMSlTBRLb8a1uU-8p9FPv3LjI9b8Z8Gqv8TaQsBB1YItZt4112wpY8j",
        specs: { transmission: "อัตโนมัติ", seats: "5 ที่นั่ง", fuel: "Hybrid", luggage: "3 ใบ" },
        description: "รถ SUV ขนาดกะทัดรัด ระบบไฮบริด ประหยัดน้ำมันยอดเยี่ยม พื้นที่เก็บของกว้างขวาง",
        features: ["GPS นำทาง", "Bluetooth / Apple CarPlay", "กล้องมองหลัง", "USB Charger 4 จุด", "Sunroof", "ประกันภัยชั้น 1"]
    },
    bmw3: {
        name: "BMW Series 3",
        price: 4500,
        rating: 4.9,
        reviews: 78,
        badges: ["Premium", "Luxury"],
        mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN8P6hV-zAo4BL7boEgRLUBun5X3VqyiZvdJiN-csblv9m98P8YfH-2xyng_riAXaB8bUUCVRxCzbg3UldC1EonNXXAYbDIAe8cq6UDuuEaNFo9y_DtLwN_mT_5y8dQeuo7JBvf_39oSL7O3mIBbPnYCWil-Fa6HEIkEm9b_If9mkPz9Jmmmn4KU-5v1Q0WC5ODvTAcg7KU109NetrB59h_PBGFULfJAIl_Bey9z2ljctbVyVv0g8HAlUb73vSrDP4UpCYkwhmAgTe",
        specs: { transmission: "อัตโนมัติ", seats: "5 ที่นั่ง", fuel: "ดีเซล", luggage: "2 ใบใหญ่" },
        description: "รถเก๋งหรูระดับพรีเมียม สมรรถนะสูง ห้องโดยสารหรูหรา เทคโนโลยีล้ำสมัย",
        features: ["GPS นำทาง", "Bluetooth / Apple CarPlay", "กล้องมองหลัง", "USB Charger 4 จุด", "Sunroof เปิด-ปิดไฟฟ้า", "ประกันภัยชั้น 1"]
    },
    tesla3: {
        name: "Tesla Model 3",
        price: 3200,
        rating: 4.8,
        reviews: 92,
        badges: ["Electric", "Premium"],
        mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8hv5Wndbs5iFNYWFHVhklGN7XbAz_fgaMtc5zU00frSW3e8JVTVTGLX70hs6BwXsz67dA_jeQmvCcPH59-OnjzWbi_1RQ8-0ZuVyX8XO7-6hHA8d2AbOTiKsS2aBIZ_RElLFKun2golZifYEc_rpy4TSVY54qiUuMWfM7gh7FD4zLmo9srIk3X7iVdYvnVeo3tRmrHLX1-F6wEcZwvcjp4Mmi-XN5EdLNItIeB4HXIZ6qiDQiGpagmOHK66wNB7n8yIyZbzj9q0Jw",
        specs: { transmission: "อัตโนมัติ", seats: "5 ที่นั่ง", fuel: "ไฟฟ้า 100%", luggage: "2 ใบ (หน้า/หลัง)" },
        description: "รถยนต์ไฟฟ้าระดับพรีเมียม ขับเคลื่อนด้วยพลังงานไฟฟ้า 100% เทคโนโลยีอัตโนมัติขั้นสูง",
        features: ["GPS นำทาง", "Bluetooth / Apple CarPlay", "กล้องมองหลัง", "USB Charger 4 จุด", "Autopilot", "ประกันภัยชั้น 1"]
    },
    commuter: {
        name: "Toyota Commuter",
        price: 2500,
        rating: 4.6,
        reviews: 67,
        badges: ["รถตู้", "11 ที่นั่ง"],
        mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW3EYNrPg_RCnLPj-W24qleiP2RWUMQhvfX_lUMqWIDsmeH2V117Irgatr99DSdxtXcAdnjX_bCspBYcJtWFiddFTNrxQXt40zr8eDYqc4Eg2HPqh6_CW1-yipr2jcud1ZvzUAN7I4HJUUrbVehl_lu-FW7rdcwzFw_Gk2uVE8hjDL4doA_AR3UKBWebril4z59lAf_bDYuLofRTJEnh75oJk8F6b7-X_qKDDHAQ869qGzoXb02Llj60S7n_wicXDKMq2BH8ZnBpcw",
        specs: { transmission: "เกียร์ธรรมดา", seats: "11 ที่นั่ง", fuel: "ดีเซล", luggage: "4 ใบใหญ่" },
        description: "รถตู้ขนาดใหญ่ รองรับผู้โดยสาร 11 ที่นั่ง เหมาะสำหรับกรุ๊ปทัวร์และครอบครัวใหญ่",
        features: ["GPS นำทาง", "Bluetooth", "กล้องมองหลัง", "USB Charger", "เครื่องปรับอากาศ 3 แถว", "ประกันภัยชั้น 1"]
    }
};

function getCarIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('car') || 'vios';
}

function updateCarDetails() {
    const carId = getCarIdFromURL();
    const car = carsData[carId];
    if (!car) return;

    document.querySelector('h1').textContent = car.name;
    document.querySelectorAll('.text-primary.font-black').forEach(el => {
        if (el.textContent.includes('฿')) el.innerHTML = `฿${car.price.toLocaleString()}<span class="text-sm font-normal text-gray-500 dark:text-gray-400">/วัน</span>`;
    });
    document.querySelectorAll('.text-6xl.font-black').forEach(el => el.textContent = car.rating);
    document.querySelector('.aspect-video .bg-cover').style.backgroundImage = `url('${car.mainImage}')`;
    
    const badgeContainer = document.querySelector('.flex.items-center.gap-2');
    if (badgeContainer) {
        badgeContainer.innerHTML = car.badges.map(badge => {
            const colorClass = badge.includes('Electric') || badge.includes('Hybrid') || badge.includes('Eco') 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                : 'bg-blue-100 dark:bg-blue-900/30 text-primary';
            return `<span class="px-2 py-1 ${colorClass} text-xs font-bold rounded uppercase tracking-wider">${badge}</span>`;
        }).join('');
    }

    const specDivs = document.querySelectorAll('.grid.grid-cols-2.md\\:grid-cols-4.gap-4 > div .font-bold');
    const specsArray = [car.specs.transmission, car.specs.seats, car.specs.fuel, car.specs.luggage];
    specDivs.forEach((el, i) => { if (specsArray[i]) el.textContent = specsArray[i]; });

    const descP = document.querySelector('.prose p');
    if (descP) descP.textContent = car.description;

    const featuresGrid = document.querySelector('.grid.grid-cols-2.md\\:grid-cols-3.gap-y-3');
    if (featuresGrid) {
        featuresGrid.innerHTML = car.features.map(f => `
            <div class="flex items-center gap-2 text-text-main-light dark:text-text-main-dark">
                <span class="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                <span>${f}</span>
            </div>
        `).join('');
    }

    const days = 3, subtotal = car.price * days, total = subtotal - 500;
    const priceBreakdown = document.querySelector('.bg-background-light.dark\\:bg-background-dark.rounded-lg.p-4.space-y-2');
    if (priceBreakdown) {
        priceBreakdown.innerHTML = `
            <div class="flex justify-between text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <span>฿${car.price.toLocaleString()} x ${days} วัน</span><span>฿${subtotal.toLocaleString()}</span>
            </div>
            <div class="flex justify-between text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <span>ค่าธรรมเนียมบริการ</span><span>฿0</span>
            </div>
            <div class="flex justify-between text-sm text-green-600 font-medium">
                <span>ส่วนลดโปรโมชั่น</span><span>-฿500</span>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-700 my-2 pt-2 flex justify-between items-center">
                <span class="font-bold text-text-main-light dark:text-text-main-dark">ยอดรวมสุทธิ</span>
                <span class="text-xl font-black text-primary">฿${total.toLocaleString()}</span>
            </div>
        `;
    }

    document.querySelectorAll('a[href*="carrent.html"]').forEach(btn => btn.href = `carrent.html?car=${carId}`);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCarDetails);
} else {
    updateCarDetails();
}
