let cityTheater = [
    {
        city: "서울",
        theater:
            [
                "강남",
                "강변",
                "건대입구",
                "구로",
                "대학로",
                "동대문",
                "등촌",
                "명동",
                "미아",
                "방학",
                "불광",
                "상봉",
                "송파",
                "수유",
                "압구정",
                "여의도",
                "연남",
                "영등포",
                "왕십리",
                "중계",
                "천호",
                "하계",
                "홍대"
            ]
    },
    {
        city: "경기", theater:
            [
                "경기광주",
                "고양백석",
                "고양행신",
                "광교",
                "광교상현",
                "광명역",
                "구리",
                "기흥",
                "김포",
                "김포운양",
                "김포한강",
                "다산",
                "동백",
                "동수원",
                "동탄",
                "동탄역",
                "배곧",
                "범계",
                "부천",
                "부천역",
                "부천옥길",
                "북수원",
                "산본",
                "서현",
                "성남모란",
                "소풍",
                "수원",
                "시흥",
                "안산",
                "안성",
                "야탑",
                "양주옥정",
                "역곡",
                "오리",
                "오산"
            ]
    },
    {
        city: "인천",
        theater: [
            "계양",
            "부평",
            "연수역"
        ]
    },
    {
        city: "강원",
        theater: [
            "강릉",
            "기린",
            "원주"
        ]
    },
    {
        city: "대전/충청",
        theater: [
            "논산",
            "당진",
            "대전"
        ]
    },
    {
        city: "대구",
        theater: [
            "대구",
            "대구수성",
            "대구연경"
        ]
    }
]

let city_list = document.getElementById('city_list');
let theater_list = document.getElementById('theater_list');
let theater_plz = document.getElementById('theater_plz');

function print_city() {
    let ul = document.createElement('ul');

    for (const iter of cityTheater) {
        let li = document.createElement('li');
        li.innerHTML = `${iter['city']}(${iter['theater'].length})`;
        li.id = `${iter['city']}`;
        li.addEventListener("click", print_theater);
        ul.appendChild(li)
    }
    city_list.appendChild(ul);
}
print_city();

function print_theater(e) {
    theater_list.innerHTML = '';

    for (const city of cityTheater) {
        if (city['city'] == e.target.id) {
            let ul = document.createElement('ul');

            for (const theater of city['theater']) {
                let li = document.createElement('li');
                li.innerHTML = `${theater}`;
                li.id = `${theater}`
                ul.appendChild(li)
            }

            theater_list.appendChild(ul);
            return;
        }
    }
}

let choseTheater;
theater_list.addEventListener("click", function (p) {
    if (p.target.tagName == 'LI') {
        if (choseTheater == undefined) {
            choseTheater = p.target;
            choseTheater.classList.add('bg_gray')
        } else {
            choseTheater.classList.remove('bg_gray');
            choseTheater = p.target;
            choseTheater.classList.add('bg_gray')
        }
    }

    theater_plz.classList.add('dp_none');
    calendar.classList.remove('dp_none');
});
